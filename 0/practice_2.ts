/**
* Задание 1 - Напишите функцию сортировки строк, которая принимает на вход массив строк и тип сортировки ASC или DESC.
* И возвращает отсортированный в соответствии с типом массив.
* (arr: string[], order: Order) => string[]
* Использовать: enum.
**/

enum Order
{
    ASC = 1,
    DESC = -1
}
const sort_strings = (array: Array<string>, order: Order): Array<string> =>
      {
        if (order === Order.ASC)
            return array.sort()
        else if (order === Order.DESC)
            return array.sort().reverse()
        else
            return array;
      };
console.log(sort_strings(['b', 'a', 'c'], Order.ASC));
console.log(sort_strings(['2', '1', '3'], Order.DESC));

/**
* Задание 2 - Напишите функцию, которая генерирует пустой объект организации в зависимости от типа организационной собственности ИП или ООО.
* getOrganization(type) => Organization
* Организация имеет следующие поля:
* - ИНН;
* - КПП (только для ООО);
* - ОКПО;
* - Наименование;
* - Тип.
*  Использовать: enum.
**/

enum OrganizationType
{
    LLC = 'ООО',
    PE = 'ИП'
}
interface IOrganization
{
    itn: null | number;
    name: null | string;
    rrc?: null | number;
    rrco: null | number;
    type: null | OrganizationType;
}
const set_organization = (type: OrganizationType): IOrganization | void =>
      {
        const object: IOrganization =
        {
            itn: null,
            name: null,
            rrco: null,
            type: type
        };
        if (type === OrganizationType.PE)
        {
            return object;
        }
        else if (type === OrganizationType.LLC)
        {
            object.rrc = null;
            return object;
        }        
      }
console.log(set_organization(OrganizationType.LLC));

/**
* Задание 3 - Напишите тип для описания координат x и y.
* И напишите тип прямоугольник, который пересекается с типом координат и описывает ширину и длину.
* Опишите то же самое через интерфейсы.
* А почему для типов в данном случае нельзя использовать объединение? Из-за несоответствия принципу 'и'.
**/

/* Intefaces */
interface IPoint
{
    x: number;
    y: number;
}
interface IRectangle extends IPoint
{
    a: number;
    b: number;
}

/* Types */
type TPoint =
{
    x: number;
    y: number;
}
type TRectangle = TPoint &
{
    a: number;
    b: number;
}

/**
* Задание 4 - Напишите тип для описания данных, пришедших с сервера, и на случай ошибки.
* Получен результат:
* {success: true, data: {firstName: 'Oleg'}}
* Произошла ошибка:
* {success: false, errors: [{message: 'Ошибка доступа'}]}
**/

interface IData
{
    firstName: string;
}
interface IError
{
    message: string;
}
interface IResponseError
{
    errors: Array<IError>;
    success: false;
}
interface IResponseSuccess
{
    data: IData;
    success: true;
}
type TResponse = IResponseError | IResponseSuccess;

/**
* Задание 5 - Напишите функцию, которая в зависимости от типа окружения выводит одну из строк: Development, Production, Test enviroment.
* Типы окружений: development, production & testing.
* Выполните проверку на полноту.
* Добавьте типы: Staging, Nightly. И убедитесь, что появилась ошибка после проверки типов на полноту.
* Типы окружений: staging, nightly.
* Использовать: never.
**/

type TEnviroment = 'development' | 'production' | 'testing';
// type TEnviroment = 'development' | 'nightly' | production' | 'staging' | 'testing';
const check_enviroment = (enviroment: TEnviroment): string =>
      {
        switch (enviroment)
        {
            case 'development':
                return 'Разработка';
            case 'production':
                return 'Эксплуатация';
            case 'testing':
                return 'Тестирование';
            default:
                const error: never = enviroment;
                return error;
        }
      };

/**
* Задание 6 - Опишите интерфейс пользователя со следующими свойствами:
* - firstName (строка) - имя;
* - secondName (строка) - фамилия;
* - middleName (строка, необязательное поле) - отчество.
* И создайте подходящий объект.
**/

interface ISiteUser
{
    firstName: string;
    middleName?: string;
    secondName: string;
}
const new_user: ISiteUser = {firstName: 'Иван', middleName: 'Иванович', secondName: 'Иванов'};

/**
* Задание 7 - Опишите интерфейс BaseEntity:
* - id (T) - идентификатор пользователя;
* - addedAt (Дата) - время создания сущности;
* - updatedAt (Дата) - время обновления сущности;
* - addedBy (строка) - кто добавил;
* - updatedBy (строка) - кто последний раз обновил
* Опишите интерфейс User, который расширяет тип BaseEntity с типом string и полями:
* - firstName: string;
* - lastName: string.
* Опишите интерфейс Post, который расширяет тип BaseEntity с типом number и полями:
* - title: string;
* - authorId: number.
**/

interface IBaseEntity<Type>
{
    addedAt: Date;
    addedBy: string;
    id: Type;
    updatedAt: Date;
    updatedBy: string;
}
interface IPost extends IBaseEntity<number>
{
    authorId: number;
    title: string;
}
interface IUser extends IBaseEntity<string>
{
    firstName: string;
    lastName: string;
}

/**
* Задание 8 - Напишите тип для описания пришедших с сервера данных и на случай ошибки.
* И для одиночной сущности.
* Получен результат:
* {success: true, data: T}
* Произошла ошибка:
* {success: false, errors: [{message: 'Ошибка доступа'}]}
* И для массива данных.
* Получен результат:
* {success: true, data: T[]}
* Произошла ошибка:
* {success: false, errors: [{message: 'Ошибка доступа'}]}
* Применить обобщение для типа User с полями id, firstName, lastName.
* Использовать: дженерики.
**/

interface I2ResponseError
{
    errors: Array<IError>;
    success: false;
}
interface I2ResponseSuccess<Type>
{
    data: Type;
    success: true;
}
interface I2SiteUser
{
    firstName: string;
    id: number;
    lastName: string;
}
type T2Response = I2ResponseError | I2ResponseSuccess<I2SiteUser>;

/**
* Задание 9 - Опишите интерфейс пользователя посложнее.
* Пользователь, как все сущности системы, полученные из базы данных, имеет мета-свойства базовой сущности BaseEntity:
* - id (T) - идентификатор пользователя;
* - addedAt (Q) - время создания сущности;
* - updatedAt (Q) - время обновления сущности;
* - addedBy (P) - кто добавил;
* - updatedBy (P) - кто последний раз обновил.
* Свойства интерфейса User включают все свойства интерфейса BaseEntity (id: string, даты - ISOString, addedBy и updatedBy типа string) и свои:
* - roles (массив типа Role) - список всех ролей пользователя;
* - firstName (строка) - имя;
* - secondName (строка) - фамилия;
* - middleName (строка, необязательное поле) - отчество или второе имя;
* - isAdmin (логическое, только для чтения) - является ли пользователь администратором.
* Интферфейс Role также имеет все базовые свойства интерфейса BaseEntity (id: number, даты - Date, addedBy и updatedBy типа string) и свои:
* - name (строка) - наименование роли.
**/

interface I2BaseEntity<Person, Time, Type>
{
    addedAt: Time;
    addedBy: Person;
    id: Type;
    updatedAt: Time;
    updatedBy: Person;
}
interface IRole extends I2BaseEntity<string, Date, number>
{
    name: string;
}
interface I2User extends I2BaseEntity<string, string, string>
{
    firstName: string;
    lastName: string;
    middleName?: string;
    readonly isAdmin: boolean;
    roles: Array<IRole>;
}