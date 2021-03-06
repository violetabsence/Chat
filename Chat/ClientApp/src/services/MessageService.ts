import { MessageDto } from "../models/MessageDto";
import { Subject } from "rxjs";

const subject = new Subject<MessageDto>();
let increment = 7;
const sent = 0;
const received = 1;
const messages: MessageDto[] = [
    { id: 0, userId: received, datetime: new Date(), text: "How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!" },
    { id: 1, userId: sent, datetime: new Date(), text: "When you're backed against the wall, break the god damn thing down." },
    { id: 2, userId: sent, datetime: new Date(), text: "Excuses don't win championships." },
    { id: 3, userId: received, datetime: new Date(), text: "Oh yeah, did Michael Jordan tell you that?" },
    { id: 4, userId: sent, datetime: new Date(), text: "No, I told him that." },
    { id: 5, userId: sent, datetime: new Date(), text: "What are your choices when someone puts a gun to your head?" },
    { id: 6, userId: received, datetime: new Date(), text: "What are you talking about? You do what they say or they shoot you." },
    { id: 7, userId: sent, datetime: new Date(), text: "You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things." }
];

export const MessageService = {
    getByUser: (userId: number, conversationId: number): Promise<MessageDto[]> => {
        return new Promise<MessageDto[]>(resolve => {
            const result = messages.map(m => {
                const { userId, ...rest } = m;
                return {
                    userId: userId === sent ? userId : conversationId,
                    ...rest
                } as MessageDto;
            });
            resolve(result);
        });
    },

    messageChannel: () => subject.asObservable(),

    sendMessage: (currentUserId: number, conversationUserId: number, text: string): Promise<MessageDto> => {
        return new Promise<MessageDto>(resolve => {
            const message = {
                id: increment = increment + 1,
                userId: currentUserId,
                datetime: new Date(),
                text
            } as MessageDto;
            resolve(message);

            setTimeout(() => subject.next({
                id: increment = increment + 1,
                userId: conversationUserId,
                datetime: new Date(),
                text: `+++${text}+++`
            }), 2000);
        });
    }
}