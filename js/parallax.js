document.addEventListener("scroll", () => {
    let header = document.querySelector("header img");
    let value = Math.min(window.scrollY / header.offsetHeight, 1);
    header.style.transform = `translateY(${value * 75}%)`;
});
