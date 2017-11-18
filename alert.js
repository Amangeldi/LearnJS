var test = prompt('Кто пришел?', '');
if(test==null)
{
	alert("Вход отменен");
}
else if(test=="Админ")
{
	var pass = prompt('Пароль?', '');
	if(pass==null)
	{
		alert("Вход отменен");
	}
	else if(pass=="Чёрный Властелин")
	{
		alert("Добро пожаловать!");
	}
	else
	{
		alert("Пароль неверен");
	}
}
else
{
	alert("Я вас не знаю");
}