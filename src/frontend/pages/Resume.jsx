import React from 'react'
import { useEffect } from 'react'
import PDFViewer from '../components/PDFViewer'

const Resume = () => {
return (
    <div className='flex flex-col mt-10 md:mt-[20%] animate-fade-in'>
      <h1 className="text-3xl font-bold text-white translate-x-4">View my resume below!</h1>
      <PDFViewer />
      
    </div>
  )
}

export default Resume
