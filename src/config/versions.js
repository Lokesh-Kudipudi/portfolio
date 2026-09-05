export const VERSION_STORAGE_KEY = 'portfolio-version';

export function readPreferredVersion() {
  try {
    return window.localStorage.getItem(VERSION_STORAGE_KEY) === 'v1' ? 'v1' : 'v2';
  } catch {
    return 'v2';
  }
}

export function rememberVersion(version) {
  try {
    window.localStorage.setItem(VERSION_STORAGE_KEY, version);
  } catch {
    // Version links still work when browser storage is unavailable.
  }
}
