import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import LayoutRoot, { Props } from '../layouts'
import PeopleLayout from '../layouts/people'
import styles from '../styles/Home.module.css'
import type { PageWithLayout } from './_app'

type Data = {
    names: Array<{
        name: string;
        id: number;
    }>;
};

const Person: PageWithLayout = () => {
    const { query } = useRouter()

    return (
        <div className={styles.container}>
            <div className=' my-2 bg-black/5 rounded-md w-full h-full grid place-content-center font-thin px-6'>
                <h3>{query.uid?.toString().toUpperCase()}</h3>
                <p className='text-xs max-w-xs text-neutral-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim facere nam molestiae tenetur nihil!</p>
            </div>
        </div>
    )
}

Person.getLayout = (page) => {
    return (
        <LayoutRoot>
            <section>
                <PeopleLayout ></PeopleLayout>
                {page}
            </section>
        </LayoutRoot>
    )
}



export default Person
