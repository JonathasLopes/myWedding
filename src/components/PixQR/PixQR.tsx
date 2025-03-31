import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import './PixQR.css';

interface IPixQRProps {
    setShowQR: React.Dispatch<React.SetStateAction<boolean>>
}

function PixQR({ setShowQR }: IPixQRProps) {
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const closeImage = () => setShowQR(false);
    const pixCopyPaste = "00020126430014BR.GOV.BCB.PIX0121jon.athas@hotmail.com5204000053039865802BR5925JONATHAS MOREIRA AMORIM L6009SAO PAULO62250521hUbKfdvdHzWdsfihJmWNn6304D8E3";

    function copyText() {
        navigator.clipboard.writeText(pixCopyPaste);
        setShowMessage(true);
    }

    useEffect(() => {
        if (showMessage) {
            setTimeout(() => setShowMessage(false), 2000);
        }
    }, [showMessage]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setShowQR(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="PixQR-container">
            <div className="modal" onClick={closeImage}>
                <div onClick={(e) => e.stopPropagation()} className="modal-pix-container">
                    <h1>Nosso QR Code para realizar o PIX!</h1>
                    <img src="/images/qrcode.jpg" alt="Imagem Ampliada" className="modal-img" />
                    <div className="copy-paste-container">
                        <input value={pixCopyPaste} />
                        <div className="copy-text-btn-container">
                            <button className={showMessage ? "active": ""} onClick={copyText}><FaCopy /></button>
                            {showMessage && <span>Copiado!</span>}
                        </div>
                    </div>
                    <h3>Caso não tenham pix, podem fazer transferência também!</h3>
                    <h3>Dados para transferência:</h3>
                    <h4>CC: 14825-4</h4>
                    <h4>Ag: 8706</h4>
                    <h4>Banco: Itaú Unibanco</h4>
                </div>
            </div>
        </div>
    )
}

export default PixQR;