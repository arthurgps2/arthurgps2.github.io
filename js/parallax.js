document.addEventListener("scroll", () => {
    // Header parallax
    let header = document.querySelector("header img");
    let value1 = Math.min(window.scrollY / header.offsetHeight, 1);
    header.style.transform = `translateY(${value1 * 75}%)`;

    // Footer parallax
    let footer = document.querySelector("footer");
    let rect = footer.getBoundingClientRect();
    let value2 = Math.min((Math.round(rect.bottom) - window.innerHeight) / rect.height, 1);
    let footerBg = document.querySelector(".footer-bg");
    footerBg.style.transform = `translateY(${value2 * 20}%)`;
});
