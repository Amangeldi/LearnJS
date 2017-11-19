function pow(x, y)
{
	var i=0;
	var x1=x;
	while(i+1<y)
	{
		x1=x1*x;
		i++;
	}
	return x1;
}
var x = prompt("Введите x","1");
var y = prompt("Введите n","1");
var result = pow(x, y);
alert(result);