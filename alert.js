function getDecimal(num) {
	var _num = ~~num;
	return Math.abs(Math.round((num - _num)*1000)/1000);
}

alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // -0.2