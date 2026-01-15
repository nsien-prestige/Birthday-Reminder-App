function addAnnouncement(message, type = "", options = {}) {
    const {
        containerId = "announcementContainer",
        duration = 5000
    } = options;

    const container = document.getElementById(containerId);
    if (!container) return;

    const toast = document.createElement("div");
    toast.classList.add("announcement-toast");
    
    if (type) toast.classList.add(type);
    toast.textContent = message;

    container.appendChild(toast);

    // animate in
    requestAnimationFrame(() => toast.classList.add("show"));

    // auto remove
    setTimeout(() => {
        toast.classList.remove("show");
        toast.classList.add("hide");

        toast.addEventListener("transitionend", () => {
            toast.remove();
        });
    }, duration);
}

module.exports = { addAnnouncement };