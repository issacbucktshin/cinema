import { MessageSeverity } from './message-severity.enum';

export class MessageModel {
    severity: MessageSeverity; 
    summary: string; 
    detail: string;
}