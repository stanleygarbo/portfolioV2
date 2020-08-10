import React from 'react'
import {Helmet} from 'react-helmet'

interface Props{
    title:string,
    metaDescription:string
}

const Head = ({title, metaDescription}:Props) => {
    return (
        <Helmet>
            <html lang='en' />
            <title>{title}</title>
            <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"/>
            <meta name='description' content={metaDescription}  />
        </Helmet>
    )
}

export default Head