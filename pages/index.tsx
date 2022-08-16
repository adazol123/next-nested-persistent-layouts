import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LayoutRoot, { Props } from '../layouts'
import PeopleLayout from '../layouts/people'
import styles from '../styles/Home.module.css'
import Person from './[uid]'
import type { PageWithLayout } from './_app'


const Home: PageWithLayout = () => {

  return (
    <div className={styles.container}>
      🏈
    </div>
  )
}

Home.getLayout = (page) => {
  return (
    <LayoutRoot>
      <section>
        <PeopleLayout ></PeopleLayout>
        {page}
      </section>
    </LayoutRoot>
  )
}


export default Home
