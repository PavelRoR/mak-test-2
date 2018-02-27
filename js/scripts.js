$(document).ready(function () {
	$('.end_choice label, .end_choice .radio').click(function () {
		$('.button_finish').css({
			"backgroundColor": "rgb(114, 187, 114)",
			"outlineColor": "rgb(114, 187, 114)"
		}).text("Узнать ответ");
	});
	$('label, .radio').click(function () {
		$('.button').css({
			"backgroundColor": "rgb(114, 187, 114)",
			"outlineColor": "rgb(114, 187, 114)"
		}).text("Следующий вопрос");
	});
	$('.choice').submit(function () {
		var count = 0;
		$('input[name^="question"]').each(function () {
			if ($(this).prop("checked")) count++;
		});
		if (count > 0) {
			$('.button').css({
				"backgroundColor": "rgb(86, 118, 227)",
				"outlineColor": "rgb(114, 187, 114)"
			}).text("Следующий вопрос");

			return true;
		} else {
			$('.button').css({
				"backgroundColor": "red",
				"outlineColor": "red"
			}).text("Выберите ответ");
			return false;
		}
	});
	$('.end_choice').submit(function () {
		var count = 0;
		$('input[name^="question"]').each(function () {
			if ($(this).prop("checked")) count++;
		});
		if (count > 0) {
			$('.button_finish').css({
				"backgroundColor": "rgb(86, 118, 227)",
				"outlineColor": "rgb(114, 187, 114)"
			}).text("Узнать ответ");

			return true;
		} else {
			$('.button_finish').css({
				"backgroundColor": "red",
				"outlineColor": "red"
			}).text("Выберите ответ");
			return false;
		}
	});
	/* Проверка почты */

	$("body").on("submit", ".form_newsletter", function (e) {
				if ($(".email-block .mail", this).val().length < 1) {
			$(".email-block .mail", this).css("border-color", "red");
			$(".submit_button", this).css({"backgroundColor": "red","outlineColor":"red"}).text("Введите email");
			return false;
		}

		$(".email-block .mail", this).hide();
		$(".infront_submit", this).removeClass("hide");
		$(".submit_button", this).hide();

	});
	$(".email-block .mail").keypress(function () {
		$(".email-block .mail").css("border-color", "rgb(232, 232, 232)");
		$('.submit_button').css({"backgroundColor": "rgb(47, 157, 1)","outlineColor":"rgb(47, 157, 1)"}).text("Получить результат");
	});





	/*Конец документа*/
});