import { UserDto } from "../models/UserDto";
import { OnlineStatus } from "../models/OnlineStatus";

const users: UserDto[] = [
    { id: 0, img: "http://emilcarlsson.se/assets/mikeross.png", username: "Mike Ross", status: OnlineStatus.online },
    { id: 1, img: "http://emilcarlsson.se/assets/harveyspecter.png", username: "Harvey Specter", status: OnlineStatus.busy },
    { id: 2, img: "http://emilcarlsson.se/assets/rachelzane.png", username: "Rachel Zane", status: OnlineStatus.away },
    { id: 3, img: "http://emilcarlsson.se/assets/donnapaulsen.png", username: "Donna Paulsen", status: OnlineStatus.online },
    { id: 4, img: "http://emilcarlsson.se/assets/jessicapearson.png", username: "Jessica Pearson", status: OnlineStatus.busy },
    { id: 5, img: "http://emilcarlsson.se/assets/haroldgunderson.png", username: "Harold Gunderson", status: OnlineStatus.online },
    { id: 6, img: "http://emilcarlsson.se/assets/danielhardman.png", username: "Daniel Hardman", status: OnlineStatus.online },
    { id: 7, img: "http://emilcarlsson.se/assets/katrinabennett.png", username: "Katrina Bennett", status: OnlineStatus.busy },
    { id: 8, img: "http://emilcarlsson.se/assets/charlesforstman.png", username: "Charles Forstman", status: OnlineStatus.online },
    { id: 9, img: "http://emilcarlsson.se/assets/jonathansidwell.png", username: "Jonathan Sidwell", status: OnlineStatus.offline }
];

export const UserService = {
    get: (id: number): Promise<UserDto> => {
        return new Promise<UserDto>((resolve, reject) => {
            const user = users.find(u => u.id === id);
            if (user !== undefined) {
                resolve(user);
            } else {
                reject(new Error(`User '${id}' is not found.`));
            }
        });
    },
    list: (): Promise<UserDto[]> => {
        return new Promise<UserDto[]>(resolve => {
            resolve(users);
        });
    },
    contacts: (userId: number): Promise<UserDto[]> => {
        return new Promise<UserDto[]>((resolve, reject) => {
            const isExist = users.find(u => u.id === userId) !== undefined;
            if (isExist) {
                const contacts = users.filter(u => u.id !== userId);
                resolve(contacts);
            } else {
                reject(new Error(`User '${userId}' is not found.`));
            }
        });
    }
}