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
            <div className="img-main">
                <h1>Bianca & Jonathas</h1>
            </div>
            <div className='container-invites'>
                <h3>Confirme sua presença!</h3>
                <p>Para confirmar a sua presença no casamento só precisa escrever o seu nome e clicar em Pesquisar. Aparecerá o seu nome e só terá que dizer se estará ou não no casamento, além disso, você poderá já confirmar as pessoas que foram convidadas junto com você!</p>
                <input placeholder='Nome' value={search} onChange={e => setSearch(e.target.value)} />
                <button onClick={getByName} disabled={search === ""} className='btn-search'>Buscar</button>
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