/**
* Задание 1 - Напишите функцию, которая принимает на вход год и возвращает век.
* Необходимо аннотировать все переменные.
* 1601 => 17
* 1705 => 18
* 1900 => 19
* 2000 => 20
**/

const set_century = (year: number): number =>
      Math.ceil(year / 100);
console.log(set_century(1705));
console.log(set_century(2000));

/**
* Задание 2 - Напишите функцию, которая принимает на вход строку и возвращает ее инвертированное представление.
* Необходимо аннотировать все переменные.
* 'world' => 'dlrow'
* 'word' => 'drow'
**/

const invert_word = (word: string): string =>
      word.split('').reverse().join();
console.log(invert_word('world'));
console.log(invert_word('word'));

/**
* Задание 3 - Напишите функцию, которая принимает на вход массив из чисел и возвращает сумму положительных элементов.
* Необходимо аннотировать все переменные.
* [1, -4, 7, 12] => 1 + 7 + 12 = 20
**/

const sum_positive_numbers = (array: Array<number>): number =>
      array.reduce((sum: number, numeric: number) => numeric > 0 ? sum + numeric : sum, 0);
console.log(sum_positive_numbers([1, -4, 7, 12]));

/**
* Задание 4 - Напишите функцию, которая принимает на вход строку и считает количество гласных в ней (a, e, i, o, u).
* Необходимо аннотировать все переменные.
* 'I like coding in TypeScript.' => 8
**/

type Vowel = 'a' | 'e' | 'i' | 'o' | 'u';
const vowels: Array<string> = ['a', 'e', 'i', 'o', 'u'];
const set_length = (phrase: string): number =>
      phrase.toLowerCase().split('').filter((letter: string) => vowels.includes(letter as Vowel)).length;
console.log(set_length('I like coding in TypeScript.'));

/**
* Задание 5 - Напишите функцию, которая принимает на вход одну сторону цепочки ДНК в виде массива строк, состоящих только из символов A, T, G, C.
* И возвращает её и дополняющую сторону уже в виде кортежа.
* В ДНК дополняют друг друга символы «А» и «Т», «С» и «G». 
* Ваша функция получает одну сторону ДНК. Нить ДНК никогда не бывает пустой.
* [A,T,G,C] => [ [A,T,G,C], [T,A,C,G] ]
* [G,T,A,T] => [ [G,T,A,T], [C,A,T,A] ]
* [A,A,A,A] => [ [A,A,A,A], [T,T,T,T] ]
* Необходимо аннотировать все переменные.
**/

type DNA = 'A' | 'C' | 'G' | 'T';
type DNA_pair = {[key in DNA]: DNA};
const DNA_pairs: DNA_pair = {A: 'T', C: 'G', G: 'C', T: 'A'};
const restore_chain = (chain: Array<DNA>): [Array<DNA>, Array<DNA>] =>
      [chain, chain.map((symbol: DNA) => DNA_pairs[symbol])];
console.log(restore_chain(['A','A','A','A']));

/**
* Задание 6 - Напишите функцию, которая принимает на вход массив пользователей с полями username, status & lastActivity.
* И возвращает кто из них какой статус имеет: online, offline или away.
* В приложении группового чата нужно показать его пользователям, кто доступен для общения.
* На входе массив объектов, каждый из которых содержит имя пользователя, его статус и время с момента последней активности (в минутах).
* Напишите функцию для определения, кто находится в сети, кто активен, кто нет.
* Если кто-то в сети, но его последняя активность более 10 минут назад, то он считается отсутствующим.
* Необходимо аннотировать все переменные.
* [{username: 'David', status: 'online', lastActivity: 10},
*  {username: 'Lucy', status: 'offline', lastActivity: 22},
*  {username: 'Bob', status: 'online', lastActivity: 104}]
* => {online: ['David'], offline: ['Lucy'], away: ['Bob']}
**/

interface IChatUser
{
      lastActivity: number;
      status: Status;
      username: string;
}
type Status = 'away' | 'offline' | 'online';
type Report = Record<Status, Array<string>>;
const statuses: {[key: string]: Status} = {online: 'online', offline: 'offline'};
const set_status = (users: Array<IChatUser>): Report =>
      ({
            away: users.filter((user: IChatUser) => user.status == statuses.online && user.lastActivity > 10)
                       .map((user: IChatUser) => user.username),
            offline: users.filter((user: IChatUser) => user.status == statuses.offline)
                          .map((user: IChatUser) => user.username),
            online: users.filter((user: IChatUser) => user.status == statuses.online && user.lastActivity <= 10)
                         .map((user: IChatUser) => user.username)
      });
console.log(set_status([{username: 'David', status: 'online', lastActivity: 10}, {username: 'Lucy', status: 'offline', lastActivity: 22}, {username: 'Bob', status: 'online', lastActivity: 104}]));

/**
* Задание 7 - Напишите функцию, которая принимает на вход массив, состоящий из базовых типов данных.
* И возвращает кортеж данных: какое значение сколько раз встречается во входном масиве.
* Необходимо аннотировать все переменные.
* ['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna'] => [["Anna", 2], ["Peter", 3], ["Rose", 1]]
* [1, 10, 12, 2, 1, 10, 2, 2] => [[1, 2], [2, 3], [10, 2], [12, 1]]
* [true, false, true] => [[true, 2], [false, 1]]
**/

type Simple = boolean | number | string;
const count_values = (array: Array<Simple>) =>
      array.filter((data: Simple, index: number, array: Array<Simple>) => array.indexOf(data) == index)
           .map((data: Simple) => [data, array.filter((element: Simple) => element == data).length]);
console.log(count_values(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna']));
console.log(count_values([1, 10, 12, 2, 1, 10, 2, 2]));

/**
* Задание 8 - Напишите функцию isUser, "защитник типа", которая принимает на вход параметр неизвестного типа.
* И уточняет, что параметр является пользователем, т. е. это объект с 2 обязательными свойствами: firstName, age.
* Использовать:
* - is (описание предиката);
* - in (проверка на наличие свойства);
* - as (отключение типизации для проверки);
* - interface (для описания типа User).
* const user: unknown = JSON.parse('{"firstName": "Alisa", "age": 15}');
* if (isUser(user)) {console.log(user.firstName, user.age)};
**/

const user: unknown = JSON.parse('{"firstName": "Alisa", "age": 15}');
const is_user = (argument: unknown): argument is IUser => 'firstName' in (argument as IUser) && 'age' in (argument as IUser);
if (is_user(user)) {console.log(user.firstName, user.age)};

/**
* Задание 9 - Опишите интерфейс пользователя со следующими свойствами:
* - firstName (строка) - имя;
* - secondName (строка) - фамилия;
* - middleName (строка, необязательное поле) - второе имя или отчество.
**/

interface IUser
{
      age?: number;
      firstName: string;
      middle?: string;
      secondName: string;
}

/**
* Задание 10 - Опишите интерфейс пользователя посложнее.
* Как все сущности системы полученные из базы данных, пользователь имеет мета-свойства базовой сущности BaseEntity:
* - id (строка) - идентификатор пользователя;
* - addedAt (Дата) - время создания сущности;
* - updatedAt (Дата) - время обновления сущности;
* - addedBy (строка) - кто добавил;
* - updatedBy (строка) - кто последний раз обновил.
* Интерфейса User:
* - roles (массив типа Role) - список из ролей пользователя;
* - firstName (строка) - имя;
* - secondName (строка) - фамилия;
* - middleName (строка, необязательное поле) - второе имя или отчество;
* - isAdmin (логическое, только для чтения) - является ли пользователь администратором.
* Интерфейс Role имеет все базовые свойства интерфейса BaseEntity, а также добавляет свои:
* - name (строка) - наименование роли.
**/

interface IBaseEntity
{
      addedAt: Date;
      addedBy: string;
      id: string;
      updatedAT: Date;
      updatedBy: string;
}
interface IRole extends IBaseEntity
{
      name: string;
}
interface IUserExtend extends IBaseEntity
{
      firstName: string;
      middleName?: string;
      readonly isAdmin: boolean;
      roles: Array<IRole>;
      secondName: string;
}

/**
* Задание 11 - Опишите следующие геометрические фигуры, используя ООП:
* - Точка:
*   P = 0
*   S = 0
* - Круг:
*   P = 2 * r * π
*   S = π × r ^ 2
* - Квадрат:
*   P = 4 * a
*   S = a ^ 2
* - Прямоугольник:
*   P = 2 * a + 2 * b
*   S = a * b
* Все фигуры имеют координаты и возможность получить информацию о периметре и площади.
* Необходимо аннотировать все переменные, использовать имплементацию интерфейсов, наследование, переопределение методов.
* Компоненты:
* - Интерфейс Shape (фигура);
* - Класс Dot (точка);
* - Класс Circle (круг);
* - Класс Square (квадрат);
* - Класс Rectangle (прямоугольник).
* Методы:
* - calcArea();
* - calcPerimeter().
* Свойства:
* - x;
* - y;
* - r;
* - a;
* - b.
**/

interface Shape
{
      calcArea(): number;
      calcPerimeter(): number;
      a?: number;
      b?: number;
      r?: number;
      x: number;
      y: number;
}
class Dot implements Shape
{
      constructor(public x: number, public y: number)
      {
            this.x = x;
            this.y = y;
      }
      calcArea(): number
      {
            return 0;
      }
      calcPerimeter(): number
      {
            return 0;
      }
}
class Circle extends Dot
{
      constructor(public x: number, public y: number, public r: number)
      {
            super(x, y);
            this.r = r;
      }
      calcArea(): number
      {
            return Math.PI * (this.r ** 2);
      }
      calcPerimeter(): number
      {
            return 2 * this.r * Math.PI;
      }
}
class Square extends Dot
{
      constructor(public x: number, public y: number, public a: number)
      {
            super(x, y);
            this.a = a;
      }
      calcArea(): number
      {
            return this.a ** 2;
      }
      calcPerimeter(): number
      {
            return 4 * this.a;
      }
}
class Rectangle extends Square
{
      constructor(public x: number, public y: number, public a: number, public b: number)
      {
            super(x, y, a);
            this.b = b;
      }
      calcArea(): number
      {
            return this.a * this.b;
      }
      calcPerimeter(): number
      {
            return 2 * this.a + 2 * this.b;
      }
}