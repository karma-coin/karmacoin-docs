import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function Testnet1Page() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Karma Coin Mainent is Live!`}
            description="Join our mainnet">
            <main>
                <h1 className={clsx('text--center', styles.titleBanner, 'padding--sm')}>
                    Karma Coin
                </h1>
                <div className={clsx(styles.mainTextContainer)}>
                    <div className={clsx('row', styles.mainText)}>
                        <h2>Joining Karma Coin</h2>
                        <ul className={clsx(styles.mainBullets)}>
                            <li><b>Desktop</b> - run the <a href="https://app.karmaco.in">Karma Coin web app</a> in Chrome (Safari on macOS also works).</li>
                            <li><b>iPhone</b> - Get the <a href="https://apps.apple.com/app/karma-coin/id6446460911">Karma Coin iPhone App from the App Store</a>, or run the <a href="https://app.karmaco.in">web app</a> in Chrome or Safari.</li>
                            <li><b>Android</b> - Get the <a href="https://play.google.com/store/apps/details?id=in.karmaco.app">Karma Coin Android App</a> (via Google Play Store), or run <a href="https://app.karmaco.in">the web app</a> in Chrome.</li>
                            <li><b>Apple silicon Mac</b> - Get the app from the <a href="https://apps.apple.com/app/karma-coin/id6446460911">MacOS App Store</a>.</li>
                        </ul>

                        <div className={clsx(styles.center)}>
                            <img className={clsx(styles.imgContainer)} src="/main.png" height="400"/>
                            <img className={clsx(styles.imgContainer)} src="/appreciate.png" height="400"/>
                            <img className={clsx(styles.imgContainer)} src="/appreciation.png" height="400"/>
                        </div>


                        <p>Having an issue joining? Please contact us at <a href='mailto:support@karmaco.in'>support@karmaco.in</a>.</p>

                        <div className={clsx('buttons')}>
                            <Link className={clsx(
                                'button button--outline button--secondary button--lg'
                            )} target='_blank'
                                  to='https://app.karmaco.in'>
                                Run Karma Coin in your Browser
                            </Link>
                        </div>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

