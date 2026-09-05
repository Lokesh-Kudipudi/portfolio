function handleHover(e, opacity) {
  if (!e.target.closest(".skill")) return;
  const skill = e.target.closest(".skill");
  const siblings = skill.closest(".skills").querySelectorAll(".skill");

  siblings.forEach((el) => {
    if (el !== skill) el.style.opacity = opacity;
  });
}

export default handleHover;
