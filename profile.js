console.log('hello')
let color =document.getElementById('color')
let place=document.getElementById('place')
let ritual=document.getElementById('ritual')

function getColor(event){
    event.preventDefault()
    alert('My favoriye color is navy blue.')
}
color.addEventListener('click',getColor)

function getPlace(event){
    event.preventDefault()
    alert('My favoriye place is Cappadocia.')
}
place.addEventListener('click',getPlace)

function getRitual(event){
    event.preventDefault()
    alert('My favoriye ritual drink a cup of coffee every morning.')
}
ritual.addEventListener('click',getRitual)