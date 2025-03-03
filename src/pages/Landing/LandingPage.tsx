import { ReactComponent as Divisor1 } from '../../assets/img/divisor1.svg';
import './LandingPage.css';
import CardCounting from '../../components/CardCounting/CardCounting';
import { useEffect, useState } from 'react';
import { ReactComponent as Divisor2 } from '../../assets/img/divisor2.svg';
import { calculateTimeLeft } from '../../helpers/CalculateTimeLeft';
import CircleColor from '../../components/CircleColor/CircleColor';
import GalleryPhotos from '../../components/GalleryPhotos/GalleryPhotos';
import useLoading from '../../hooks/useLoading';
import { toast } from 'react-toastify';
import { SendMessage } from '../../apis/MessagesAPI';
import Loading from '../../components/Loading/Loading';
import PixQR from '../../components/PixQR/PixQR';

function LandingPage() {
    const { startLoading, stopLoading, loading } = useLoading();
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [showQR, setShowQR] = useState<boolean>(false);

    function showQRCode() {
        setShowQR(true);
    }

    async function SendMessageToCouple() {
        startLoading();
        try {
            await SendMessage(name, message).then((resp) => {
                setName("");
                setMessage("");
                toast.success(resp.message);
            })
        } catch (error: any) {
            toast.error(error ? error.message : "Não foi possível enviar a mensagem, por favor, tente novamente mais tarde!");
        } finally {
            stopLoading();
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            var time = calculateTimeLeft("2025-07-26T17:00:00");
            setDays(time.days);
            setHours(time.hours);
            setMinutes(time.minutes);
            setSeconds(time.seconds);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='container-landing'>
            {loading && <Loading />}
            <div className="img-main">
                <h1>Bianca & Jonathas</h1>
            </div>
            <div className='container-infos'>
                <Divisor2 className='divisor-left' />
                <Divisor2 className='divisor-right' />
                <Divisor1 className='divisor' />
                <h3>Vamos nos Casar!</h3>
                <h4>26 de Julho de 2025</h4>
                <div className='cards-container'>
                    <CardCounting time={days} moment='D' />
                    <CardCounting time={hours} moment='H' />
                    <CardCounting time={minutes} moment='M' />
                    <CardCounting time={seconds} moment='S' />
                </div>
                <p className='address-infos'>R. Manoel dos Santos, 263 - Meu Cantinho, Suzano</p>
                <div className='map'>
                    <iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.019819205349!2d-46.328205924144704!3d-23.567731661827295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce706246a7ec85%3A0x72c4cf6703542265!2sR.%20Manoel%20dos%20Santos%2C%20263%20-%20Meu%20Cantinho%2C%20Suzano%20-%20SP%2C%2008664-635!5e0!3m2!1spt-BR!2sbr!4v1740164401828!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
                </div>
                <p className='text-option'>Para quem mora em <b>SÃO PAULO</b>, recomendamos que optem no waze ou google maps, a opção pela Rod. Ayrton Senna/Rod. dos Trabalhadores. Mesmo que tenha pedágio, é uma rota mais tranquila para chegar ao local</p>
                <Divisor1 className='divisor inverted' />
            </div>
            <div id="our-history-container" className='container-msg'>
                <h3>Nossa História</h3>
                <p>Nossa história começou de um jeito que nunca imaginamos. Nos conhecemos em um evento da igreja, sem suspeitar que aquele dia marcaria o início de algo tão especial. Era apenas mais um encontro, mas, no fundo, o destino já estava traçando nossos caminhos.
                    <br />
                    <br />
                    Uma semana depois, tivemos nosso primeiro encontro oficial. Fomos ao cinema assistir O Rei Leão. Já era a sexta vez que um de nós assistia à versão live-action, porque simplesmente ama esse filme. E, no meio de uma história que já conhecíamos de cor, uma nova história começou a ser escrita: nos olhamos e nos apaixonamos.
                    <br />
                    <br />
                    Desde então, nos tornamos inseparáveis. Começamos a sair cada vez mais, compartilhamos sonhos e conquistas. Entre estudos e aprendizados, fomos nos ajudando e crescendo juntos — um ainda no ensino médio, o outro na faculdade. 
                    <br />
                    <br />
                    Aos poucos, percebemos que o que sentíamos era muito mais do que apenas um sentimento passageiro. Queríamos construir uma vida juntos.
                    <br />
                    <br />
                    Seis anos se passaram. Seis anos de amor, risadas, desafios e momentos inesquecíveis. E agora, estamos a poucos passos do dia mais esperado: o nosso casamento! O dia em que diremos “sim” para a nossa história, que começou de forma tão simples e hoje é um dos capítulos mais lindos de nossas vidas.
                    <br />
                    <br />
                    E o que vem pela frente? Ainda não sabemos todos os detalhes, mas temos certeza de uma coisa: vamos continuar escrevendo essa história com amor, como sempre fizemos.</p>
            </div>
            <div className='colors-container'>
                <Divisor1 className='divisor' />
                <h3>Cores Proibidas</h3>
                <p>Não usar estas cores, pois serão cores que somente padrinhos, noivos e pais podem usar neste dia!</p>
                <div className='colors-circle-container'>
                    <Divisor2 className='divisor-colors' />
                    <CircleColor color='marsala' title='Marsala' />
                    <CircleColor color='esmerald' title='Esmeralda' />
                    <CircleColor color='white' title='Branco' />
                    <Divisor2 className='divisor-colors' />
                </div>
                <div id="gifts-container" className='gifts-container'>
                    <h3>Lista de Presentes</h3>
                    <p>Clique no botão abaixo para acessar nossa lista de presentes! Ou se preferirem, podem também fazer um pix para nós!</p>
                    <button className='btn-gifts' onClick={showQRCode}>Fazer Pix</button>
                    <a href='https://site.lejour.com.br/bihejoh2025' className='btn-gifts'>Ir para Lista de Presentes</a>
                    {showQR && <PixQR setShowQR={setShowQR} />}
                    <p className='text-bible'>Eclesiastes 4:9-10 - Melhor é serem dois do que um, porque têm melhor recompensa pelo seu trabalho. Pois se um cair, o outro levanta o seu companheiro.</p>
                </div>
                <Divisor1 className='divisor inverted' />
            </div>
            <div className='gallery-photos'>
                <h3>Galeria de Fotos</h3>
                <GalleryPhotos
                    isReverse={false}
                    images={
                        [
                            '/images/genericPhoto1.jpg',
                            '/images/genericPhoto2.jpg',
                        ]
                    }
                />
            </div>

            <Divisor1 className='divisor' />
            <div className='message-container'>
                <h3>Escreva uma Mensagem</h3>
                <div className='inputs-container'>
                    <div className='input-container'>
                        <label>Nome:</label>
                        <input value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='input-container'>
                        <label>Mensagem:</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} />
                    </div>
                </div>
                <button disabled={name === "" || message === ""} onClick={SendMessageToCouple} className='btn-send-message'>Enviar</button>
            </div>
        </div>
    )
}

export default LandingPage;