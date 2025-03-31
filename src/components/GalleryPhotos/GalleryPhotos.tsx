import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import './GalleryPhotos.css';

type PropType = {
    slides: string[]
    options?: EmblaOptionsType
}

const GalleryPhotos: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true })
    ]);
    const [isPlaying, setIsPlaying] = useState(false);

    const closeImage = () => setSelectedImage(null);

    const toggleAutoplay = useCallback(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (!autoScroll) return

        const playOrStop = autoScroll.isPlaying()
            ? autoScroll.stop
            : autoScroll.play
        playOrStop()
    }, [emblaApi])

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (!autoScroll) return

        setIsPlaying(autoScroll.isPlaying())
        emblaApi
            .on('autoScroll:play', () => setIsPlaying(true))
            .on('autoScroll:stop', () => setIsPlaying(false))
            .on('reInit', () => setIsPlaying(autoScroll.isPlaying()));
    }, [emblaApi]);

    useEffect(() => {
        if(!isPlaying) {
            setTimeout(() => toggleAutoplay(), 2000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying]);

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
        <>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((slide, index) => (
                            <div className="embla__slide" key={index}>
                                <div className="embla__slide__number">
                                    <img
                                        key={index}
                                        src={slide}
                                        alt={`Imagem ${index + 1}`}
                                        onClick={() => setSelectedImage(slide)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selectedImage && (
                <div className="modal" onClick={closeImage}>
                    <img src={selectedImage} alt="Imagem Ampliada" className="modal-img" />
                </div>
            )}
        </>
    )
}

export default GalleryPhotos
