import { useEffect, useState } from 'react';
import './GalleryPhotos.css';

interface IGalleryPhotosProps {
    images: string[],
    isReverse: boolean,
}

function GalleryPhotos({ images, isReverse }: IGalleryPhotosProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const displayedImages = [...images, ...images];

    // Fecha a imagem quando clicar fora ou apertar "Esc"
    const closeImage = () => setSelectedImage(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="gallery">
            <div className={`gallery-track ${isReverse ? "reverse" : ""}`}>
                {displayedImages.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Imagem ${index + 1}`}
                        className="gallery-img"
                        onClick={() => setSelectedImage(src)}
                    />
                ))}
            </div>

            {/* Modal da imagem ampliada */}
            {selectedImage && (
                <div className="modal" onClick={closeImage}>
                    <img src={selectedImage} alt="Imagem Ampliada" className="modal-img" />
                </div>
            )}
        </div>
    );
}

export default GalleryPhotos;