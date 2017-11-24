var arr = [1, 2, 3, 4, 5]
function getSums (value)
{
	var red = [];
	var result = value.reduce(function(sum, current) {
		red.push(sum + current);
		return sum + current;
	}, 0);
	return red;
}


alert( getSums(arr)); 
alert(getSums([-2,-1,0,1]));