function ucFirst(str) {
	var result;
	result = str[0].toUpperCase() + str.substring(1);
	return result;
}
alert(ucFirst("qwerty"));