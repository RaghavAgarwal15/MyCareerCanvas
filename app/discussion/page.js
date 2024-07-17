
import React from 'react'
import Navbar from '../components/Navbar'
import { DrawerWithForm } from '../components/Drawer'
import QuestionsContainer from '../components/QuestionsContainer'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className='h-screen fixed overflow-y-auto w-full bg-blue-50'>
      <Navbar/>
      <h2 className='text-black text-center mt-3 mb-5'>Discussion Section</h2>
      <DrawerWithForm/>
      <QuestionsContainer/>
      <Footer/>
    </div>
  )
}

export default page