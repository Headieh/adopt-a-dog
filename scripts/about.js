function about(name, detail, price) {
	alert(`Name: ${name}
Breed: ${detail}
Fee: ${price}`);
}

$('.info').hover(function (e) {
	$('img', this).addClass('demonstration');
}, function (e) {
	$('img', this).removeClass('demonstration');
});
