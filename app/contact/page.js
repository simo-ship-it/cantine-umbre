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
                    <h1>Il Nostro Team</h1>
                </div>
                <div className="col-12">
                    <p>
                    La Cantina "Colline Umbre" è gestita dalla famiglia Rossi, che porta avanti con dedizione e competenza la tradizione vitivinicola umbra. Il nostro team è composto da esperti agronomi, enologi e appassionati del settore, uniti dall'obiettivo comune di produrre vini di eccellenza e di diffondere la bellezza e la cultura del vino umbro in tutto il mondo.
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
                        Contatti
                    </h1>
                    <p>
                    Se desideri saperne di più sulla Cantina "Colline Umbre" o prenotare una visita, non esitare a contattarci. Siamo sempre disponibili per condividere la nostra passione e la nostra esperienza con te.
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
