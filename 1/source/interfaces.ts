export interface IUser
{
    gender: string;
    name: string;
    userid: string;
}

export interface IUserFullInfo extends Pick<IUser, 'name' | 'userid'>
{
    age: number;
    birthdate: string;
    organization: UserJob;
}

export interface IUserInfo extends Pick<IUser, 'gender' | 'name'>
{
    age: number;
    position: string;
}

type UserJob =
{
    name: string;
    position: string;
}