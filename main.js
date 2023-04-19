const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

const closeActions = () => {
	document.querySelector(".modal.is-visible").classList.remove(isVisible);
};

for (const el of openEls) {
	el.addEventListener("click", function () {
		const modalId = this.dataset.open;
		document.getElementById(modalId).classList.add(isVisible);
	});
}

for (const el of closeEls) {
	el.addEventListener("click", function () {
		this.parentElement.parentElement.parentElement.classList.remove(
			isVisible
		);
	});
}

document.addEventListener("click", (e) => {
	if (e.target == document.querySelector(".modal.is-visible")) {
		closeActions();
	}
});

document.addEventListener("keyup", (e) => {
	// if we press the ESC
	if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
		closeActions();
	}
});

/*USE THIS CODE IF YOU WANT TO AUTOLOAD THE FORM INSTEAD OF TRIGGERING IT ON THE BUTTON CLICK*/
/*if ("false" !== sessionStorage.getItem("show-modal")) {
	setTimeout(function () {
		document.getElementById("modal1").classList.add(isVisible);
		sessionStorage.setItem("show-modal", "false");
	}, 300);
}*/
