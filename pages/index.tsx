import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LayoutRoot, { Props } from '../layouts'
import PeopleLayout from '../layouts/people'
import styles from '../styles/Home.module.css'
import Person from './[uid]'
import type { NextPageWithLayout } from './_app'


const Home: NextPageWithLayout = () => {

  return <div>Hello</div>
}

/**
 * @description layout structure
 * @param page 
 * @returns React Node
 */
Home.getLayout = (page) => <LayoutRoot>{page}</LayoutRoot>



export default Home
