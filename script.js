
const links = document.querySelectorAll("nav a");
links.forEach(link => {
  link.addEventListener("click", () => {
    console.log("تم التوجه إلى:", link.getAttribute("href"));
  });
});
