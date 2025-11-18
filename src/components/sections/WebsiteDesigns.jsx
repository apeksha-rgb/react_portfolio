import React from 'react'

const WebsiteDesigns = () => {
  return (
    
    <section id='project' className='min-h-screen flex items-center justify-center py-20'
    >
      <div className='max-w-5xl mx-auto px-4'>

      
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500  to-cyan-400 bg-clip-text text-transparent text-center'>
          Website Designs 
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2x_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>Pest Control Website Design</h3>
            <p className='text-gray-400 mb-4'>
                A modern Pest Control Website design created in figma, focused on clean layout,easy navigation,and  trust-building visuals.
                Designed to improve user experience and service booking flow.
                </p>
            <div className='flex  flex-wrap gap-2'>
              {["Figma", "Web design","Color Theory","UI/UX Design"].map((tech,key) => (<span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'> {tech}</span>))}
              
            </div>
        
            <div className='flex justify-between items-center'>
              <a href='https://www.figma.com/proto/rtebCk5ZCrVuu2DK66q85K/PCC---Pest-Control---Consultants?node-id=1-2&t=6McRe9RFa93KZoDr-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project </a>
            </div>

            
          </div>

          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2x_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>KRYPTO Website Design</h3>
            <p className='text-gray-400 mb-4'>
                A Cryptocurrency-themed web design created in Figma, featuring vibrant gradients, clean vector illustration
                ,modern UI components for a futuristic look.
        </p>
            <div className='flex  flex-wrap gap-2'>
              {["Gradients & Color Theory","Vector Graphics","Figma","Gradient-Based Design"].map((tech,key) => (<span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'> {tech}</span>))}
              
            </div>
            <div className='flex justify-between items-center'>
              <a href='https://www.figma.com/proto/MC6gShVDVz78RIqur5BtMj/KRYPTO-Website-Design?node-id=2202-29&t=21kmx5d82C9sGBon-1' className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project </a>
            </div>
          </div>

    
          
          </div>


        </div>
    </section>
  )
}

export default WebsiteDesigns