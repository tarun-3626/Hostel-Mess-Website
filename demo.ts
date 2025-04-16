

const toggleBtn = document.querySelector('.toggle_btn') as HTMLElement | null;
const toggleBtnIcon = document.querySelector('.toggle_btn i') as HTMLElement | null;
const dropDownMenu = document.querySelector('.dropdown_menu') as HTMLElement | null;

if (toggleBtn && toggleBtnIcon && dropDownMenu) {
    toggleBtn.onclick = () => {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.className = isOpen
            ? 'fa fa-times-circle'
            : 'fa fa-bars';
    };
} else {
    console.error("One or more elements not found in the DOM.");
}
