document.addEventListener("DOMContentLoaded", function() {
    const reportForm = document.getElementById("reportForm");
    const submitBtn = document.getElementById("submitBtn");
    const historyContainer = document.getElementById("historyContainer");
    const closeHistoryBtn = document.getElementById("closeHistoryBtn");
    const body = document.body;

    // Function to handle form submission
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const report = document.getElementById("report").value;
        
        // Display the recent entry
        document.getElementById("recentEntryContent").innerHTML = `<strong>Ім'я:</strong> ${name}<br><strong>Звіт:</strong> ${report}`;

        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("report").value = "";

        // Add the submitted report to the report container
        const reportContainer = document.getElementById("reportContainer");
        reportContainer.innerHTML += `<div><strong>Ім'я:</strong> ${name}<br><strong>Звіт:</strong> ${report}</div>`;
    });

    // Function to toggle display of history container
    closeHistoryBtn.addEventListener("click", function() {
        historyContainer.style.display = "none";
    });

    // Function to toggle between different themes
    const darkModeBtn = document.getElementById("darkModeBtn");
    darkModeBtn.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
    });

    // Function to change form color based on theme
    function changeFormColor(theme) {
        if (theme === "dark") {
            reportForm.style.backgroundColor = "#222";
            reportForm.style.color = "#fff";
        } else if (theme === "light") {
            reportForm.style.backgroundColor = "#fff";
            reportForm.style.color = "#000";
        } else if (theme === "rainbow") {
            // You can define your own colors for rainbow theme
            reportForm.style.backgroundColor = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
            reportForm.style.color = "#fff"; // Text color on rainbow background
        }
    }

    // Initial theme
    let currentTheme = "light";

    // Toggle between different themes
    darkModeBtn.addEventListener("click", function() {
        if (currentTheme === "light") {
            currentTheme = "dark";
        } else if (currentTheme === "dark") {
            currentTheme = "rainbow";
        } else {
            currentTheme = "light";
        }
        changeFormColor(currentTheme);
    });

    // Set initial form color based on the initial theme
    changeFormColor(currentTheme);
});
