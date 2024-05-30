"use client";

import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const intro = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 text-center mb-4">
                    <h2>dal 1962</h2>
                    <h1>Benvenuti nella Cantina Colline Umbre</h1>
                    <p>
                    Situata nel cuore verde d'Italia, la Cantina "Colline Umbre" è un gioiello nascosto tra le dolci colline umbre. Questa regione, rinomata per la sua bellezza naturale e la sua ricca tradizione enogastronomica, è il luogo ideale per la produzione di vini di alta qualità.
                    </p>
                </div>
                <div className="col-12">
                    <Image
                        src="/intro.jpg" // Sostituisci con il percorso effettivo della tua immagine
                        alt="Cantina Cuvaison"
                        className="img-fluid"
                        width={800}
                        height={600}
                    />
                </div>
            </div>
        </div>
    );
};

export default intro;
