function getLocalDay(date) {
	var day = date.getDay();
	if(day==0) return 7;
	return day;
}
var date = new Date(2012, 0, 3);  // 3 янв 2012
alert( getLocalDay(date) );       // вторник, выведет 2