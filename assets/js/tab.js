document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const tabGroups = document.querySelectorAll(".tab-group"); // Wrapper for each tab group

    tabGroups.forEach(group => {
        console.log(group);
        const tabButtons = group.querySelectorAll(".tab-nav");
        const tabs = group.querySelectorAll(".ul-tab");

        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                const tabId = button.getAttribute("data-tab");

                // Activate the correct tab
                tabs.forEach(tab => {
                    if (tab.id === tabId) {
                        tab.classList.add("active");
                    } else {
                        tab.classList.remove("active");
                    }
                });

                // Manage active class for buttons
                tabButtons.forEach(btn => {
                    btn.classList.remove("active");
                });
                button.classList.add("active");
            });
        });
    });

});