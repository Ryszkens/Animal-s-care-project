const footerYear = document.querySelector(".footer-year");
const navbar = document.querySelector(".navbar");
const menuItems = document.querySelectorAll(".nav-list a");
const mobileItems = document.querySelectorAll(".nav-mobile .list-item");
const scrollSpySections = document.querySelectorAll(".section");
const hamburger = document.querySelector(".hamburger-menu");
const navMobile = document.querySelector(".nav-mobile");
const body = document.querySelector("body");

const currentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
	console.log(year);
};

const showNavbar = () => {
	navbar.classList.add("active");

	if (window.scrollY === 0) {
		navbar.classList.remove("active");
	}
};

const handleNav = () => {
	navMobile.classList.toggle("active");

	// mobileItems.forEach((item) => {
	// 	item.addEventListener("click", () => {
	// 		navMobile.classList.remove("active");
	// 	});
	// });

	if (navMobile.classList.contains("active")) {
		body.style.overflow = "hidden";
	}
};

const handleScrollSpy = () => {
	if (document.body.classList.contains("main-page")) {
		const sections = [];

		scrollSpySections.forEach((section) => {
			// console.log(window.scrollY);

			// console.log(section.offsetTop);
			// console.log(section.offsetHeight);

			if (window.scrollY <= section.offsetTop + section.offsetHeight - 94) {
				sections.push(section);

				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				);

				menuItems.forEach((item) => item.classList.remove("active"));

				activeSection.classList.add("active");
			}

			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 20
			) {
				menuItems.forEach((item) => item.classList.remove("active"));

				lastSection.classList.add("active");
				// console.log(window.innerHeight);
			}
		});
	}
};

window.addEventListener("scroll", handleScrollSpy);
hamburger.addEventListener("click", handleNav);
window.addEventListener("scroll", showNavbar);
currentYear();
