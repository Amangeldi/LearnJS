var user = new Object();
user.name = "Вася";
user.surname = "Петров";
user.name = "Сергей";
delete user.name;

alert(user.name + " " + user.surname);