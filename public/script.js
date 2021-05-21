// Smooth Scrolling
$(".link").on("click", function (e) {
	if (this.hash !== "") {
		e.preventDefault();

		const hash = this.hash;
		console.log(this)
		$("html, body").animate(
			{
				scrollTop: $(hash).offset().top,
			},
			800
		);
	}
});