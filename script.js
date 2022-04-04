let cards = document.querySelectorAll('.card')

cards.forEach(card =>{
    card.addEventListener('click', ()=>{
        RemoveClass()
        card.classList.add('active')
    })
})

function RemoveClass(){
    cards.forEach(card =>{
        card.classList.remove('active')
    })
}