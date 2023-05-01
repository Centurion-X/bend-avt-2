/**
* Задание 1 - Опишите интерфейс Todo со следующими полями: title, description и done. 
* Напишите функцию updateTodo, которая принимает на вход аргументы:
* - todo;
* - fields (одно или все поля типа Todo).
* Создайте одну задачу и обновите свойства данного объекта через функцию updateTodo, передав на вход задачу и обновленные поля:
* updateTodo(todo, {done: true})
* Использовать: Partial для описания fields.
**/

interface IToDo
{
    description: string;
    done: boolean;
    title: string;
}
const update_toDo = (object: IToDo, properties: Partial<IToDo>): IToDo => ({...object, ...properties});

/**
* Задание 2 - Опишите интерфейс EntityState со следующими полями:
* data - T[];
* sortBy - (опциональное, строка);
* order - (опциональное, 'asc' или 'desc');
* limit - (опциональное, число);
* offset - (опциональное, число).
* Создайте тип UserFeatureState, в котором все поля интерфейса EntityState обязательные.
* Создайте объект, соответствующий типу.
* Использовать: Required.
**/

enum Order
{
    ASC = 1,
    DESC = -1
}
interface IEntityState<Type>
{
    data: Array<Type>;
    limit?: number;
    offset?: number;
    order?: Order;
    sortBy?: string;
}
interface IUser
{
    name: string;
}
type TUserFeatureState = Required<IEntityState<IUser>>;
const user_state: TUserFeatureState = {data: [], limit: 0, offset: 0, order: Order.ASC, sortBy: ''};

/**
* Задание 3 - Опишите интерфейс EntityState со следующими полями:
* data - T[];
* sortBy - (опциональное, строка);
* order - (опциональное, 'asc' или 'desc');
* limit - (опциональное, число);
* offset - (опциональное, число).
* Создайте тип TagFeatureState, в котором все поля интерфейса EntityState обязательные, кроме limit и offset.
* Создайте объект, соответствующий типу.
* Использовать: Required & Pick.
**/

type T1TagFeatureState = Required<Pick<IEntityState<IUser>, 'data' | 'sortBy' | 'order'>>;
const tag_state1: T1TagFeatureState = {data: [], order: Order.DESC, sortBy: ''};

/**
* Задание 4 - Опишите интерфейс EntityState со следующими полями:
* data - T[];
* sortBy - (опциональное, строка);
* order - (опциональное, 'asc' или 'desc');
* limit - (опциональное, число);
* offset - (опциональное, число).
* Создайте тип TagFeatureState, в котором все поля интерфейса EntityState обязательные, кроме limit и offset.
* Создайте объект, соответствующий типу.
* Использовать: Required и Omit.
**/

type T2TagFeatureState = Required<Omit<IEntityState<IUser>, 'limit' | 'offset'>>;
const tag_state2: T2TagFeatureState = {data: [], order: Order.DESC, sortBy: ''};

/**
* Задание 5 - Опишите интерфейс Todo со следующими полями: title, description и done.
* Создайте объект, соответствующий типу, свойства которого нельзя изменять.
* Использовать: Readonly.
**/

const object_toDo: Readonly<IToDo> = {title: 'Title', description: 'Description', done: true};

/**
* Задание 6 - Напишите такую функцию freezeProps, которая принимает на вход объект типа T и возвращает его версию только для чтения.
* Использовать Readonly и обобщения.
**/

const freeze_props = <Type> (object: Type): Readonly<Type> => object;