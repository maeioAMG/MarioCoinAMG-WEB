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
topBtn.style.background = "linear-gradient(135deg, #F2B233, #FFDFA3)";
topBtn.style.color = "#0a1a0a";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.fontWeight = "bold";
topBtn.style.boxShadow = "0 4px 12px rgba(242, 178, 51, 0.4)";

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

// ==== Logo fallback handling ====
document.addEventListener('DOMContentLoaded', function() {
    const logoImg = document.querySelector('.logo');
    if (logoImg) {
        logoImg.addEventListener('error', function() {
            // If logo fails to load, create a fallback
            const fallbackDiv = document.createElement('div');
            fallbackDiv.style.width = '160px';
            fallbackDiv.style.height = '160px';
            fallbackDiv.style.borderRadius = '50%';
            fallbackDiv.style.background = 'linear-gradient(135deg, #F2B233, #FFDFA3)';
            fallbackDiv.style.display = 'flex';
            fallbackDiv.style.alignItems = 'center';
            fallbackDiv.style.justifyContent = 'center';
            fallbackDiv.style.fontSize = '24px';
            fallbackDiv.style.fontWeight = 'bold';
            fallbackDiv.style.color = '#0a1a0a';
            fallbackDiv.style.margin = '0 auto 10px';
            fallbackDiv.style.boxShadow = '0 4px 15px rgba(0, 255, 102, 0.3)';
            fallbackDiv.textContent = '🐢 MC';
            
            logoImg.parentNode.replaceChild(fallbackDiv, logoImg);
        });
    }
});

// ==== Dynamic copyright year ====
document.addEventListener('DOMContentLoaded', function() {
    const footerText = document.querySelector('footer p');
    if (footerText && footerText.textContent.includes('2025')) {
        const currentYear = new Date().getFullYear();
        footerText.textContent = footerText.textContent.replace('2025', currentYear);
    }
});
