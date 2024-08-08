document.addEventListener('DOMContentLoaded', () => {
    const scrollToBottomBtn = document.getElementById('scrollToBottom');

    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scroll hacia abajo
            scrollToBottomBtn.classList.remove('show');
        } else {
            // Scroll hacia arriba
            scrollToBottomBtn.classList.add('show');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    scrollToBottomBtn.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
});
