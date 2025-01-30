import GetDays from '../../helpers/GetDays';
import './LandingPage.css';

function LandingPage() {

    return (
        <div className='container-landing'>
            <div className="img-main">
                <h1>Bianca & Jonathas</h1>
            </div>
            <div className='border-container'>
                <div className='border-radius-green'></div>
            </div>
            <div className='container-infos'>
                <hr className='bar-horizontal' />
                <h3>Vamos nos Casar!</h3>
                <h1>Faltam {GetDays()} dias!</h1>
                <h3>26.07.2025</h3>
                <hr className='bar-horizontal' />
                <p>R. Manoel dos Santos, 263 - Meu Cantinho, Suzano</p>
            </div>
            <div className='container-msg'>
                <h3>Bem-vindos ao nosso casamento!</h3>
                <p>O grande dia está chegando e não poderíamos estar mais animados para compartilhar com a nossa família e amigos um dos dias mais especiais das nossas vidas! 
                    <br />
                    <br />
                    Queremos muito sua presença neste dia tão importante com muita festa, amor e carinho em uma comemoração que irá nos marcar para sempre!</p>
            </div>
            <div className='img-secondary'></div>
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