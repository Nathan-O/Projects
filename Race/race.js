//runs when doc loads
$( document ).ready(function() {
	$("#keepGoing").on("click", function keepGoing() {
	$("#guy1").css({"top": "-17px", "left": "-10px"});
	$("#guy2").css({"top": "-17px", "left": "-10px"});
});

$("#killSwitch").on("click", function killSwitch() {
	//var mkString = $(".score1").text();
	//var y = mkString.slice(-1);
		//y = parseInt(y);
		y = 0;
	$(".score1").text("Player 1: " + y);

	//var mkString2 = $(".score2").text();
	//var x = mkString2.slice(-1);
		//x = parseInt(x);
		var x = 0;
	$(".score2").text("Player 2: " + x);

	$("#guy1").css({"top": "-17px", "left": "-10px"});
	$("#guy2").css({"top": "-17px", "left": "-10px"});
});
})

//Now, make move by keypress
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

/////////// Working move code!!!///////////////////////////////////////

function moveP1() {

	var z = $('#av1');
	z = z.offset();
	z.left=parseInt(z.left);
	z.top=parseInt(z.top);
	var avLoc = [z.left, z.top];

	if ((avLoc[0] >= 1005) && (avLoc[1] >= 570)) {
		scoreP1();
	} else {

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
	var mkString = $(".score1").text();
	var y = mkString.slice(-1);
		y = parseInt(y);
		y = (y + 1);
	$(".score1").text("Player 1: " + y);
	alert("Player 1 Wins!");
}

function scoreP2() {
	var mkString2 = $(".score2").text();
	var x = mkString2.slice(-1);
		x = parseInt(x);
		x = (x + 1);
	$(".score2").text("Player 2: " + x);
	alert("Player 2 Wins!");
}





/*
///////////////////////////////////////////////////////////////////////////

/////////// Notes

- Get player name: Have prompt input based on a button, and set the prompt 
to be the return value of a function. Then just have a function that sets a 
variable to the string value of the Input(), return variable, set .append to 
player div <h4> for value of variable.

- I need to set the players for the beggining of the game.

-Then they need to be able to move down the track within the road div.

-They need to be able to turn at corners.

Hey, if you’re not too busy, could you take a look at this and tell me why this code would trigger?  

$(document).on('keypress', function(e) {
        if ( e.keyCode === 108 || 112) //////108 = ‘l’ (lower case L) & 112 = p
            moveP1();
    });

function moveP1() {
	$(“.guy1").animate({left: '25px'});
}

(‘.guy1' is a div used for my Player 1)

According to all the checks I’ve done this should be working fine…yet is doesn’t. 


//////////////////////////////////////////////////////////////////////////

////////// Snippets


////wait to load
$(document).ready(function(){
    // $("button").click(function(){
    //     $("div").animate({left: '250px'});
    // }); //this could be a way to move player
});

//// Have animations happen in order:
$(document).ready(function(){
    $("button").click(function(){
        var div = $("div");  
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");
    });
});

//set peice?

function Move_absolute_Div(Elm_Id) {
    $("#" + Elm_Id).css({ "position": "relative", "top": "100px", "left": "100px" });
}

The main idea is:
$("#My_Div").css({ "top": "100px", "left": "100px" });


//move on key?
$(document).bind('keydown', function(e) {
    var box = $("#plane"),
        left = 37,
        up = 38,
        right = 39,
        down = 40

    if (e.keyCode == left) {
        box.animate({left: "-=5000"},3000);
    }
    if (e.keyCode == up) {
        box.animate({top: "-=5000"},3000);
    }
    if (e.keyCode == right) {
        box.animate({left:"+=5000"},3000);
    }
    if (e.keyCode == down) {
        box.animate({top: "+=5000"},3000);
    }
});
$(document).bind('keyup', function() {
    $('#plane').stop();
});

//////// ---- OR ----- ////////
var e = jQuery.Event( 'keydown', { which: $.ui.keyCode.L } );

$('input').trigger(e);

console.log( String.fromCharCode(event.charCode) );

var e = jQuery.Event("keydown");
e.which = 50; // # Some key code value
e.keyCode = 50
$("input").trigger(e);

////// For Pop Ups
var hiddenBox = $( "#banner-message" );
$( "#button-container button" ).on( "click", function( event ) {
  hiddenBox.show();
});

//// --- OR --- ////

in jQuery 'alert' works like console.log.
	alert(); (a blank pop window would open)

///////// set key event?
var l = jQuery.Event( "keydown" {event.which === 'l'} );

$( "guy1" ).trigger( l );

$( "guy1" ).on( l );

// trigger an artificial keydown event with keyCode 64


//////////////////////////////////////////////////////////////////////////
*/

