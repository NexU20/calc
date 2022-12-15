const container = document.querySelector("div#container");
const queryArea = container.querySelector("div#query");
const button = document.querySelectorAll("button.button");

button.forEach((eButton) => {
	eButton.addEventListener("click", function (el) {
		const operation = ["/", "*", "-", "+", "=", "."];
		let target = el.target.innerText;
		switch (target) {
			case "C":
				queryArea.innerText = "";
				break;
			case "Del":
				queryArea.innerText = queryArea.innerText.slice(
					0,
					queryArea.innerText.length - 1
				);
				break;
			case "=":
				if (!queryArea.innerText) {
					alert("Masukan Angka");
					break;
				}
				queryArea.innerText = eval(queryArea.innerText);
				break;
			default:
				if (operation.includes(target) && !queryArea.innerText) {
					alert("Masukan Angka");
					break;
				}
				queryArea.innerText += target;
				break;
		}
	});
});
