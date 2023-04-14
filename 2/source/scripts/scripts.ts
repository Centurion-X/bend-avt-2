import { getModalTemplate, getTicketTemplate, getTourTemplate } from "./templates";
import { ITour, IUser, IVipTicket, TicketType } from "./interfaces";
import { Modal } from "./modal";
import { toursDataArray } from "./api";

export function importAll (result: any): Array<any>
{
    return result.keys().map(result);
}

export function initPostData(): void
{
    const user: IUser = initUserData();
    return;
}

export function initTicketInfo(ticket: ITour | TicketType | IVipTicket): void
{
    const targetElement: HTMLElement = document.querySelector('.ticket-info'),
          ticketDescription = ticket.description,
          ticketOperator = ticket.tourOperator;
    let vipClientType: string = 'You are not registered!';
    if ("vipStatus" in ticket)
        vipClientType = ticket.vipStatus;
    const ticketArray: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];
    let ticketTemplate: string = ticket.name;
    ticketArray.forEach((element, index) => ticketTemplate += getTicketTemplate(element, index));
    targetElement.innerHTML = ticketTemplate;
}

export function initTitle(element: string, subelement: string, text: string): void
{
    const tag: HTMLElement = document.querySelector(element),
          title: HTMLElement = tag.querySelector(subelement);
    if (title)
        title.textContent = text
    else
    {
        const title = document.createElement(subelement);
              title.textContent = text;
        tag.appendChild(title);
    }
}

function initTourElementListener(tourWrap: HTMLDivElement): void
{
    tourWrap.addEventListener('click', (event: MouseEvent) =>
    {
        const targetElement = <HTMLElement> event.target,
              parentElement = <HTMLElement> targetElement.parentNode;
        let target: HTMLElement;
        if (targetElement.hasAttribute('data-tour-item-index'))
            target = targetElement
        else if (parentElement && parentElement.hasAttribute('data-tour-item-index'))
            target = parentElement;
        if (target)
        {
            const dataIndex = target.getAttribute('data-tour-item-index');
            openModal('order', Number(dataIndex));
        }
    });
}

export function initToursElements(data: Array<ITour>): void
{
    if (Array.isArray(data))
    {
        const rootElement: HTMLElement = document.querySelector('.main-app'),
              tourWrap = document.createElement('div');
              tourWrap.classList.add('tour-wrap');
        initTourElementListener(tourWrap);
        let rootElementData: string = '';
        for (let index = 0; index < data.length; index++)
        {
            rootElementData += getTourTemplate(data[index], index);
        }
        tourWrap.innerHTML = rootElementData;
        rootElement.appendChild(tourWrap);
    }
}

export function initUserData(): IUser
{
    const userInfo: NodeListOf<HTMLElement> = document.querySelectorAll('.user-info > p');
    let userInfoObject: IUser = {birthDate: new Date(), cardNumber: '', name: ''};
    userInfo.forEach(element =>
    {
        const inputDataName: string = element.getAttribute('data-name');
         if (inputDataName)
        {
            const inputElement: HTMLInputElement  = element.querySelector('input');
            if (inputElement.value)
                userInfoObject[inputDataName] = inputElement.value;
        }
    });
    console.log('userInfoObject', userInfoObject);
    return userInfoObject;
}

function openModal(type: string, index: number): void
{
    const data = toursDataArray[index];
    sessionStorage.setItem('id', data.id);
    switch (type)
    {
        case "order":
            const modalTemplate = getModalTemplate(data),
                  modal = new Modal('tour-modal');
                  modal.open(modalTemplate);
            break;
    }
}

export function registerConfirmButton(): void
{
    const targetElement: HTMLElement = document.getElementById('accept-order-button');
    if (targetElement)
        targetElement.addEventListener('click', () => initPostData());
}