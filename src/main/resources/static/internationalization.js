/**
 * 
 */

$(document).ready(function() {
	$("#locales").change(function() {
		var selectedOption = $('#locales').val();
		if (selectedOption != '') {

			$.ajax({
				url: "?lang=" + selectedOption,
				context: document.body
			}).done(function() {
				location.reload();
			});

		}
	});
});