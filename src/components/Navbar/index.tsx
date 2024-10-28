"use client";

import Image from "next/image";
import Link from "next/link";
import NavItem, { NavItemInterface } from "../NavItem";
import "./index.css"
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
    const items: NavItemInterface[] = [
        {
            url: "/",
            label: "Início"
        },
        {
            url: "/about",
            label: "Sobre"
        },
        {
            url: "/products",
            label: "Produtos"
        },
        {
            url: "/services",
            label: "Serviços"
        },
        {
            url: "/contacts",
            label: "Contatos"
        },
    ]

    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <header>
            <nav className="navbar">
                <Link href="/" className="logo">
                    <Image 
                        src="logo.svg" 
                        width={50}
                        height={50} 
                        alt="Logo do sistema"
                    />
                </Link>

                <ul className={`nav-items ${openMenu ? 'open' : ''}`}>
                    {items.map((item, index)=> (
                        <NavItem
                            key={index}
                            url={item.url}
                            label={item.label}
                            isActive={pathname === item.url}
                        />
                    ))}
                </ul>

                <button className="btn-mobile" onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ? <FaXmark /> : <FaBars />}
                </button>

                <button className="btn-default">
                    Contatar
                </button>
            </nav>
        </header>
    );
}