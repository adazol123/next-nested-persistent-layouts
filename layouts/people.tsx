import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import React from 'react'
import style from '../styles/Layout.module.css'
import { useRouter } from 'next/router';


type Data = {
    names: Array<{
        name: string;
        id: number;
    }>;
};
const PeopleLayout = () => {
    let [people, setPeople] = React.useState<Data>()
    React.useEffect(() => {
        fetch('http://localhost:3000/api/hello').then(res => res.json()).then(res => setPeople(res))
    }, [])
    let { query } = useRouter()
    console.log(query)
    return (
        <div className='col-span-1 my-2'>
            <div className={style.people}>
                {people?.names && people.names.map((man, index) =>
                (
                    <Link href={`${index}`} key={index}><a>{man.name}</a>
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default PeopleLayout