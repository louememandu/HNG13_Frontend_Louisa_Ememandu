const timeEl = document.querySelector('[data-testid="test-user-time"]');
function updateTime() {
    const now = new Date();
    timeEl.textContent = Date.now();
    timeEl.setAttribute("datetime", now.toISOString());
}
updateTime();
setInterval(updateTime, 1000);

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
    themeToggle.textContent =
    savedTheme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode";
}

themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.textContent =
    newTheme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode";
});