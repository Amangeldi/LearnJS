function truncate(str, maxLength) {
	var result, _max = maxLength - 3, DOT = "...";
	if (str.length>maxLength) {
		result = str.slice(0, _max);
		result = result + DOT;
		return result;
	}
	return str;
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
alert(truncate("Всем привет!", 20));