import React from 'react'
import Layout from '../components/Layout'
import Contact from '../components/sections/Contact'
import Head from "../components/Head"

const contact = () => {
    return (
        <Layout>
            <Contact WholeViewPort={true} />
            <Head title='Stanley Garbo - Contact Me' 
                metaDescription='Contact me for Freelancing Opportunities or for a potential project.' 
            />
        </Layout>
    )
}

export default contact
