import React from 'react'

function About() {
  const frontendSkills = ["React" ,"TailwindCSS" , "Javascript" , "API Integration"]
  const designTool = ["Canva" , "Figma",]
  return (
    <section id="about" className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>About Me</h2>
        
        <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
        
          <p className='text-gray-300 mb-6'>Developer driven by design, code, and problem-solving — building functional, fast, and beautiful web apps from scratch.Currently exploring advanced React patterns, API integration, and backend tools like Appwrite to build full-stack projects.</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Frontend</h3>
              <div className='flex flex-wrap gap-2'>
                {frontendSkills.map((tech,key)=> (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'> {tech}</span>
                ))}
              </div>
            </div>

            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Design Tools</h3>
              <div className='flex flex-wrap gap-2'>
                {designTool.map((tech,key)=> (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'> {tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all'>
                <h3 className=' text-xl font-bold mb-4'>Education</h3>
                <ul className='list list-disc text-gray-300 space-y-2'>
                  <li><strong> Bachelor's in Computer Application </strong>- DR. Bhim Rao Ambedkar University Agra, UP (2019-2022) </li>
                  
                </ul>

            </div>
            <div className='p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all'>
                <h3 className=' text-xl font-bold mb-4'>Work Experience</h3>
                <div className='space-y-4 text-gray-300'>
                  <h4 className='font-semibold'>Transition to Front End Development</h4>
                  <p>Actively engaged in self-study, online courses, and practical projects to acquire in-demand technical skills in javascript and relevant frameworks.</p>
                </div>
            </div>
        </div>


        </div>
        </section>
  )
}

export default About