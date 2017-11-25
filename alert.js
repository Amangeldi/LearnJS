function getSecondsToday() {
	var ONEDAY = 86400;
	var now = new Date();

	// создать объект из текущей даты, без часов-минут-секунд
	var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	var diff = now - today; // разница в миллисекундах
	return ONEDAY - Math.floor(diff / 1000); // перевести в секунды
}

alert( getSecondsToday() );