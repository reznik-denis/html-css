const hidden = document.querySelector('.hero-bacgorund_description');
const img = document.querySelector('.img');
img.addEventListener('click', handleOnClick);

function handleOnClick() {
    hidden.classList.toggle('hidden');
    return
}