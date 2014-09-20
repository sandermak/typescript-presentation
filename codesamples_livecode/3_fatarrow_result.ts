class FatArrow {
	line: HTMLElement = document.createElement("hr")

	constructor() {
		var button = document.createElement("button")
		button.textContent = "Click me!"
		button.addEventListener("click", (event: MouseEvent) => {
			document.body.appendChild(this.line)
			console.log(this)
		})
		document.body.appendChild(button)
	}
}

new FatArrow()