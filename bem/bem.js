function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    //   Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    //   Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toats__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };
    const icons = {
      success: "fa-solid fa-circle-check",
      info: "fa-regular fa-circle-info",
      warning: "fa-thin fa-circle-exclamation",
      error: "fa-thin fa-circle-exclamation",
    };

    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    toast.classList.add("toast", `toast--${tytpe}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `
        <div class="toats__icon">
            <i class="${icon}"></i>
        </div>

        <div class="toats__body">
            <h3 class="toats__title">${title}</h3>
            <p class="toats__msg">${message}</p>
        </div>

        <div class="toats__close">
            <i class="fa-solid fa-xmark"></i>
        </div>
        `;
    main.appendChild(toast);
  }
}
