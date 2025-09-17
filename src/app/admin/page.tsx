import Link from 'next/link'
import React from 'react'

function AdminPage() {
  return (
    <div className='container mx-auto flex flex-col justify-center gap-3 items-center mt-30 '>
       <Link
          className=" bg-red-800 text-white p-2 rounded-lg hover:bg-red-500 text-lg"
          href={"/addproject"}
        >
          Add Project
        </Link>
       <Link
          className=" bg-red-800 text-white p-2 rounded-lg hover:bg-red-500 text-lg"
          href={"/allproject"}
        >
          All Projects
        </Link>
        
    </div>
  )
}

export default AdminPage
