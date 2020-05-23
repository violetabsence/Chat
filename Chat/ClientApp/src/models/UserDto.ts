import { OnlineStatus } from "./OnlineStatus";
export interface UserDto {
    id: number;
    username: string;
    img: string;
    onlineStatus: OnlineStatus;
}