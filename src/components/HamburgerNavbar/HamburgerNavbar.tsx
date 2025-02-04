import { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { motion } from "framer-motion";
import "./HamburgerNavbar.css";

function HamburgerNavbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [active, setActive] = useState<number>(0);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (active === 0) {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [active]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="hamburger-container" ref={menuRef}>
            <div className="hamburger-menu">
                <button
                    className="menu-button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <MdClose /> : <FiMenu />}
                </button>

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="nav-options"
                    >
                        <ul>
                            <li className="menu-option">
                                <Link
                                    to="/"
                                    onClick={() => { setActive(0); setIsOpen(false); }}
                                    className={`nav-link ${active === 0 && "active"}`}
                                >
                                    Início
                                </Link>
                            </li>
                            <li className="menu-option">
                                <HashLink
                                    smooth
                                    onClick={() => { setActive(1); setIsOpen(false); }}
                                    to="/#gifts-container"
                                    className={`nav-link ${active === 1 && "active"}`}
                                >
                                    Lista de Presentes
                                </HashLink>
                            </li>
                            <li className="menu-option">
                                <Link
                                    to="/confirm"
                                    onClick={() => { setActive(2); setIsOpen(false); }}
                                    className={`nav-link ${active === 2 && "active"}`}
                                >
                                    Confirmar Presença
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

export default HamburgerNavbar;