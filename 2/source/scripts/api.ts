import { ITour, TicketType } from './interfaces';
export let toursDataArray: Array<ITour> = new Array;

// запрос на получение информации о туре
export function getTicketById<T>(id: string): null | Promise<Array<any>>
{
    const link: string = 'https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/';
    let result: null | Promise<T[]> = null;
    fetch(link + id).then((response) => 
    {
        if (response.ok)
            result = response.json();
    });
    if (result)
        return result.then((data: T[]) => data)
    else
        return null;
}

// запрос на получение списка всех туров
export function getTours(): Promise<Array<ITour>>
{
    const link: string = 'https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/';
    return fetch(link).then((response) => response.json()).then((data: Array<ITour>) =>
    {
        toursDataArray = data;
        return data;
    });
}

// запрос на отправку данных - не используется
export function postTicketData(postData: TicketType): Promise<{success: boolean}>
{
    const link: string = 'https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket';
    return fetch(link).then((response) => response.json())
                      .then((data: {success: boolean}) => data);
}