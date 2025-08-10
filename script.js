// ==== Buton Scroll to Top ====

// Creăm butonul dinamic
const topBtn = document.createElement("button");
topBtn.innerText = "⬆";
topBtn.id = "scrollTopBtn";
document.body.appendChild(topBtn);

// Stilizare rapidă prin JS (poți muta în CSS)
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.fontSize = "18px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "8px";
topBtn.style.background = "#9945FF";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

// Arătăm butonul când se face scroll
window.onscroll = function() {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Scroll lin în sus
topBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// ==== Highlight în meniu ====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
