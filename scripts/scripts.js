/* Smooth Scroll */
// Enabled on all a tags with href "#" attributes
const smoothScroll = new SmoothScroll('a[href*="#"]');


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
	const text = newsletterBtn.innerHTML;
	newsletterBtn.innerHTML = "<i class=\"fas fa-spinner\"></i>"
	newsletterBtn.disabled = true;
	post("https://formbold.com/s/9RBd9", newsletterForm)
			.then((r) => {
				console.log("Request submitted");
				Toastify({
					text: "Request submitted",
					duration: 5000
				}).showToast();
				newsletterForm.reset();
				newsletterBtn.innerHTML = text;
				newsletterBtn.disabled = false;
			})
			.catch((r) => {
				console.log("Newsletter error");
				newsletterBtn.innerHTML = text;
				newsletterBtn.disabled = false;
			});
};

const handleContact = (event) => {
	event.preventDefault();
	const text = contactBtn.innerHTML;
	contactBtn.innerHTML = "<i class=\"fas fa-spinner\"></i>"
	contactBtn.disabled = true;
	post("https://formbold.com/s/98N2o", contactForm)
			.then((r) => {
				console.log("Message submitted");
				Toastify({
					text: "Message submitted",
					duration: 5000
				}).showToast();
				contactForm.reset();
				contactBtn.innerHTML = text;
				contactBtn.disabled = false;
			})
			.catch((r) => {
				console.log("Message error");
				contactBtn.innerHTML = text;
				contactBtn.disabled = false;
			});
};

const newsletterForm = document.getElementById("newsletterForm");
newsletterForm.addEventListener('submit', handleNewsletter);
const newsletterBtn = document.getElementById("newsletterBtn");

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener('submit', handleContact);
const contactBtn = document.getElementById("contactBtn");

require.config({
	paths: {
		'fontawesome': 'vendor/fontawesome/fontawesome'
	}
})

require(['fontawesome'], function (fontawesome) {
	console.log('');
})
