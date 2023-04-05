import { IUser, IUserInfo } from "./interfaces"
import { usersArray } from "./users"
import { usersInfoArray } from "./userInfo"

function getUsersJobPositions(usersArray: Array<IUser>): Array<IUserInfo>
{
    let usersMergedArray: Array<IUserInfo> = new Array;
    usersArray.forEach(user =>
    {
        usersInfoArray.filter(card =>
        {
            if (user.userid == card.userid)
            {
                const userInfo: IUserInfo =
                {
                    name: user.name,
                    age: card.age,
                    gender: user.gender,
                    position: card.organization.position
                };
                usersMergedArray.push(userInfo);
            }
        });
        
    });
    return usersMergedArray.reverse();
}

function renderUsers (usersArray: Array<IUserInfo>): void
{
    usersArray.forEach(user =>
    {
        for (const [key, value] of Object.entries(user))
        {
            document.write(`${key}: ${value}<br>`);
        }
        document.write('<br>');
    });
}

const usersPositions: Array<IUserInfo> = getUsersJobPositions(usersArray);
renderUsers(usersPositions);
console.log('userPositions:', usersPositions);