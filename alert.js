function sumTo1(n)
{
	var result=0;
	for(var i=0; i<=n; i++)
	{
		result+=i;
	}
	return result;
}
function sumTo2(n)
{
	if(n==1)
	{
		return 1;
	}
	else
	{
		return n+sumTo2(n-1);
	}
}
function sumTo3(n)
{
	return ((1+n)*n)/2;
}

alert(sumTo1(1));
alert(sumTo1(2));
alert(sumTo1(3));
alert(sumTo1(4));
alert(sumTo1(21));
alert(sumTo1(100));
alert(sumTo2(1));
alert(sumTo2(2));
alert(sumTo2(3));
alert(sumTo2(4));
alert(sumTo2(21));
alert(sumTo2(100));
alert(sumTo3(1));
alert(sumTo3(2));
alert(sumTo3(3));
alert(sumTo3(4));
alert(sumTo3(21));
alert(sumTo3(100));