'use client'

import Footer from '../../../../components/footer'
import Header from "@/components/header"
import SinglePage from "@/components/singlePage"



export default function SinglePostPage({ params }){
    return(
        <>
            <Header/>
            <SinglePage params={params}/>
            <Footer/>
        </>
    )
}