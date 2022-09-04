import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import LayoutRoot, { Props } from '../layouts'
import PeopleLayout from '../layouts/people'
import styles from '../styles/Home.module.css'
import type { NextPageWithLayout } from './_app'

type Data = {
    names: Array<{
        name: string;
        id: number;
    }>;
};

const Person: NextPageWithLayout = () => {
    const { query } = useRouter()

    return (
        <div className={styles.person}>
            <div className=' my-2 bg-black/5 rounded-md w-full h-full grid place-content-center font-thin px-6'>
                <h3>{query.uid?.toString().toUpperCase()}</h3>
                <p className='text-xs max-w-xs text-neutral-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim facere nam molestiae tenetur nihil!</p>
            </div>
        </div>
    )
}


/**
 * @description layout structure
 * @param page 
 * @returns React Node
 */
Person.getLayout = (page) => <LayoutRoot>{page}</LayoutRoot>



export default Person
