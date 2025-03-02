import './Confirm.css';
import { useState } from 'react';
import { ConfirmPresence, GetByName, RemovePresence } from '../../apis/InvitesAPI';
import { IFamilyResponse } from '../../interfaces/IResponseInvites';
import { toast } from 'react-toastify';
import useLoading from '../../hooks/useLoading';
import Loading from '../../components/Loading/Loading';
import Members from '../../components/Members/Members';

function Confirm() {
    const { startLoading, stopLoading, loading } = useLoading();
    const [search, setSearch] = useState<string>("");
    const [families, setFamilies] = useState<IFamilyResponse[]>([]);
    const [selecteds, setSelecteds] = useState<string[]>([]);
    const [disSelecteds, setDisSelecteds] = useState<string[]>([]);

    async function callAPI() {
        if (selecteds.length > 0) {
            await confirmPresence();
        }
        if (disSelecteds.length > 0) {
            await noConfirmPresence();
        }
    }

    async function getByName() {
        startLoading();
        try {
            await GetByName(search).then((resp) => {
                setFamilies(resp.families);
                if (resp.families.length === 0) {
                    toast.warning("Pesquisa sem resultados!");
                }
            });
        } catch (error: any) {
            toast.error(error ? error.message : "Não foi possível fazer a busca, por favor, tente novamente mais tarde!");
        } finally {
            stopLoading();
        }
    }

    async function confirmPresence() {
        startLoading();
        try {
            await ConfirmPresence(selecteds.join(",")).then((resp) => {
                setSearch("");
                setFamilies([]);
                setSelecteds([]);
                toast.success(resp.message);
            });
        } catch (error: any) {
            toast.error(error ? error.message : "Não foi possível confirmar a presença, por favor, tente novamente mais tarde!");
        } finally {
            stopLoading();
        }
    }

    async function noConfirmPresence() {
        startLoading();
        try {
            await RemovePresence(disSelecteds.join(",")).then((resp) => {
                setSearch("");
                setFamilies([]);
                setDisSelecteds([]);
                toast.success(resp.message);
            });
        } catch (error: any) {
            toast.error(error ? error.message : "Não foi possível confirmar a presença, por favor, tente novamente mais tarde!");
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
                {families.length === 0 ?
                    <>
                        <p>Para confirmar a sua presença no casamento só precisa escrever o seu nome e clicar em Pesquisar. Aparecerá o seu nome e só terá que dizer se estará ou não no casamento, além disso, você poderá já confirmar as pessoas que foram convidadas junto com você!</p>
                        <input placeholder='Nome' value={search} onChange={e => setSearch(e.target.value)} />
                        <button onClick={getByName} disabled={search === ""} className='btn-search'>Buscar</button>
                    </>
                    :
                    <>
                        <p>Confirme a sua presença e a de seus familiares!</p>
                        <div className='container-collapse'>
                            {families.map((family, index) => {
                                return (
                                    <Members
                                        key={index}
                                        title={family.NameSearched}
                                        members={family.Members}
                                        selecteds={selecteds}
                                        setSelecteds={setSelecteds}
                                        disSelecteds={disSelecteds}
                                        setDisSelecteds={setDisSelecteds}
                                    />
                                )
                            })}
                        </div>
                        <button onClick={callAPI} disabled={selecteds.length === 0 && disSelecteds.length === 0} className='btn-search'>Atualizar Presença</button>
                    </>
                }
            </div>
            <div className='img-secondary'></div>
        </div>
    )
}

export default Confirm;