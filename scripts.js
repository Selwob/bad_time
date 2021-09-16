"use strict";

$( document ).ready(function() {
	
	function currentTime() {
	let date = new Date();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	
	hour = updateTime(hour);
	min = updateTime(min);
	sec = updateTime(sec);
	
	document.getElementById("clock-hour").innerHTML = hour; //add hour to div
	document.getElementById("clock-min").innerHTML =  " : " + min + " : "; //add min to div
	document.getElementById("clock-sec").innerHTML = sec; //add sec to div
	let timeout = setTimeout(currentTime, 1000);
}

	function updateTime(i) {
		if (i < 10) {
			return "0" + i;
		} else {
			return i;
		}
	}

	currentTime();
	
	function makeNewPosition() {
		// Get viewport dimensions (remove the dimension of the div)
		let h = $(window).height() - 50;
		let w = $(window).width() - 50;
		
		let nh = Math.floor(Math.random() * h);
		let nw = Math.floor(Math.random() * w);
    
		return [nh,nw];
	}
	
	function animateDiv(elemID) {
		let newq = makeNewPosition();
		$(elemID).animate({ top: newq[0], left: newq[1] }, 1000, function(){
			animateDiv(elemID);        
		});
	}
	
	let elemArr = ['#clock-hour', '#clock-min', '#clock-sec']
	
	elemArr.forEach(element => animateDiv(element));
	
});