
function openModal() {
    document.getElementById('pop-up').style.display = 'flex';
    document.getElementById('pop-up-close').style.display = 'block';
}

function closeModal() {
    document.getElementById('pop-up').style.display = 'none';
    document.getElementById('pop-up-close').style.display = 'none';
    document.body.style.overflow = 'visible'; // or 'auto'
}

const btn = document.querySelector(".container__list__item__btn")

btn.addEventListener("click", () => {
    openModal()
    document.body.style.overflow = 'hidden';
})