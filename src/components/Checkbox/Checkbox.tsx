import { useEffect, useState } from 'react';
import './Checkbox.css';

interface ICheckboxProps {
    name: string,
    isChecked: boolean,
    id: string,
    setSelecteds: React.Dispatch<React.SetStateAction<string[]>>,
    selecteds: string[],
    setDisSelecteds: React.Dispatch<React.SetStateAction<string[]>>,
    disSelecteds: string[]
}

function Checkbox({ name, isChecked, id, selecteds, setSelecteds, disSelecteds, setDisSelecteds }: ICheckboxProps) {
    const [checked, setChecked] = useState<boolean>(isChecked);

    function addOrRemoveItemId() {
        let hasId = selecteds.findIndex(x => x === id) !== -1;
        if (checked && !hasId) {
            setSelecteds(prev => [...prev, id]);
        } else if (hasId) {
            let newSelecteds = selecteds.filter(x => x !== id);
            setSelecteds(newSelecteds);
        }
        addOrRemoveItemDisSelect();
    }

    function addOrRemoveItemDisSelect() {
        let hasId = disSelecteds.findIndex(x => x === id) !== -1;
        if (isChecked && !hasId) {
            setDisSelecteds(prev => [...prev, id]);
        } else if (hasId && isChecked) {
            let newSelecteds = disSelecteds.filter(x => x !== id);
            setDisSelecteds(newSelecteds);
        }
    }

    useEffect(() => {
        addOrRemoveItemId();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked]);

    return (
        <label className='label-container'>
            <input
                checked={checked}
                onChange={() => setChecked(!checked)}
                type='checkbox'
            />
            <span>{name}</span>
        </label>
    )
}

export default Checkbox;