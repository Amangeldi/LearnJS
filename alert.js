"use strict";
function isEmpty(obj) {
	var counter = 0;
	for (var key in obj)
	{
		counter++;
	}
	if(counter==0)
	{
		return true;
	}
	return false;
}

function sumObj(obj) {
	var sum = 0;
	if(isEmpty(obj)) return 0;
	for (var key in obj)
	{
		sum+=obj[key];
	}
	return sum;
}

function maxSalaries(obj) {
	if(isEmpty(obj)) return "нет сотрудников";
	var max = 0;
	var maxName = "";
	for (var name in salaries) {
		if (max < salaries[name]) {
			max = salaries[name];
			maxName = name;
		}
	}
	return maxName;
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false


var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
var x = {};
alert(sumObj(salaries));
alert(sumObj(x) );
alert(maxSalaries(salaries));
alert(maxSalaries(x));