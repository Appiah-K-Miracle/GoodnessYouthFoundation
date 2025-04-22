const progressBars = document.querySelectorAll('.ul-progressbar');
progressBars.forEach(progressBar => {
    const targetValue = parseInt(progressBar.getAttribute('data-ul-progress-value'), 10);
    const progressLabel = progressBar.querySelector(".ul-progress-label");
    let currentValue = 0;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const updateProgressBar = () => {
                    if (currentValue < targetValue) {
                        currentValue++;
                        progressBar.style.width = `${currentValue}%`;
                        progressLabel.textContent = `${currentValue}%`;
                        requestAnimationFrame(updateProgressBar);
                    }
                };

                updateProgressBar();
                observer.unobserve(progressBar);
            }
        });
    });

    observer.observe(progressBar);
});