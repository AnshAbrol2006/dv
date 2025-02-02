function showImages(category) {
    // First, hide all images
    const allCategories = document.querySelectorAll('.inside1, .inside2, .inside3, .inside4, .inside5');
    allCategories.forEach(image => {
        image.style.display = 'none'; // Hide all images
    });

    // Show images based on category
    const categoryImages = document.querySelectorAll(`.${category}-category`);
    categoryImages.forEach(image => {
        image.style.display = 'flex'; // Show images for selected category
    });
}
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    // Toggle the display of the menu
    if (menu.style.display === 'block') {
        menu.style.display = 'none'; // Hide the menu
    } else {
        menu.style.display = 'block'; // Show the menu
    }
}



