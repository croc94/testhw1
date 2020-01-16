let firstName=prompt ("Ваша фамилия");
    while ((firstName=="")||(firstName==null)){
        firstName=prompt("Кажется вы неправильно ввели фамилию, попробуйте снова: ")
    }

let secondName=prompt ("Ваше имя");
    while ((secondName=="")||(secondName==null)){ 
        secondName=prompt("Кажется вы неправильно ввели имя, попробуйте снова: ")
    }

let lastName=prompt ("Ваше отчество");
    while ((lastName=="")||(lastName==null)){
        lastName=prompt("Кажется вы неправильно ввели отчество, попробуйте снова: ")
    }

let age=prompt("Сколько вам лет");
    while ( isNaN(age) || (age>120) || (age<1) ) {
        age = prompt ("Мы где то ошиблись, давайте попробуем снова. Сколько вам лет: ")    
    }

let sex = confirm( "Вы мужчина? " )?"мужчина":"женщина";

let work = ( ( (sex=="мужчина") && (age>63) ) || ( (sex=="женщина") && (age>58) ) ) ? "да" : "нет";

alert(firstName + " " + secondName + " " + lastName + "\n"
    + "Ваш возраст в годах: " + age + "\n"
    + "Ваш возраст в днях: " + (age*365) + "\n"
    + "Через пять лет вам будет: " + (5+ +age) + "\n"
    + "Ваш пол: " + sex + "\n"
    + "Вы на пенсии: " + work);
