function disableButton(id) {
	document.getElementById(id).disabled = true;
}

let eachFee = [];

function adopt(x) {
	/*if fee varies pass it through as a parameter - adopt(x,y)*/
	/*const fee = y*/
	const fee = 123.45;
	eachFee.push(fee);
	let total = eachFee.reduce(function (a, b) {
		return a + b;
	}, 0);
	alert(`Total: ${total.toFixed(2)}`);
	$("#total").text(`${total.toFixed(2)}`);
}

$('.info button').click(adopt);

$('.info button').click(
	function () {
		$(this).addClass('added-cart');
	});
