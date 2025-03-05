
//the dropdown div must have a nav element and a button element
export default function dropdown(targetDropdownDiv) {
    const dropdownDiv = targetDropdownDiv;
    const dropdownButton = dropdownDiv.querySelector('button');
    const dropdownNav = dropdownDiv.querySelector('nav');
    dropdownNav.style.display = 'block';
    dropdownButton.addEventListener('click', () => {
        dropdownNav.style.display = dropdownNav.style.display === 'block' ? 'none' : 'block';
        console.log('clicked');
    });
    return dropdownDiv;
}