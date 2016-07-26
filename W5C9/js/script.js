 $(document).ready(function(){
//question 1 string done
  	$('#return5th_submit').click(function(){
  		var user_input = $('#return5th_input').val();
  		$('#return5th_display').text(user_input.charAt(5));
  	});
 // //question 2 string done
  	$('#returnLast_submit').click(function(){
  	var user_input2 = $('#returnLast_input').val();
  	$('#returnLast_display').text(user_input2.charAt(user_input2.length-1));
 });
 // //question 3 string done
  $('#checkWork_submit').click(function(){
  	var par = $('#ps3 p').text();
 	var user_input3 = $('#checkWork_input').val();
  	var res = par.search(user_input3); 
  	$('#checkWork_display').text(res);
  	if(res>-1) {
  	return('yes');
  	} 
  	});
  //question 4 variables outputs -1 currently....why?
  $('#reverseString_submit').click(function(){
  	var user_input4 = $('#reverseString_input').val();
  	$('#reverseString_display').text(user_input4.split("").reverse().join(''));
  	});
  //question 5 variables - this has the same names as Q2 can it work?
  $('#returnLast_submit').click(function(){
  	var user_input5 = $('#returnLast_input').val(); 
  	$('#returnLast_display').text(<div>user_input5<div>);
  	} 
  	});
  //question 6 variables done
 $('#greet1_submit').click(function(){
  	var user_input6 = $('#greet1_input').val();
  	$('#greet1_display').text("Hello" + " " + user_input6 + " " + "welcome to the website");
  	});
 // //question 7 conditionals 
 //works but for all names, if statement not registering
  $('#greet2_submit').click(function(){
  		var user_input7 = $('#greet2_input').val();
  	$('#greet2_display').text("Hello" + " " + user_input7 + " " + "welcome to the website");
  	if(user_input7 == "Alice" || "Bob" || "Bryony") {
  	return("#greet2_display");
  	} else if(user_input7 !== "Alice" || "Bob" || "Bryony") {
  		return("not a valid user");
  	}
  });
 // //question 8 conditionals done
  $('#integerMax_submit').click(function(){
  	var user_inputmax1 = $('#integerMax_input1').val();
  	var user_inputmax2 = $('#integerMax_input2').val();
  	if(user_inputmax1 > user_inputmax2) { 
  	$('#integerMax_display').text(user_inputmax1); 
  } else if(user_inputmax2 > user_inputmax1) {
  	$('#integerMax_display').text(user_inputmax2);
  }
  });
 // //question 9 conditionals done
 $('#integerSign_submit').click(function(){
 	var user_inputsign1 = $('#integerSign_input1').val();
  	var user_inputsign2 = $('#integerSign_input2').val();
  	var user_inputsign3 = $('#integerSign_input3').val();
  	var user_inputTot = user_inputsign1 + user_inputsign2 + user_inputsign3;
  	if(user_inputTot > 0) { 
  	$('#integerSign_display').text("+"); 
  }else {
  	$('#integerSign_display').text("-");
  }
  	});
  //question 10 conditionals done (might be erroneous)
   $('#integerSort_submit').click(function(){
   	var user_inputsort1 = $('#integerSort_input1').val();
   	var user_inputsort2 = $('#integerSort_input2').val();
   	var user_inputsort3 = $('#integerSort_input3').val();
   	var array = [user_inputsort1, user_inputsort2, user_inputsort3];
   	$('#integerSort_display').text(array.sort());
  	});
 //question 11 first conditional now works
 $('#rps_submit').click(function(){
 	var user_player1 = $('#rps_player1').val();
 	var user_player2 = $('#rps_player2').val();
 	//var rock = $("rock");
 	//	var scissors = $("scissors");
	//	var paper = $("paper");
 	if(user_player1 == "rock" && user_player2 == "scissors") {
 			$('#rps_winner_display').text("Player 1 Wins!");
 	} 
	if(user_player1 == "scissors" && user_player2 == "paper") {
 			$('#rps_winner_display').text("Player 1 Wins!");
 	} 
 	if(user_player1 == "paper" && user_player2 == "rock"){
 			$('#rps_winner_display').text("Player 1 Wins!");
	}
	if(user_player2 == "rock" && user_player1 == "scissors") {
 			$('#rps_winner_display').text("Player 2 Wins!");
 	} 
	if(user_player2 == "scissors" && user_player1 == "paper") {
 			$('#rps_winner_display').text("Player 2 Wins!");
 	} 
 	if(user_player2 == "paper" && user_player1 == "rock"){
 			$('#rps_winner_display').text("Player 2 Wins!");
	}
} else $('#rps_winner_display').text("Player 2 Wins!");
 		}
	});
 // //question 12 loops not outputting anything to screen
  $('#factoral_submit').click(function(){
    	var user_inputfact = $('#factoral_input').val();
   	var factorial = 1;
 while(user_inputfact>1){
 factorial*=user_inputfact;
 	user_inputfact--;
    }
   	$('#factoral_display').text(factorial);
   	} 
  	});
 //question 13 loop can't test in codepen
 	for(i=0; i <5; i++) {
 		for(j=0; j<i; j++) {
 			console.log("*");
 	};
 //question 14 loops starinput
 $('#base_exp_submit').click(function(){
 	var user_inputbase = $('#base_input').val();
 	var user_inputexp = $('#exp_input').val();
 	for (i=0; i<user_inputexp; i++) {
 		var result *= user_inputbase;
 	}
 	$('#base_exp_display').text(result); 
 	});
//  //question 15 loops foobar
  $('#foobar_submit').click(function(){

 	$('#foobar_display').text(); 	
 });
