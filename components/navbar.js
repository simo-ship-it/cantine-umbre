"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) { // Puoi regolare il valore in base alle tue esigenze
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top px-2 ${scrolled ? 'scrolled' : ''}`}>
            <Link href="/" className="navbar-brand mx-auto ">
                <Image src="/logo.png" alt="Brand Logo" width={50} height={50} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item px-5">
                        <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item px-5">
                        <Link href="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item px-5">
                        <Link href="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item px-5">
                        <Link href="/shop" className="nav-link">Shop</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
