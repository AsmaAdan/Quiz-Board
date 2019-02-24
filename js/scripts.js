$(document).ready(function() {
	$(".quiz").submit(function() {
		var nameInput = $("input#name").val();
		var emailInput = $("input#email").val();
		var dob = $("#date").val();
		var question1 = $("input:radio[name=question1]:checked").val();
		var question2 = $("input:radio[name=question2]:checked").val();
		var question3 = $("input:radio[name=question3]:checked").val();
		var question4 = $("input:radio[name=question4]:checked").val();
		var question5 = $("input:radio[name=question5]:checked").val();
		var question6 = $("input:radio[name=question6]:checked").val();

		if (question1=== undefined || question2 === undefined || question3 === undefined || question4 === undefined || question5 === undefined || question6 === undefined) {
      alert("Please answer all questions")
		}

		var answers = ["before body end", "script", "script", "isInteger", "Increased interactivity", "forEach"]

		var correct = 0;

		if (question1 == answers[0]) {
			correct += 2;
		} else if (question1 != answers[0]) {
			correct += 0;
		}
		if (question2 == answers[1]) {
			correct += 2;
		} else if (question2 != answers[1]) {
			correct += 0;
		}
		if (question3 == answers[2]) {
			correct += 2;
		} else if (question3 != answers[2]) {
			correct += 0;
		}
		if (question4 == answers[3]) {
			correct += 2;
		} else if (question4 != answers[3]) {
			correct += 0;
		}
		if (question5 == answers[4]) {
			correct += 2;
		} else if (question5 != answers[4]) {
			correct += 0;
		}
		if (question6 == answers[5]) {
			correct += 2;
		} else if (question6 != answers[5]) {
			correct += 0;
		}
		var messages = ["Awesome", "keep improving", "it is important that you repeat this quiz"]

		var range;
		if (correct >= 5) {
			range = 0;
		} else if (correct >= 3 && correct < 5) {
			range = 1;
		} else if (correct >= 1 && correct < 3) {
			range = 2;
		}
		document.getElementById("messages").innerHTML = messages[range];

		document.getElementById("numberOfRights").innerHTML = nameInput + " you got " + correct + " points out of a total 12 points";
document.getElementById("retake").style.visibility = "visible";
    event.preventDefault();
	});
});
