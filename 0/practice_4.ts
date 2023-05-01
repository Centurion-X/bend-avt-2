/**
* Задание 1 - Напишите декоратор @LogStaticProps для класса HeaderComponent со следующей сигнатурой вызова:
* @LogStaticProps
* class HeaderComponent {static title: string = 'My Title'; static subtitle: string = 'My subtitle'}.
* Который выведет в консоль значения свойств класса HeaderComponent (title, subtitle).
* Типизировать свойства статического класса в декораторе.
* Сборка: tsc --experimentalDecorators -w index.ts.
**/

const Component = class
{
      static title: string;
      static subtitle: string;
}
@log_static_properties_1 class Header1Component
{
      static title: string = 'My Title';
      static subtitle: string = 'My subtitle';
}
function log_static_properties_1 <Type extends typeof Component> (target: Type)
{
      console.log(target.title, target.subtitle);
}

/**
* Задание 2 - Напишите декоратор @LogStaticProps для класса HeaderComponent со следующей сигнатурой вызова:
* @LogStaticProps({showLogs: true})
* class HeaderComponent {static p1: string = 'V1'; static p2: string = 'V1'; static p3: string = 'V1'; static p4: string = 'V1'}.
* Который выведет в консоль значения всех свойств класса, к которому применяется декоратор.
* Добавьте параметр options типа {showLogs: boolean} к декоратору LogStaticProps.
* По флагу должна выводиться в консоль информация обо всех статических свойствах класса.
* По умолчанию: showLogs = false.
* Сборка: tsc --experimentalDecorators -w index.ts.
**/

interface Options
{
      showLogs: boolean;
}
@log_static_properties_2({showLogs: true}) class Header2Component
{
      static p1: string = 'V1';
      static p2: string = 'V2';
      static p3: string = 'V3';
      static p4: string = 'V4';
}
function log_static_properties_2(options: Options = {showLogs: false})
{
      return function (target: any)
      {
            if (options.showLogs)
            {
                  for (let key in target)
                  {
                        console.log(`${key} = ${target[key]}`);
                  }
            }
      }
}

/**
* Задание 3 - Напишите декоратор @Component для класса HeaderComponent со следующей сигнатурой вызова:
* @Component({template: `<h1>{{title}}</h1><h2>{{subtitle}}</h2>`, selector: '.app-header-component'})
* class HeaderComponent {static title: string = 'My Title'; static subtitle: string = 'My subtitle'}.
* Декоратор @Component принимает на вход набор опций с двумя свойствами:
* - template: шаблон c переменными, значения которых будут взяты из статических свойств класса;
* - selector: селектор, по которому шаблон будет отрисован в DOM дереве.
* Добавьте в HTML селектор: <div class="app-header-component"></div>.
* И опишите функцию bootstrap, которая принимает на вход массив с классами компонентов:
* bootstrap([HeaderComponent]).
* Функция получает от них шаблон с подготовленным HTML и помещает в DOM дерево по селектору компонента.
* При вызове данной функции в DOM дереве появляется заполненный шаблон:
* <div class="app-header-component">
*   <h1>My Title</h1>
*   <h2>My subtitle</h2>
* </div> 
**/

abstract class AHeaderComponent
{
      static getDecoratedData(): IComponentOptions
      {
            return {selector: '', template: ''};
      }
}
interface IComponentOptions
{
      selector: string;
      template: string;
}
type TComponent = typeof AHeaderComponent;
@TemplateComponent
({
      selector: 'div.header-component',
      template: `<h1>{{title}}</h1><h2>{{subtitle}}</h2>`
})
class HeaderComponent extends AHeaderComponent
{
      static title: string = 'My Title';
      static subtitle: string = 'My subtitle';
}
function TemplateComponent (options: IComponentOptions)
{
      return (target: any) =>
      {
            target.getDecoratedData = () =>
            {
                  for (let key in target)
                  {
                        options.template = options.template.replace(`{{${key}}}`, target[key]);
                  }
                  return options;
            };
      };
}
function bootstrap (components: Array<TComponent>)
{
      components.forEach((component: TComponent) =>
      {
            const data: IComponentOptions = component.getDecoratedData(),
                  tag: null | HTMLElement = document.querySelector(data.selector);
            if (tag)
                  tag.innerHTML = data.template;
      });
}
bootstrap([HeaderComponent]);

/**
* Задание 4 - Опишите перегрузку функции для нахождения длины входящего параметра.
* getLength('Some string') // -> 11
* getLength(['Some string']) // -> 1
**/

function get_length(data: Array<string>): number;
function get_length(data: string): number;
function get_length(data: Array<string> | string): number
{
      return data.length;
}
console.log(get_length('Some string'));
console.log(get_length(['Some string']));

/**
* Задание 5 - Опишите перегрузку функции для оператора '+' для параметров a и b с типами number и string.
* add(1, 2) // -> 3
* add('a', 'b') // -> 'ab'
**/

function add_arguments(a: number, b: number): number;
function add_arguments(a: number | string, b: string): string;
function add_arguments(a: string, b: number | string): string;
function add_arguments(a: any, b: any): null | number | string
{
      if (typeof a == 'number' && typeof b == 'number')
            return Number(a + b)
      else if (typeof a == 'string' || typeof b == 'string')
            return String(a) + String(b)
      else return null;
}
console.log(add_arguments(1,2));
console.log(add_arguments('a', 'b'));

/**
* Задание 6 - Опишите такой класс Hello, который имеет свойство message, которое указано в конструкторе.
* Класс имеет метод greet, который принимает строку или массив строк с именем/именами.
* При вызове функция greet приветствует персонажа/персонажей приветствием message.
* Перегрузите метод для описания возможных параметров.
* const hi = new Hello('Hi');
* hi.greet('Alice'); // -> 'Hi, Alice!'
* hi.greet(['John', 'Jim']); // -> ['Hi, John!', 'Hi, Jim!']
**/

class Hello
{
      constructor (private message: string)
      {
            this.message = message;
      }
      greet(data: Array<string> | string): Array<string> | string
      {
            if (typeof data == 'string')
                  return `${this.message}, ${data}!`
            else if (Array.isArray(data))
            {
                  const array = new Array;
                  data.forEach(item => array.push(`${this.message}, ${item}!`));
                  return array;
            }
            else return 'Wrong data type!';
      };
}
const hi = new Hello('Hi');
console.log(hi.greet('Alice'));
console.log(hi.greet(['John', 'Jim']));

/**
* Задание 7 - В файле validation.ts опишите namespace Validation. Внутри которого интерфейс StringValidator.
* Внутри которого метод isAcceptable, который принимает на вход строку и возвращает boolean.
* В файле string-length.ts опишите namespace Validation с классом MinValidator внутри.
* Имплементируйте интерфейс StringValidator и реализуйте проверку на минимальную длину строки.
* В файле string-length.ts опишите namespace Validation с классом MaxValidator внутри. 
* Имплементируйте интерфейс StringValidator и реализуйте проверку на максимальную длину строки.
* Создайте файл test.ts и протестируйте валидаторы:
* const minValidator: Validation.StringValidator = new Validation.MinValidator(5);
* minValidator.isAcceptable('abc'); // -> false
* minValidator.isAcceptable('abcdef'); // -> true
* const maxValidator: Validation.StringValidator = new Validation.MaxValidator(5);
* maxValidator.isAcceptable('abc'); // -> true
* maxValidator.isAcceptable('abcdef'); // -> false
* Структрура файлов:
* - validation.ts;
* - string-length.ts;
* - test.ts.
* Импорт множественных неймспейсов через:
* /// directive test.ts
* /// <reference path="./string-length.ts" />
* /// <reference path="./validation.ts" />
* Сборка: tsc --outFile test.js validation/test.ts.
**/

// string-length.ts
namespace Validation
{
      export class MaxValidator implements StringValidator
      {
            constructor (private readonly max: number) {}
            isAcceptable(data: string): boolean
            {
                  return data.length > this.max;
            }
      };
      export class MinValidator implements StringValidator
      {
            constructor (private readonly min: number) {}
            isAcceptable(data: string): boolean
            {
                  return data.length < this.min;
            }
      };
}
// test.ts
/// <reference path="./string-length.ts" />
/// <reference path="./validation.ts" />
const minValidator: Validation.StringValidator = new Validation.MinValidator(5);
console.log(minValidator.isAcceptable('abc'));
console.log(minValidator.isAcceptable('abcdef'));
const maxValidator: Validation.StringValidator = new Validation.MaxValidator(5);
console.log(maxValidator.isAcceptable('abc'));
console.log(maxValidator.isAcceptable('abcdef'));
// validation.ts
namespace Validation
{
      export interface StringValidator
      {
            isAcceptable(data: string): boolean
      }
}