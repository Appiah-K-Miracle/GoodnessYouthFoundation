document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    // FAQ ACCORDION JS START =====
    const accordionContainers = document.querySelectorAll(".ul-accordion");

    accordionContainers.forEach(accordionContainer => {
        const accordionItems = accordionContainer.querySelectorAll(".ul-single-accordion-item");
        accordionItems.forEach((accordionItem) => {
            accordionItem.onclick = () => {
                const openedItems = accordionContainer.querySelector(".ul-single-accordion-item.open");
                if (accordionItem.classList.contains("open")) {
                    openedItems.classList.remove("open")
                } else {
                    accordionItem.classList.toggle("open");
                    if (openedItems) {
                        openedItems.classList.remove("open")
                    }
                }
            }
        })
    });
    //===== FAQ ACCORDION JS END
});