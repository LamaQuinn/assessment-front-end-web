console.log('hi')

let text=document.getElementById('title')
let googleMapsURL = 'https://www.piccolinomv.com';

// Create a link element
let linkElement = document.createElement('a');
linkElement.href = googleMapsURL;
linkElement.textContent = text.textContent;

    // Replace the title with the link
text.textContent = ''
text.appendChild(linkElement)

let text2=document.getElementById('title2')

let URL = 'https://www.natrajusa.com/natrajs-indian-bistro'

// Create a link element
let linkElement2 = document.createElement('a');
linkElement2.href = URL;
linkElement2.textContent = text2.textContent;

    // Replace the title with the link
text2.textContent = ''
text2.appendChild(linkElement2)




function getRestButton(){
	const restaurants = [
         "Piccolino Ristorante",
        "Natraj's Indian bistro"
    ]
	const randomRest = restaurants[Math.floor(Math.random()*restaurants.length)]
	// console.log(randomRest)
	return randomRest
}

function handleButtonClick() {
    
    const recommendationParagraph = document.getElementById("recommendation");
  
    // Get a random restaurant recommendation
    const randomRestaurant = getRestButton();
    
  
    // Display the recommendation on the page
    recommendationParagraph.textContent = `We recommend: ${randomRestaurant}`;
  }

  let getButton=document.getElementById('get-button')
  getButton.addEventListener('click',handleButtonClick)