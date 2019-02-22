$(document).ready(function() {
	$(".quiz").submit(function() {


		var question1 = $("input:radio[name=question1]:checked").val();
		var question2 = $("input:radio[name=question2]:checked").val();
		var question3 = $("input:radio[name=question3]:checked").val();
		var question4 = $("input:radio[name=question4]:checked").val();
		var question5 = $("input:radio[name=question5]:checked").val();
		var question6 = $("input:radio[name=question6]:checked").val();

    var answers = ["before body end", "script", "script", "isInteger value", "increased interactivity", "forEach"]


		var correct = 0;

		if (question1 == answers[0]) {
			correct +1;
		}
		else  if(question1 != answers[0] ){
			correct +=0;
		}

    if (question2 == answers[1]) {
			correct +=1;
		}
		else if (question2 != answers[1] ){
			correct +=0;
		}

		if (question3 == answers[2]) {
			correct +1;
		}
		else if ( question3 != answers[2]){
			correct +=0;
		}

		if (question4 == answers[3]) {
			correct +=1;
		}
		else if (question4 != answers[3] ){
			correct +=0;
		}

		if (question5 == answers[4]) {
			correct +1;
		}
		else if ( question5 != answers[4]){
			correct +=0;
		}
		if (question6 == answers[5]) {
			 correct +1;
		}
		else if ( question6 != answers[5]){
			correct +=0;
		}

		var messages = ["Awesome", "keep improving", "it is important that you repeat this quiz"]

    var range;

    if (correct >= 5) {
				range = 0;
			}
	  else if (correct >= 3 && correct < 5) {
			range = 1
		}
		else if (correct >= 1 && correct < 3) {
			range = 2;
		}

		document.getElementById("after-submit").style.visibilty = "visible";
		document.getElementById("messages").innerHTML = messages[range];
		document.getElementById("numberOfRights").innerHTML = "you got " + correct + "correct";

    event.preventDefault();
      });

	});
