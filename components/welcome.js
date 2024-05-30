import React from 'react';
import Image from 'next/image';
import styles from '../styles/Welcome.module.css';

function Welcome() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Benvenuti nella nostra cantina!</h1>
                <p>Qui troverete una selezione dei migliori vini umbri.</p>
            </div>
            <Image
                src="/cantina.png"
                alt="Cantina"
                layout="responsive"
                width={2000}
                height={1125}
                className={styles.image}
            />
        </div>
    );
}

export default Welcome;
