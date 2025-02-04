import { FiSearch } from 'react-icons/fi';
import './Confirm.css';
import { useState } from 'react';

function Confirm() {
    const [search, setSearch] = useState<string>("");

    return (
        <div className="container-confirm">
            <div className='container-msg'>
                <h3>Confirme sua Presença!</h3>
                <p>
                    Digite seu nome no campo abaixo, caso esteja em nossa lista de convidados,
                    irá aparecer seu nome, juntamente com todos os integrantes de seu convite.
                    Assim, será possível confirmar a sua presença e a das pessoas que irão junto com você!
                    <br />
                    <br />
                    <span className='obs-confirm'>Antes de confirmar sua presença, verifique se realmente é você!</span>
                </p>
            </div>
            <div className='container-invites'>
                <span className='warn-confirm'>Atenção: Não será permitida a entrada de pessoas que não estejam no convite
                    e também de quem não confirmou presença até 40 dias antes do evento!</span>
                <div className='container-input'>
                    <input placeholder='Digite aqui seu nome...' value={search} onChange={e => setSearch(e.target.value)} />
                    <button type='button'><FiSearch /></button>
                </div>
            </div>
            <div className='img-secondary'></div>
        </div>
    )
}

export default Confirm;