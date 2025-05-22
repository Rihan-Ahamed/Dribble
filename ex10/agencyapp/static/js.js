document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");

  if (!popup) return;

  const teamNames = document.querySelectorAll(".team-name");

  teamNames.forEach(name => {
    name.addEventListener("mouseenter", (e) => {
      const info = e.target.getAttribute("data-info");
      if (!info) return;

      popup.textContent = info;
      popup.style.opacity = "1";
    });

    name.addEventListener("mousemove", (e) => {
      const offset = 15;
      popup.style.top = e.pageY + offset + "px";
      popup.style.left = e.pageX + offset + "px";
    });

    name.addEventListener("mouseleave", () => {
      popup.style.opacity = "0";
    });
  });


});
