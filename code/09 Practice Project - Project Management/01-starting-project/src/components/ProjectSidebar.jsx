import React from 'react'
import Button from './Button'

function ProjectSidebar({onStartAddProject}) {
  return (
    <>
        <aside className='w-1/3 px-8 py-6 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
            <h2 className='mb-8 uppercase md:text-xl text-stone-200'>Your Projects</h2>
            <ul><Button onClick={onStartAddProject}>+ Add Project</Button></ul>
        </aside>
    </>
  ) 
}

export default ProjectSidebar