function getWeekDay(date) {
	var day = date.getDay();
	if (day==1) return "Пн";
	if (day==2) return "Вт";
	if (day==3) return "Ср";
	if (day==4) return "Чт";
	if (day==5) return "Пт";
	if (day==6) return "Сб";
	if (day==0) return "Вс";
}
var date = new Date(2012, 0, 3, 3, 12);
alert(date);
alert( getWeekDay(date) );