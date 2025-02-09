import React from 'react'

function Project() {
  return (
    <section id='project' className='min-h-screen flex items-center justify-center py-20'
    >
      <div className='max-w-5xl mx-auto px-4'>

      
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500  to-cyan-400 bg-clip-text text-transparent text-center'>
          Learning Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2x_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>Login Signup Form</h3>
            <p className='text-gray-400 mb-4'>
              Integrated & configured firebase for storing user data.
            </p>
            <div>
              {["React","Firbebase", "Github", "Netlify"].map((tech,key) => (<span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.6)] transition'> {tech}</span>))}
              
            </div>
            <div className='flex justify-between items-center'>
              <a href='https://github.com/apeksha-rgb/LoginSignupAuthentication' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project </a>
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2x_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>Tax Calculator</h3>
            <p className='text-gray-400 mb-4'>
              Focused on Mobile first design and used Tailwind for UI Design
            </p>
            <div>
              {["React","TailwindCSS", "Github", "Netlify"].map((tech,key) => (<span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.6)] transition'> {tech}</span>))}
              
            </div>
            <div className='flex justify-between items-center'>
              <a href='https://texcal.netlify.app' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project </a>
            </div>
          </div>

          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2x_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>Password Generator</h3>
            <p className='text-gray-400 mb-4'>
              Focused on using State Management to handle Dynamic Changes.
            </p>
            <div>
              {["React","Firbebase", "Github", "TailwindCSS"].map((tech,key) => (<span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.6)] transition'> {tech}</span>))}
              
            </div>
            <div className='flex justify-between items-center'>
              <a href='https://github.com/apeksha-rgb/react_practice/tree/main/05passwordGenerator' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project </a>
            </div>
          </div>
          
          </div>


        </div>
    </section>
  )
}

export default Project