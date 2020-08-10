import React,{useState} from "react"
import Layout from "../components/Layout"
import Header from "../components/sections/Header"
import Projects from "../components/sections/project/Projects"
import Head from "../components/Head"
import ParticlesComponent from '../components/ParticlesComponent'
import OtherProjects from "../components/sections/OtherProjects/OtherProjects"
import Contact from "../components/sections/Contact"
import Load from '../components/Load'
import { AnimatePresence } from "framer-motion"

export default function Home() {

  const [show,setShow] = useState<boolean>(true)

  setTimeout(()=>{
      setShow(false)
  },2000)


  return(
    <Layout>
      <ParticlesComponent height='100vh;' />
      <Head title='Stanley Garbo - Portfolio Website' 
        metaDescription='Stanley is a web developer who delivers high-quality websites. May it be for freelance-work or for potential clients.' 
      />
      <Header/>
      <Projects/>
      <OtherProjects/>
      <AnimatePresence>
        {show && <Load/>}
      </AnimatePresence>
      <Contact />
    </Layout>
  )
}

