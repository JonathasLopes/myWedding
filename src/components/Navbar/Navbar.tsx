import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        if (active === 0) {
            window.scroll({top: 0, left: 0, behavior: 'smooth' });
        }
    }, [active])

    return (
        <nav className="nav-wedding">
            <NavLink to="/" label="Início" identifier={0} active={active} setActive={setActive} />
            <NavHashLink to="/#gifts-container" identifier={1} active={active} setActive={setActive} label="Lista de Presentes" />
            <NavLink to="/confirm" label="Confirmar Presença" identifier={2} active={active} setActive={setActive} />
        </nav>
    );
};

interface NavLinkProps {
    to: string;
    label: string;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    active: number;
    identifier: number;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, setActive, active, identifier }) => {
    return (
        <Link
            to={to}
            onClick={() => setActive(identifier)}
            className={`nav-link ${active === identifier && "active"} ${to.includes("confirm") && "confirm-menu"}`}
        >
            {label}
        </Link>
    );
};

const NavHashLink: React.FC<NavLinkProps> = ({ to, label, setActive, active, identifier }) => {
    return (
        <HashLink
            smooth
            onClick={() => setActive(identifier)}
            to={to}
            className={`nav-link ${active === identifier && "active"}`}
        >
            {label}
        </HashLink>
    )
}

export default Navbar;