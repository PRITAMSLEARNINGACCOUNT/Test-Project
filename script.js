const openButton = document.querySelector('#contactGmail');
const closeButton = document.querySelector('.close-button');
const modal = document.querySelector('.getInTouchContainer');

openButton.addEventListener('click',(e) => {
    modal.showModal();
})
closeButton.addEventListener('click',(e) => {
    modal.close();
})