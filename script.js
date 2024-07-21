document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const pages = document.querySelectorAll('.page');
    const totalPages = pages.length;

    document.addEventListener('click', () => {
        pages.forEach((page, index) => {
            page.style.transform = `rotateY(${(index - currentPage) * 180}deg)`;
        });

        currentPage = (currentPage + 1) % totalPages;
    });
});
