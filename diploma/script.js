// Додаткова інтерактивність (за бажанням)
document.addEventListener('DOMContentLoaded', () => {
    // Hover ефекти
    const categories = document.querySelectorAll('.category');
    const products = document.querySelectorAll('.product');

    categories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            category.style.transform = 'scale(1.05)';
        });
        category.addEventListener('mouseleave', () => {
            category.style.transform = 'scale(1)';
        });
    });

    products.forEach(product => {
        product.addEventListener('mouseenter', () => {
            product.style.transform = 'scale(1.02)';
        });
        product.addEventListener('mouseleave', () => {
            product.style.transform = 'scale(1)';
        });
    });
});