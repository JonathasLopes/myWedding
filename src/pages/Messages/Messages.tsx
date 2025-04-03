import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import useLoading from "../../hooks/useLoading";
import { IMessageResponse } from "../../interfaces/IResponseMessages";
import { useEffect, useState } from "react";
import { GetAllMessages } from "../../apis/MessagesAPI";
import MessageBubble from "../../components/MessageBubble/MessageBubble";
import { generateRandomColor } from "../../helpers/ColorGenerator";
import './Messages.css';

function Messages() {
    const { startLoading, stopLoading, loading } = useLoading();
    const [allMessages, setAllMessages] = useState<IMessageResponse[]>([]);

    async function getAllMessages() {
        try {
            startLoading();

            await GetAllMessages().then(result => {
                if (result?.length > 0) {
                    setAllMessages(result);
                }
            })
        }
        catch (error: any) {
            toast.error(error ? error.message : "Não foi possível carregar as mensagens, por favor, tente novamente mais tarde!");
        } finally {
            stopLoading();
        }
    }

    useEffect(() => {
        getAllMessages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="messages-container">
            {loading && <Loading />}
            {allMessages.map((message, index) => {
                return (
                    <MessageBubble
                        key={index}
                        name={message.Name}
                        text={message.Message}
                        color={generateRandomColor()}
                        date={message.Created}
                    />
                )
            })}
        </div>
    )
}

export default Messages;