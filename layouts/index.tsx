import { NextPageContext } from 'next'
import Head from 'next/head'
import React from 'react'
import style from '../styles/Layout.module.css'
export type Props = {
    children: React.ReactNode
}

const LayoutRoot: React.FC<Props> = (props) => {
    return (
        <>
            <Head>
                <title>Adazolhub | Nested Layout</title>
            </Head>
            <header className={style.container}>
                <nav className={style.nav__bar} style={{ minHeight: 'var(--nav-height)' }}>
                    <span className={style.logo}>Adazolhub</span>
                    <button type='button'>Login</button>
                </nav>
            </header>

            {props.children}
        </>
    )
}

export default LayoutRoot