import { FiSearch } from 'react-icons/fi';
import './Confirm.css';
import { useState } from 'react';
import Collapse from '../../components/Collapse/Collapse';
import { GetByName } from '../../apis/InvitesAPI';
import { IFamilyResponse } from '../../interfaces/IResponseInvites';
import { toast } from 'react-toastify';
import useLoading from '../../hooks/useLoading';
import Loading from '../../components/Loading/Loading';

function Confirm() {
    const { startLoading, stopLoading, loading } = useLoading();
    const [search, setSearch] = useState<string>("");
    const [families, setFamilies] = useState<IFamilyResponse[]>([]);

    async function getByName() {
        startLoading();
        try {
            await GetByName(search).then((resp) => {
                console.log(resp)
                setFamilies(resp.families);
            });
        } catch (error: any) {
            toast.error(error ? error.message : "Não foi possível fazer a busca, por favor, tente novamente mais tarde!");
        } finally {
            stopLoading();
        }
    }

    return (
        <div className="container-confirm">
            {loading && <Loading />}
            <div className='container-msg'>
                <h3>Confirme sua Presença!</h3>
                <p>
                    Digite seu nome no campo abaixo, caso esteja em nossa lista de convidados,
                    irá aparecer seu nome, juntamente com todos os integrantes de seu convite.
                    Assim, será possível confirmar a sua presença e a das pessoas que irão junto com você!
                    <br />
                    <br />
                    <span className='obs-confirm'>Antes de confirmar sua presença, verifique se realmente é você!</span>
                    <br />
                    <br />
                    <span className='warn-confirm'>***Atenção: Não será permitida a entrada de pessoas que não estejam no convite
                        e também de quem não confirmou presença até 40 dias antes do evento!***</span>
                </p>
            </div>
            <div className='container-invites'>
                <div className='container-input'>
                    <input placeholder='Digite aqui seu nome...' value={search} onChange={e => setSearch(e.target.value)} />
                    <button disabled={!search || search === ""} type='button' onClick={getByName}><FiSearch /></button>
                </div>
                <div className='container-collapse'>
                    {families.map((family, index) => {
                        return (
                            <Collapse
                                key={index}
                                title={family.NameSearched}
                                members={family.Members}
                            />
                        )
                    })}
                </div>
            </div>
            <div className='img-secondary'></div>
        </div>
    )
}

export default Confirm;