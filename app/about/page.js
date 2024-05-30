// pages/about.js
"use client";

import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 text-center mb-4">
                    <h1>La Storia</h1>
                </div>
                <div className="col-12">
                    <p>
                    La Cantina "Colline Umbre" è nata dalla passione della famiglia Rossi per la viticoltura e per il territorio umbro. Fondata nel 1980, la cantina è cresciuta nel corso degli anni, mantenendo sempre un forte legame con le tradizioni locali e un impegno costante per la qualità.


                    </p>


                    <Image
                        src="/images/your-image.jpg" // Sostituisci con il percorso effettivo della tua immagine
                        alt="Cantina Cuvaison"
                        className="img-fluid mt-4"
                        width={800}
                        height={600}
                    />
                </div>
                <div className='col-12'>
                    <h1>
                        Il Territorio
                    </h1>
                    <p>
                    I nostri vigneti si estendono su 50 ettari di terreno collinare, a un'altitudine compresa tra i 300 e i 400 metri sul livello del mare. Questa posizione privilegiata, combinata con un clima favorevole e un suolo ricco di minerali, crea le condizioni ideali per la coltivazione di vitigni autoctoni come il Sangiovese, il Grechetto e il Sagrantino.
                    </p>

                </div>

                <div className='col-12'>
                    <h1>
                        I Nostri Vini
                    </h1>
                    <p>
                        Alla Cantina "Colline Umbre" produciamo una gamma di vini che riflettono la diversità e la ricchezza del nostro territorio. Dai vini rossi corposi e strutturati ai bianchi freschi e aromatici, ogni bottiglia racconta la storia e la passione che mettiamo in ogni fase della produzione. 
                    </p>

                </div>
            </div>
        </div>
    );
};

export default About;
