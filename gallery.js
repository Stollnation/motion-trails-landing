const examples = {
  ease: ["viewport-ease.webp", "Bouncing ball trail with two labeled Ease grips", "Two Ease grips control spacing between a pair of keys."],
  key: ["viewport-key.webp", "World-space arrows and plane grips on a motion trail key", "Select a key to move its pose along one axis or across a plane."],
  tangent: ["viewport-tangent.webp", "World-space manipulator on an outgoing tangent handle", "Select a tangent to shape the direction the control leaves a key."]
};
for (const button of document.querySelectorAll("[data-view]")) {
  button.addEventListener("click", () => {
    const [file, alt, caption] = examples[button.dataset.view];
    const image = document.getElementById("shot");
    image.src = "assets/" + file;
    image.alt = alt;
    document.getElementById("caption").textContent = caption;
    for (const choice of document.querySelectorAll("[data-view]")) {
      choice.setAttribute("aria-pressed", String(choice === button));
    }
  });
}
