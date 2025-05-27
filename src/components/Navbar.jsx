import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' bg-pink-500 text-white p-4 flex justify-between w-full gap-6  '>
        
              <Link to='/' className='text-3xl font-bold underline'>List Of Students</Link>
        <Link to='/favourite' className='text-3xl font-bold underline'>Favourite Students</Link>

        
      
           
           
    </nav>

    
  )
}

export default Navbar