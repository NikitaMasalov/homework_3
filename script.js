const student = "Масалов Никита Максимович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;


let guests =[
{name: 'Пономарев Андрей Алексеевич', gender: 'мужчина', birthday: '11.12.1980'},
{name: 'Рыбакова Алина Семёновна', gender: 'женщина', birthday: '16.04.1974'},
{name: 'Молчанов Даниил Ильич', gender: 'мужчина', birthday: '21.03.1984'},
{name: 'Смирнова София Львовна', gender: 'женщина', birthday: '02.01.1987'},
{name: 'Владимиров Артём Григорьевич', gender: 'мужчина', birthday: '07.12.1990'},
{name: 'Маслова Елизавета Егоровна', gender: 'женщина', birthday: '10.10.1997'},
{name: 'Назарова Вера Романовна', gender: 'женщина', birthday: '01.05.1983'},
{name: 'Иванов Иван Фёдорович', gender: 'мужчина', birthday: '05.05.1999'},
{name: 'Дмитриев Алексей Григорьевич', gender: 'мужчина', birthday: '12.11.1998'},
{name: 'Овчинников Платон Александрович', gender: 'мужчина', birthday: '26.05.1999'},
{name: 'Мартынова Софья Тимуровна', gender: 'женщина', birthday: '07.06.1995'},
{name: 'Соколов Михаил Адамович', gender: 'мужчина', birthday: '11.03.1979'}
]
    

const guest = guests.length;
const man = guests.filter(guest => guest.gender == 'мужчина').length
const woman = guests.filter(guest => guest.gender == 'женщина').length
    

function Age(birthday) {
now = new Date();
birthday = new Date(birthday);
birthday.setMonth(birthday.getMonth()-1);
birthdayNew = new Date(birthday);
birthdayNew.setFullYear(now.getFullYear());
agedif = new Date(now - birthday);
age = Math.abs(agedif.getFullYear() - 1970);

if ((now - birthdayNew) < 0) {
    age = age - 1;
} 
return age
}
 
alert (`Всего гостей: ${guest}`)
alert (`Мужчин: ${man}`)
alert (`Женщин: ${woman}`)
alert ('Список гостей:')
 
for (let guests_index in guests) {
    Guest = guests[guests_index]
    gender = (guest.gender == 'M' && 'М') || 'Ж'
    nameguest = Guest.name.split(' ')
    nameguest = `${nameguest[0]} ${nameguest[1].substr(0,1)}. ${nameguest[2].substr(0,1)}.`
    birth = Guest.birthday.split('.')
    age = Age(new Date(birth[2], birth[1], birth[0]))
    
    let visitor = (`${nameguest}  пол: ${gender} возраст: ${age} лет`);
    alert (visitor);
}