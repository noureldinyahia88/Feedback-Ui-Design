const ratings = document.querySelectorAll('.rating')
const ratings_container = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'satisfied'


ratings_container.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains('rating')){
        removeAllActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click',(e)=>{
    panel.innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/512/2107/2107845.png" alt="" style = 'width:40px'>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our 
    customer support</p>
    `
})

function removeAllActive() {
    for(let i=0; i<ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}