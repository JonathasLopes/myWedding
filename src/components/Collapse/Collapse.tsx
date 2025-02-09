import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import './Collapse.css';
import { IMembersResponse } from "../../interfaces/IResponseInvites";

interface CollapseProps {
    title: string;
    members: IMembersResponse[];
}

function Collapse({ title, members }: CollapseProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="collapse-button"
            >
                {title}
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0 }}
                >
                    <FiChevronDown />
                </motion.div>
            </button>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0 }}
                className="collapse-content"
            >
                <div>
                    {members.map((member, index) => {
                        return(
                            <div key={index}>{member.Name}</div>
                        )
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default Collapse;