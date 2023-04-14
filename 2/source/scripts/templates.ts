import { ITour } from "./interfaces";

export function getModalTemplate(data: ITour): string
{
    const template: string =
        `<div> 
            <p data-modal-id = "tour-modal" class = "close-modal">X</p>
            <p>${data.name}</p>
            <p>${data.description}</p>
            <div data-tour-id = ${data.id} class = "ticket-submit">
                <a href = "order.html">Buy ticket</a>
            </div>
        </div>`;
    return template;
}

export function getTicketTemplate (data: string, index: number): string
{
    const template: string =
        `<div  data-item-index = ${index} class = "ticket-block">
            <p>${data}</p>
        </div>`;
    return template;
}

export function getTourTemplate(object: ITour, index: number): string
{
    const template: string =
        `<div data-tour-item-index = ${index} class = "tour-block">
            <h4>${object.name}</h4>
            <img class = 'tour-picture' src = "${object.img}">
            <div class = "ticket-description">${object.description}</div>
            <p>${object.price}</p>
        </div>`;
    return template;
}