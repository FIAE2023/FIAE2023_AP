import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Regel 1',
    description: (
      <>
        Wenn man Daten auf einer Seite verändert soll es abgesprochen sein mit
        dem jeweiligen Ausbilder bzw. Auszubildenden. 
      </>
    ),
  },
  {
    title: 'Regel 2',
    description: (
      <>
        Daten die es auf der Seite gibt sollen verantwortungsvoll genutzt werden.
      </>
    ),
  },
  {
    title: 'Regel 3',
    description: (
      <>
        Wenn man eine veränderung commitet soll eine sinvolle message genutzt werden.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
