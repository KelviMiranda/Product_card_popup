"use strict";
/* ====================== CARD POPUP JS ======================== */

const modal = document.querySelectorAll(".modal"),
      cardBtn = document.querySelectorAll(".card__product"),
      modalClose = document.querySelectorAll(".modal__close"),
      modalCard = document.querySelectorAll(".modal__card");

const activeModal = (modalClick) =>{
    modal[modalClick].classList.add('active-modal');
    console.log(modal);
}

/* Show modal */
cardBtn.forEach((cardBtn, i) => {
    cardBtn.addEventListener('click', () => {
        activeModal(i)
        console.log(`A posição ${i} foi adicionada`)
    });
});

console.log(cardBtn)

/* Hide modal */
const removeModal = (modalRemove) => {
    modal[modalRemove].classList.remove("active-modal");
}

modalClose.forEach((modalClose, i) => {
   modalClose.addEventListener("click", () => {
    modal.forEach(modalRemove => {
        modalRemove.classList.remove("active-modal");
        
    })
    console.log(`A posição ${i} foi removida`);
   })
})

/* Hide modal on background click */
modal.forEach(modal => {
    modal.addEventListener("click", () => {
        modal.classList.remove("active-modal");
    })
})

/* Don´t hide modal on card click(by event propagation) */

modalCard.forEach(modalCard => {
    modalCard.addEventListener("click", event => {
        event.stopPropagation()
    })
})