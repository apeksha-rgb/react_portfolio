import React from 'react'

const WebflowProject = () => {
  return (
    <section id='project' className='min-h-screen flex items-center justify-center py-20'
    >
      <div className='max-w-5xl mx-auto px-4'>

      
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500  to-cyan-400 bg-clip-text text-transparent text-center'>
          Webflow Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2x_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>Fit Space Studio</h3>
            <p className='text-gray-400 mb-4'>
                FitSpace Studio web design built in Webflow featuring clear CTA buttons, class booking functionality, and visually engaging layouts to enhance user engagement. 
                </p>
            <div className='flex  flex-wrap gap-2'>
              {["Webflow", " Responsive Web design","Fitness Studio Website","UI/UX Design"].map((tech,key) => (<span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'> {tech}</span>))}
              
            </div>
        
            <div className='flex justify-between items-center'>
              <a href='https://fitspace-studio-7e8f57.webflow.io/' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project </a>
            </div>

            
          </div>

          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2x_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>Angel Ai </h3>
            <p className='text-gray-400 mb-4'>
                High-fidelity Webflow redesign of Angel Ai featuring multiple sections, animated components, and responsive carousels to deliver a polished, user-centric interface.
        </p>
            <div className='flex  flex-wrap gap-2'>
              {["Webflow","Carousels / Sliders","Smooth Animations","Responsive Web Design"].map((tech,key) => (<span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'> {tech}</span>))}
              
            </div>
            <div className='flex justify-between items-center'>
              <a href='https://webflow.com/design/angel-ai?utm_medium=project_link&utm_source=designer&utm_content=angel-ai&workflow=comment&pageId=5f11e955668428865fac1fac' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project </a>
            </div>
          </div>

    
          
          </div>


        </div>
    </section>
  )
}

export default WebflowProject