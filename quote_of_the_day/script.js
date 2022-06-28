
// RETRIEVED FROM https://github.com/lukePeavey/quotable

document.addEventListener("DOMContentLoaded", () => {
	
	// APPEND DOM QUOTE
	const quoteContainer = document.getElementById("quote-container");
	quoteContainer.innerHTML = `
			<div class="quote">
				<span class="words" id="words"></span>
			</div>
			<span id="author" class="author"></span>
	`


	// DOM elements
	const button = document.querySelector(".btn-container");
	const quote = document.getElementById('words');
	const author = document.getElementById("author");
	
  
	async function updateQuote() {
	  // Fetch a random quote from the Quotable API
	  const response = await fetch("https://api.quotable.io/random");
	  const data = await response.json();
	  
	  console.log(data, response)

	  if (response.ok) {
		  if(response.status === 200){
			  // Update DOM elements
			  quote.textContent = `"${data.content}"`;
			  author.textContent = `-${data.author}`;
		  }
	  } else {
		quote.textContent = "An error occured";
		console.log(data);
	  }
	}

	setTimeout(() => {
		quoteContainer.classList.remove('openAnimation')
	}, 2500);
  
	// Attach an event listener to the `button`
	button.addEventListener("click", (e) => {
		button.disabled = true
		e.preventDefault()
		quoteContainer.classList.add('changeAnimation')
		
		setTimeout(() => {
			updateQuote()	
		}, 700);

		setTimeout(() => {
			button.disabled = false
			quoteContainer.classList.remove('changeAnimation')
		}, 2000);
	});
  
	// call updateQuote once when page loads
	updateQuote();
  });
  