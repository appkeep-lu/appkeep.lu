/* Smooth Scroll */
// Enabled on all a tags with href "#" attributes
const scroll = new SmoothScroll('a[href*="#"]');


/* Back To Top Button */
window.onscroll = function () {
	scrollFunctionBTT(); // back to top button
};

// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// Server State Handling
function post(url, form) {
	return new Promise((resolve, reject) => {
		const data = new FormData(form);

		const req = new XMLHttpRequest();
		req.onload = () => req.status === 200 ? resolve(req.response) : reject(Error(req.statusText));
		req.onerror = (e) => reject(Error(`Network Error: ${e}`));
		req.open('POST', url);
		// req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.send(data);
	});
}

const handleNewsletter = (event) => {
	event.preventDefault();
	post("https://formbold.com/s/9RBd9", newsletterForm)
			.then((r) => {
				console.log("Newsletter submitted");
			})
			.catch((r) => {
				console.log("Newsletter error");
			});
};

const newsletterForm = document.getElementById("newsletterForm");
newsletterForm.addEventListener('submit', handleNewsletter);

const handleContact = (event) => {
	event.preventDefault();
	post("https://formbold.com/s/98N2o", contactForm)
			.then((r) => {
				console.log("Message submitted");
			})
			.catch((r) => {
				console.log("Message error");
			});
};

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener('submit', handleContact);

