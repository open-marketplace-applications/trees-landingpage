import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Plant and Share',
    img: require('../../static/img/seedling.png').default,
    description: (
      <>
        With Tutorials and Blog entries you have a perfect knowledge base - it's open source and community driven.
      </>
    ),
  },
  {
    title: 'Tree Tracking',
    img: require('../../static/img/deciduous-tree.png').default,
    description: (
      <>
      Preservation and expansion of the tree population is our highest priority. Tracking is a crutial step to measure our progress.
      </>
    ),
  },
  {
    title: 'Become a Member',
    img: require('../../static/img/green-apple.png').default,
    description: (
      <>
        Harvest fruits and enjoy the benefits of reducing CO2.
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
