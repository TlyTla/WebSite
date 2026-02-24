document.addEventListener('DOMContentLoaded', function() {
           
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');

            
    function openSidebar() {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; 
    }

    menuToggle.addEventListener('click', openSidebar);

    closeBtn.addEventListener('click', closeSidebar);

    overlay.addEventListener('click', closeSidebar);
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    });
});