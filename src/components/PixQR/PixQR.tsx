import { useEffect } from "react";
import './PixQR.css';

interface IPixQRProps {
    setShowQR: React.Dispatch<React.SetStateAction<boolean>>
}

function PixQR({ setShowQR }: IPixQRProps) {
    const closeImage = () => setShowQR(false);

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
                <div className="modal-pix-container">
                    <h1>Nosso QR Code para realizar o PIX!</h1>
                    <img src="/images/qrcode.jpg" alt="Imagem Ampliada" className="modal-img" />
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