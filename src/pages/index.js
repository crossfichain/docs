import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import Diamond from '/static/icons/diamond.svg';
import Screen from '/static/icons/screen.svg';
import LinkCard from "../components/LinkCard";


const DOCUMENTATION_DIRECTORIES = [{
    title: 'CrossFi Chain',
    description: 'Full review of how the CrossFi Blockchain works',
    icon: Diamond,
    link: '/docs/node/api/explorer-api'
}, {
    title: 'Devs', description: 'Find out how to start developing with CrossFi Chain', icon: Screen, link: '/#'
}]
export default function Home() {

    return (<Layout
            description="Professional Documentation: Resources and guidance for effective project development and collaboration.">
            <HomepageHeader/>
        </Layout>);
}

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();

    return (<div className={clsx(styles.heroContent)}>
            <header className={clsx(styles.heroTitle)}>
                <h1 className="font-h1">{siteConfig.title}</h1>
                <p className="font-body1">{siteConfig.tagline}</p>

            </header>
            <div className={styles.linkCards}>
                {DOCUMENTATION_DIRECTORIES.map(category => <LinkCard key={category.title}
                                                                     title={category.title}
                                                                     description={category.description}
                                                                     icon={category.icon}
                                                                     link={category.link}/>)}
            </div>
        </div>);
}


