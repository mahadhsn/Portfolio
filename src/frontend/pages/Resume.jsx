import React from 'react'
import { useEffect } from 'react'
import PDFViewer from '../components/PDFViewer'

const Resume = () => {
  useEffect(() => {
    document.title = "Mahad's Resume"
  })

return (
    <div className='flex flex-col animate-fade-in mt-[10%] md:mt-[20%]'>
      <h1 className="text-3xl font-bold text-white text-center">View my resume below!</h1>
      <PDFViewer />
      
    </div>
  )
}

export default Resume
