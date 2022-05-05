// A hack to make our class inherit from Reveal's "fragment" class.
// A cleaner approach would use a CSS compiler.
window.addEventListener("load", () => {
  document.querySelectorAll(".incremental-list li").forEach((listItem) => {
    listItem.classList.add("fragment");
  });
});
