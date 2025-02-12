
window.onload = function() {
    showImages('new');
};

function showImages(category) {
   
    document.getElementById('new-category').style.display = 'none';
    document.getElementById('bestsellers-category').style.display = 'none';
    document.getElementById('recommended-category').style.display = 'none';

   
    document.getElementById(`${category}-category`).style.display = 'flex';


    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    document.querySelector(`.tab:nth-child(${category === 'new' ? 1 : category === 'bestsellers' ? 2 : 3})`).classList.add('active');
}

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
  
    if (menu.style.display === 'block') {
        menu.style.display = 'none'; 
    } else {
        menu.style.display = 'block'; 
    }
}







