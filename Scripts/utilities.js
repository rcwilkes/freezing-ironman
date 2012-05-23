/**
 * @author Clint Wilkes 5/22/12
 */

function setColdShift()
{
var isday = document.getElementByID("coldday");
var coldtime;
	if(isday = checked){
		coldtime => 07:00:000 && coldtime=< 18:59:599; 
	}
	else{
	coldtime =>19:00:000 && coldtime=< 06:59:599;
	}
	return coldtime;
}

function setHotShift()
{
var isday = document.getElementByID("hotday");
var hottime;
	if(isday = checked){
		hottime => 07:00:000 && hottime =< 18:59:599; 
	}
	else{
	hottime =>19:00:000 && hottime =< 06:59:599;
	}
	return hottime;
}

$('#colddate').datebox();
