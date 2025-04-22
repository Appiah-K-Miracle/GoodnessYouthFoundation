document.addEventListener("DOMContentLoaded", () => {
    const customInput = document.querySelector(".ul-donate-form-custom-input");
    const radioButtons = document.querySelectorAll('input[name="donate-amount"]');

    // Set the default value in the custom input field based on the preselected radio button
    const defaultSelected = document.querySelector('input[name="donate-amount"]:checked');
    if (defaultSelected && defaultSelected.id !== "donate-amount-custom") {
        customInput.value = defaultSelected.nextElementSibling.textContent.replace('$', '').trim();
    }

    radioButtons.forEach(radio => {
        radio.addEventListener("change", () => {
            // Update the custom input field with the value of the selected radio button
            if (radio.id !== "custom-amount") {
                customInput.value = radio.nextElementSibling.textContent.replace('$', '').trim();
            }
        });
    });

    // Prevent clearing the custom input field on focus
    customInput.addEventListener("focus", () => {
        const selectedRadio = document.querySelector('input[name="donate-amount"]:checked');
        if (selectedRadio && selectedRadio.id !== "custom-amount") {
            selectedRadio.checked = true; // Keep the last selected amount radio button checked
        }
    });
});
