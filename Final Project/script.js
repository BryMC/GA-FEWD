$(document).ready(function() {
    var faculty = {
		"Selbin":{
			courses:['Intro to Political Science', 'Marxism'],
			departments:['Political Science', 'Latin American and Border Studies'],
			clusters:['Mediterranean Mingling', 'Presence of the Past']
		}, 
		"Costola":{
			courses:['Theatre History', 'East Meets West', 'Play Analysis'],
			departments:['Theatre'],
			clusters:['Mediterranean Mingling', 'Conflict', 'Investigating Identity']
		},
        
	};
	var departments = {
		"Theatre":{
			faculty:["Costola", "Bechtel", "Gaffney", "Roemer", "Roybal"],
			clusters:["Design", "Conflict", "Mediterranean Mingling"],
			courses:["Introduction to Acting", "Introduction to Movement", "Play Analysis"]

		}
	};

	$('#main_form').submit(function(){ 
		event.preventDefault();

		var prof_in = $('#prof').val();
		if(prof_in != ""){
			if(faculty[prof_in]){
				var prof = faculty[prof_in];
				console.log(prof.courses);
				$('#return_display').text(JSON.stringify(prof));
			}
		}
	});
	$('#dept_form').submit(function(){ 
		event.preventDefault();

		var dept_in = $('#dept').val();
		if(dept_in != ""){
			if(departments[dept_in]){
				var dept = departments[dept_in];
				console.log(dept.faculty);
				$('#return_display').text(JSON.stringify(dept));
			}
		}
	});





	
});

// var departments = ['Anthropology', 'Architecture', 'Art', 'Art History', 'Biochemistry', 'Biology', 'Business','Chemistry', 'Chinese', 'Classics', 'Communications', 'Computer Science', 'Economics', 'Education', 'English', 'Environmental Studies', 'Feminist Studies', 'French', 'German', 'Greek','History','International Studies', 'Kinesiology','Latin','Mathematics','Music','Philosophy','Physics','Political Science','Psychology','Religion','Sociology','Spanish','Theatre'];
// 	var professors =['Selbin', 'Costola', 'Ross', 'Adrian', 'Crockett', 'Olson'];
// 	var costola = ['east meets west', 'theatre history', 'introduction to playwriting', 'introduction to play analysis'];
// 	var courses = ['theatre', 'costola', 'mediterranean mingling', 'design'];
	// var clusters = ['ross', 'mclean', 'consumer behavior', 'introduction to psychology','neuroscience'];
	//$('#button').click('begin');
	//user clicks one input
	//or 
	//user clicks two inputs
	//if user clicks one input
	//loop through this array and find the appropriate tag
	//once you find it
	//output all information from that depts array
	//in the order it appears (loop)
	//or if they click two inputs
	//loop through input 1
	//and loop through input 2
	//and find connections
	//and output only those related to both
	//if user clicks on a department
	//or on a class
	//link to a separate screen that has info about that connection
	
//array databases
// psychology = {'principles of psychology', 'research methods', 'human sexuality', 'social psychology', 'cognitive psychology', 'animal behavior', 'cognitive neuroscience', 'health psychology', 'abnormal psychology'}
// theater || theatre = {'fundamentals of acting', 'movement techniques', 'theater history', 'east meets west', 'costume design', 'set design', 'principles of design', 'sustainable theater'}
//business = {'foundations of business', 'principles of economics', 'introduction to accounting', consumer behavior', 'emarketing', 'foundations of entrepreneurship'}
//music = {'music theory I', 'music theory II', 'solfrege', 'music theory', 'world music'}
// var catalogue = {'anthropology', 'architecture', 'art', 'art history', 'biochemistry', 'biology', 'business','chemistry', 'chinese', 'classics', 'communications', 'computer science', 'economics', 'education', 'english', 'environmental studies', 'feminist studies', 'french', 'german', 'greek','history','international studies', 'kinesiology','latin','mathematics','music','philosophy','physics','political science','psychology','religion','sociology','spanish','theatre'}

//if begin button is clicked call start function
//start function () {}
//console.log("Do you want to search one discipline or connect two disciplines?");
//if one discipline button is clicked call 1Disc function
//else if two discipline button is clicked called 2Disc function
//if 1Disc function called, wait for user input of name (must enter with #)
	//if find but is clicked call searchCat function
			//loop through catalogue array to find correct array match with user string
			//once found, output contents of that array on console log as a list
			//end function
//if 2Disc function called, wait for user to input both names (must enter two)
	//if find button is clicked call searchCat function
	//loop through catalogue array to find first input match, once found store contents in temp array
	//loop through catalogue array again to find second input match, once found store contents in temp array2
	//if both inputs match contents of catalogue and are stored in temp array return true
	//output contents of both arrays
	//end function
//if Connect! button is pressed (after 2Disc completed)
//loop through contents of array1 and match to contents of array2
//end function
