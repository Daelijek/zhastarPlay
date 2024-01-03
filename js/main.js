const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

const mainBackground = document.getElementById('backgroundImage');
const graph3 = document.querySelector(".graph_row .graph_img3");
const graph2 = document.querySelector(".graph_container .graph_img2");
const graph1 = document.querySelector(".graph_container .graph_img1");

accordionItemHeaders.forEach(accordionItemHeader => {
	accordionItemHeader.addEventListener("click", event => {
		accordionItemHeader.classList.toggle("active");
		const accordionItemBody = accordionItemHeader.nextElementSibling;

		if (accordionItemHeader.classList.contains("active") && window.innerWidth > 414) {
			accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
			graph3.style.margin = '0 0 0 58px';
			graph1.style.margin = '32px 0 30px 0';
		} else if (window.innerWidth > 414) {
			accordionItemBody.style.maxHeight = 0;
			graph3.style.margin = '0 0 0 30px';
			graph1.style.margin = '32px 0 63px 0';
		} else if (accordionItemHeader.classList.contains("active") && window.innerWidth <= 414) {
			accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
			graph1.style.margin = '24px 0px 15px 15px';
			graph2.style.margin = '20px 0px 15px 15px';
			graph3.style.margin = '20px 0px 140px 15px';
		} else {
			accordionItemBody.style.maxHeight = 0;
			graph1.style.margin = '24px 0px 15px 15px';
			graph2.style.margin = '20px 0px 15px 15px';
			graph3.style.margin = '20px 0px 140px 15px';
		}
	});
});

function changeImageSource() {
	if (window.innerWidth <= 414) {
		backgroundImage.src = '../img/Mobile_main_background.svg';
	}
	else {
		backgroundImage.src = '../img/main_background.svg';
	}
}

changeImageSource();
window.addEventListener('resize', changeImageSource);