import { DateMask } from '../../helpers/DateMask';
import './MessageBubble.css';

interface IMessageBubble {
    name: string,
    color: string,
    text: string,
    date: Date
}

function MessageBubble(message: IMessageBubble) {
    return (
        <div className="message-bubble" style={{ backgroundColor: message.color }}>
            <div className='name-date-container'>
                <strong>{message.name.trim().toLowerCase()
                    .split(" ")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}:
                </strong>
                <span>{DateMask(message.date.toString())}</span>
            </div>

            <p>{message.text}</p>
        </div>
    )
}

export default MessageBubble;