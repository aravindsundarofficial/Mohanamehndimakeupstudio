// MOHANA Studio interactions
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  const topBtn = document.getElementById("topBtn");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
    topBtn.style.display = window.scrollY > 500 ? "grid" : "none";

    const sections = document.querySelectorAll("section[id], header[id]");
    const links = document.querySelectorAll(".nav-link");
    let current = "home";
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) current = section.id;
    });
    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  });

  topBtn.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

  // Bootstrap gallery lightbox
  document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {
      document.getElementById("modalPhoto").src = img.src;
      new bootstrap.Modal("#photoModal").show();
    });
  });

  // Booking form -> WhatsApp
  document.getElementById("bookingForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const text =
      `Hi Mohana Studio!%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Preferred Date: ${encodeURIComponent(date)}%0A` +
      `Service: ${encodeURIComponent(service)}%0A` +
      `Message: ${encodeURIComponent(message || "Please share package details.")}`;

    window.open(`https://wa.me/918110846493?text=${text}`, "_blank");
  });

  // Close mobile menu after clicking a navigation item
  document.querySelectorAll(".navbar .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});
