function checkSpam(str) {
	var str1 = "viagra", str2 = "xxx", _str = str.toLowerCase();
	if(~_str.indexOf(str1) || ~_str.indexOf(str2))
	{
		return true;
	}
	return false;
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));