interface ILocation
{
    x: '30.4044';
    y: '70.45';
}

export interface IPostTicketData
{
    ticket: TicketType;
    user: IUser;
}

export interface ITicket
{
    description: string;
    id?: string;
    hotel: string;
    name: string;
    location: ILocation;
    price: string;
    tourOperator: string;
}

export interface ITour
{
    description: string;
    id: string;
    img: string;
    name: string;
    price: string;
    tourOperator: string;
}

export interface IUser
{
    birthDate: Date;
    cardNumber: string;
    name: string;
}

export interface IVipTicket extends ITicket
{
    vipNumber: number;
    vipStatus: string;
}

export type TicketType = ITicket | IVipTicket