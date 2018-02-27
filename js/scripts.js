$(document).ready(function () {
	$('label, .radio').click(function () {
		$('.button').css("backgroundColor", "rgb(47, 157, 1)").text("Следующий вопрос");
	});
	$('.choice').submit(function () {
		var count = 0;
		$('input[name^="question"]').each(function () {
			if ($(this).prop("checked")) count++;
		});
		if (count > 0) {
			$('.button').css("backgroundColor", "rgb(47, 157, 1)").text("Следующий вопрос");

			return true;
		} else {
			$('.button').css("backgroundColor", "red").text("Выберите ответ");
			return false;
		}
	});

	/* Проверка почты */

	$("body").on("submit", ".form_newsletter", function (e) {
		var message = "Укажите значения всех обязательных для заполнения полей!";
		//			var ret = 0;
		//			if ($(".name-block .field_value", this).val().length < 1) {
		//				$(".name-block .field_value", this).css("border-color", "red");
		//				ret = 1;
		//			}

		if ($(".email-block .mail", this).val().length < 1) {
			$(".email-block .mail", this).css("border-color", "red");
			$('.submit_button', this).css("backgroundColor", "red").text("Введите email");
		}
		//			if ($("#p_p_acc", this).length > 0) {
		//				if ($("#p_p_acc", this).prop("checked") == false) {
		//					$(".form_newsletter_pp", this).css("border", "1px solid red");
		//					ret = 1;
		//				}
		//			}
		//			if (ret == 1) {
		//				alert(message);
		//				return false;
		//			}
		
		$(".email-block .mail", this).hide();
		$(".infront_submit", this).removeClass("hide");
		$(".submit_button",this).hide();
	});
	$(".phone-block input", this).keydown(function (e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) || (e.keyCode >= 35 && e.keyCode <= 40)) {
			return;
		}
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	});
	$('body').on('change', '.surname-block input, .name-block input, .patronymic-block input, .phone-block input, .email-block input', function () {
		$(this).css('border-color', '');
	});
	//		$('#Contact_date_of_birth').mask('00-00-0000', {
	//			placeholder: 'ДД-ММ-ГГГГ'
	//		});
	$(".email-block .mail").keypress(function () {
		$(".email-block .mail").css("border-color", "rgb(232, 232, 232)");
		$('.submit_button').css("backgroundColor", "rgb(47, 157, 1)").text("Получить результат");
	});


	/*Конец документа*/
});