/*
//////////////////////////////////////////////////////////////////

							Dot.
					  Javascript/jQuery

//////////////////////////////////////////////////////////////////
*/

$( document ).ready(function() {

		//button resets peices, keeps score.
	$("#keepGoing").on("click", function keepGoing() {
		$("#guy1").css({"top": "-17px", "left": "-10px"});
		$("#guy2").css({"top": "-17px", "left": "-10px"});		
	});

		//button same as ^ kills score.
	$("#killSwitch").on("click", function killSwitch() {
		var x = 0;
		var y = 0;
		$(".score1").text("Player 1: " + y);
		$(".score2").text("Player 2: " + x);

		$("#guy1").css({"top": "-17px", "left": "-10px"});
		$("#guy2").css({"top": "-17px", "left": "-10px"});
	});
})

	//key press moves player tokens
$(document).on('keypress', function(e) {
	if ((e.keyCode === 108) || (e.keyCode === 112)) {  // keys 'l' & 'p'      
        moveP1();
	} else {
		return; 
	} 
});

$(document).on('keypress', function(e) {
	if ((e.keyCode === 97) || (e.keyCode === 119)) {  // keys 'a' & 'w'      
        moveP2();
	} else {
		return;
	}  
});



function moveP1() {
		//pulls avatar and logs offset as array giving coordinates of token
	var z = $('#av1');
		z = z.offset();
		z.left=parseInt(z.left);
		z.top=parseInt(z.top);
	var avLoc = [z.left, z.top];

		//when key pressed: check coordinates against finish line.
	if ((avLoc[0] >= 1005) && (avLoc[1] >= 570)) {
		scoreP1();
	} else {
			//if not at finish: check if at corner or move by manipulate css 
		if ((avLoc[0] > 245) && (avLoc[1] > 578)) {
			$("#guy1").css({left: '+=20px'});
		} else if ((avLoc[0] < 261) && (avLoc[1] > 490)) {
			$("#guy1").css({top: '+=15px'});
		} else if (avLoc[1] > 495) {
			$("#guy1").css({left: '-=15px'});
		} else if (avLoc[0] > 1016) {
			$("#guy1").css({top: '+=10px'});
		}  else {
			$("#guy1").css({left: '+=10px'});
		}
	}
};

function moveP2() {
						//same as moveP1() - different coordinates
	var z = $('#av2');
		z = z.offset();
		z.left=parseInt(z.left);
		z.top=parseInt(z.top);
	var avLoc2 = [z.left, z.top];

	if ((avLoc2[0] >= 1016) && (avLoc2[1] >= 590)) {
		scoreP2();
	} else {

		if ((avLoc2[0] > 215) && (avLoc2[1] > 612)) {
			$("#guy2").css({left: '+=20px'});
		} else if ((avLoc2[0] < 226) && (avLoc2[1] > 467)) {
			$("#guy2").css({top: '+=15px'});
		} else if (avLoc2[1] > 467) {
			$("#guy2").css({left: '-=15px'});
		} else if (avLoc2[0] > 986) {
			$("#guy2").css({top: '+=10px'});
		}  else {
			$("#guy2").css({left: '+=10px'});
		}
	}
};

function scoreP1() {
		//pull <h2> element from header <div>, converts to string
	var mkString = $(".score1").text();
	var y = mkString.slice(-1);
		y = parseInt(y);		//convert to Int, add 1
		y = (y + 1);
	$(".score1").text("Player 1: " + y);	//replace text in <h2> with new Int
		alert("Player 1 Wins!");
}

function scoreP2() {
	var mkString2 = $(".score2").text();
	var x = mkString2.slice(-1);
		x = parseInt(x);				//same as scoreP1
		x = (x + 1);
	$(".score2").text("Player 2: " + x);
		alert("Player 2 Wins!");
}





/*
///////////////////////////////////////////////////////////////////////////

/////////// Notes
 


//////////////////////////////////////////////////////////////////////////

////////// Snippets



//////////////////////////////////////////////////////////////////////////
*/

