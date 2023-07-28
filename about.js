console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!')
}
 

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
function getCompliment(event){
	event.preventDefault()
	const compliments =[
		'You are wonderful!',
		'You are amazing!',
		'You are a piece of art!'
	]
	const randomComplimentsGet = compliments[Math.floor(Math.random()*compliments.length)]
	alert(randomComplimentsGet)
	
}
function closeAlert(){
	window.alert=null
}

let image = document.getElementById('img')
image.addEventListener('mouseover',getCompliment)

//Set a timeout to close the alert after 1 second 
let alertTimeout;
image.addEventListener('mouseout', function () {
  alertTimeout = setTimeout(closeAlert, 1000);
})
//Cancel the timeout if the mouse moves back over
image.addEventListener('mouseover', function () {
	clearTimeout(alertTimeout);
  })

