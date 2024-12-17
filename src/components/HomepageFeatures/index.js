import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Wichtige Information',
        description: (
            <>
                <b>Bitte halten Sie sich an die Vorlagen und Hinweise. Wenn etwas unklar sein sollte, bitte nachfragen!</b>
            </>
        ),
    },
    {
        title: 'Letzte Updates',
        description: (
            <>
                <p>- How to hochladen eines Bildes geupdated</p>
                <p>- static/img/ Ordnerstruktur erstellt</p>
            </>
        ),
    },
];

function Feature({title, description}) {
    return (
        <div className={clsx('col col--6')}>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
