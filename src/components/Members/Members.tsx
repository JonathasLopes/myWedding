import './Members.css';
import { IMembersResponse } from "../../interfaces/IResponseInvites";
import Checkbox from '../Checkbox/Checkbox';

interface IMembersProps {
    title: string,
    members: IMembersResponse[],
    setSelecteds: React.Dispatch<React.SetStateAction<string[]>>,
    selecteds: string[],
    setDisSelecteds: React.Dispatch<React.SetStateAction<string[]>>,
    disSelecteds: string[]
}

function Members({ title, members, selecteds, setSelecteds, disSelecteds, setDisSelecteds }: IMembersProps) {
    return (
        <div className="members-container">
            <div className='member-container'>
                <Checkbox
                    isChecked={members.find(x => x.Name === title)?.Confirmed ?? false}
                    id={members.find(x => x.Name === title)?.Id ?? ""}
                    selecteds={selecteds}
                    setSelecteds={setSelecteds}
                    name={title}
                    disSelecteds={disSelecteds}
                    setDisSelecteds={setDisSelecteds}
                />
            </div>
            {members.filter(x => x.Name !== title).map((member, index) => {
                return (
                    <div className='member-container' key={index}>
                        <Checkbox
                            isChecked={member.Confirmed}
                            id={member.Id}
                            selecteds={selecteds}
                            setSelecteds={setSelecteds}
                            name={member.Name}
                            disSelecteds={disSelecteds}
                            setDisSelecteds={setDisSelecteds}
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default Members;