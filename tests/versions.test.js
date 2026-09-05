import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { existsSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { Route, Routes } from 'react-router-dom';
import { createServer } from 'vite';
import { readPreferredVersion, rememberVersion } from '../src/config/versions.js';

let server;
let V1;
let V2;
let VersionSwitcher;

before(async () => {
  server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
  V1 = (await server.ssrLoadModule('/src/versions/v1/App.jsx')).default;
  V2 = (await server.ssrLoadModule('/src/versions/v2/App.jsx')).default;
  VersionSwitcher = (await server.ssrLoadModule('/src/components/VersionSwitcher.jsx')).default;
});

after(async () => { await server?.close(); });

function renderVersion(location) {
  return renderToStaticMarkup(createElement(StaticRouter, { location },
    createElement(VersionSwitcher),
    createElement(Routes, null,
      createElement(Route, { path: '/v1/*', element: createElement(V1) }),
      createElement(Route, { path: '/v2/*', element: createElement(V2) }),
    ),
  ));
}

for (const [route, expected] of [
  ['/v1', 'Namaste!'],
  ['/v1/', 'Namaste!'],
  ['/v1/aboutme', 'Education'],
  ['/v1/projects', 'Here are my Projects!'],
  ['/v1/skills', 'These are my Skills!'],
  ['/v1/contactme', 'Let us get in touch!'],
  ['/v1/missing', 'Page not found.'],
  ['/v2', 'Lokesh Kudipudi'],
]) {
  test(`${route} renders its portfolio and working version links`, () => {
    const html = renderVersion(route);
    assert.ok(html.includes(expected));
    assert.match(html, /aria-label="Portfolio version"/);
    assert.match(html, /aria-current="page"/);
    assert.match(html, /href="\/v1"/);
    assert.match(html, /href="\/v2"/);
    assert.ok(html.includes(route.startsWith('/v1') ? 'portfolio-v1 dark' : 'portfolio-v2'));
    assert.ok(!html.includes(route.startsWith('/v1') ? 'class="portfolio-v2"' : 'class="portfolio-v1'));
    for (const [, asset] of html.matchAll(/src="(\/[^"?]+)"/g)) {
      assert.ok(existsSync(new URL(`../public${asset}`, import.meta.url)), `Missing asset: ${asset}`);
    }
  });
}

test('version preference defaults safely and survives storage restrictions', () => {
  const originalWindow = globalThis.window;
  let stored = null;
  try {
    globalThis.window = { localStorage: {
      getItem: () => stored,
      setItem: (_key, value) => { stored = value; },
    } };
    assert.equal(readPreferredVersion(), 'v2');
    rememberVersion('v1');
    assert.equal(readPreferredVersion(), 'v1');
    rememberVersion('v2');
    assert.equal(readPreferredVersion(), 'v2');
    stored = 'invalid';
    assert.equal(readPreferredVersion(), 'v2');
    Object.defineProperty(globalThis.window, 'localStorage', { get() { throw new Error('Storage blocked'); } });
    assert.equal(readPreferredVersion(), 'v2');
    assert.doesNotThrow(() => rememberVersion('v1'));
  } finally {
    if (originalWindow === undefined) delete globalThis.window;
    else globalThis.window = originalWindow;
  }
});
