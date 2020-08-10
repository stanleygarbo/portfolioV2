import React from 'react'
import Layout from '../components/Layout'
import Projects from '../components/sections/project/Projects'
import OtherProjects from '../components/sections/OtherProjects/OtherProjects'
import Head from "../components/Head"

const projects = () => {
    return (
        <Layout>
            <Head title='Stanley Garbo - Projects' 
                metaDescription='These are my projects.' 
            />
            <Projects/>
            <OtherProjects />
        </Layout>
    )
}

export default projects
