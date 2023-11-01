import React from 'react';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';

export default function LinkCard({title, description, link, icon}) {
    const IconElement = icon
    return (
        <Link to={link} className={styles.wrapper}>
            <div className={styles.linkCardWrapper}>
                <div className={styles.titleWrapper}>
                    <IconElement className={styles.icon}/>
                    <p className={"font-h3"}>{title}</p>
                </div>
                <p className="font-body1">{description}</p>
            </div>
        </Link>
    );
}
