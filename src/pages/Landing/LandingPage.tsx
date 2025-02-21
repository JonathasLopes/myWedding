import { ReactComponent as Divisor1 } from '../../assets/img/divisor1.svg';
import './LandingPage.css';
import CardCounting from '../../components/CardCounting/CardCounting';
import { useEffect, useState } from 'react';
import { ReactComponent as Divisor2 } from '../../assets/img/divisor2.svg';
import { calculateTimeLeft } from '../../helpers/CalculateTimeLeft';

function LandingPage() {
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

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
                <p>O grande dia está chegando e não poderíamos estar mais animados para compartilhar com a nossa família e amigos um dos dias mais especiais das nossas vidas!
                    <br />
                    <br />
                    Queremos muito sua presença neste dia tão importante com muita festa, amor e carinho em uma comemoração que irá nos marcar para sempre!</p>
            </div>
            <div className='colors-container'>
                <Divisor1 className='divisor' />
                <h3>Cores Proibidas</h3>
                <Divisor1 className='divisor inverted' />
            </div>
            <div id="gifts-container">
                <h3>Nossa Lista de Presentes</h3>
                <p>Ao clicar neste botão, você será redirecionado para o site da nossa lista de presentes!</p>
                <a href='https://site.lejour.com.br/bihejoh2025' className='btn-gifts'>Ver Lista de Presentes</a>
                <p className='text-bible'><span>Eclesiastes 4:9-10 - </span>Melhor é serem dois do que um, porque têm melhor recompensa pelo seu trabalho. Pois se um cair, o outro levanta o seu companheiro.</p>
            </div>
        </div>
    )
}

export default LandingPage;