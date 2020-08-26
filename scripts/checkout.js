let info = [];
const submit = $("#submit");

function submitEvent(event) {
	event.preventDefault();
	info.push($("#name").val());
	info.push($("#email").val());
	info.push($("#address").val());
	info.push($("#city").val());
	info.push($("#state").val());
	info.push($("#zip").val());
	info.push($("input:radio[name='New']:checked").val());
	info.push($("#location").val());
	console.log(info);
	alert("Thank you. The form information has been received");
}

$('form').on('submit', submitEvent);
