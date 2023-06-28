// Theme Color
let currentTheme = localStorage.getItem("theme-color");
const switchTheme = function () {
  const storedTheme = localStorage.getItem("theme-color") || "theme-light";
  if (
    storedTheme === "theme-dark" &&
    document.getElementsByTagName("html")[0].className !== ""
  ) {
    localStorage.setItem("theme-color", "theme-light");
    currentTheme = localStorage.getItem("theme-color");
    if (currentTheme === "theme-light") {
      document.getElementsByTagName("html")[0].classList.remove("dark-mode");
      document
        .getElementsByClassName("theme-switcher")[0]
        ?.classList.remove("active");
      document.getElementsByClassName("toc")[0]?.classList.remove("active");
    }
  } else {
    localStorage.setItem("theme-color", "theme-dark");
    currentTheme = localStorage.getItem("theme-color");
    if (currentTheme === "theme-dark") {
      // console.log(document.getElementById("app"));
      document.getElementsByTagName("html")[0].classList.add("dark-mode");
      document
        .getElementsByClassName("theme-switcher")[0]
        ?.classList.add("active");
      document.getElementsByClassName("toc")[0]?.classList.add("active");
    }
  }
};
const initTheme = function () {
  const storedTheme = localStorage.getItem("theme-color") || "theme-light";
  if (storedTheme === "theme-dark") {
    document
      .getElementsByClassName("theme-switcher")[0]
      ?.classList.add("active");
    document.getElementsByClassName("toc")[0]?.classList.add("active");
    document.getElementsByTagName("html")[0].classList.add("dark-mode");
  }
};
initTheme();

// Arrow Up
const arrowup = document.querySelector(".arrowup");
arrowup.classList.add("hidden");
// 监听滚动事件
window.addEventListener("scroll", () => {
  // 检查页面滚动的垂直距离
  const scrollY = window.scrollY;
  // 如果滚动距离达到一定值，显示按钮
  if (scrollY >= 200) {
    arrowup.classList.add("visible");
    arrowup.classList.remove("hidden");
  } else {
    arrowup.classList.add("hidden");
    arrowup.classList.remove("visible");
  }
});
arrowup.addEventListener("click", function () {
  const scrollDuration = 1500; // 滚动持续时间，单位毫秒
  const start = window.pageYOffset; // 当前滚动位置
  const end = 0; // 滚动结束位置
  const distance = end - start; // 滚动距离
  const startTime = performance.now(); // 动画开始时间
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
  function scrollToTopSmooth(timestamp) {
    const currentTime = timestamp - startTime; // 已经经过的时间
    const progress = currentTime / scrollDuration; // 滚动进度
    const position = start + distance * easeInOutCubic(Math.min(progress, 1)); // 当前滚动位置
    window.scrollTo(0, position); // 滚动到新位置
    if (currentTime < scrollDuration) {
      // 如果滚动还未结束，则继续执行动画
      requestAnimationFrame(scrollToTopSmooth);
    }
  }
  requestAnimationFrame(scrollToTopSmooth);
});

// Prism
window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("pre[class*=language-]").forEach(function (node) {
    node.classList.add("line-numbers");
    node.style.border = "solid #FFFFFF 1px";
  });
  Prism.highlightAll();
});

// lighthouse
window.onload = function () {
  let searchBtnsForProps = document.getElementsByClassName(
    "gh-search gh-icon-btn"
  );
  for (i = 0; i < searchBtnsForProps.length; i++) {
    searchBtnsForProps[i].setAttribute("id", `GhostSearch${i}`);
    searchBtnsForProps[i].setAttribute("aria-label", "Ghost Blog Search");
  }
  document
    .querySelector("button.gh-burger")
    .setAttribute("aria-label", "Ghost Blog Nav Menu");
};
