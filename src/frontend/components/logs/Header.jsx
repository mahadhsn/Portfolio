const Header = ({ Title, Mins, Date }) => {
  return (
    <div className='mb-6'>
        <h1 className='text-3xl font-bold text-center items-center justify-center align-middle mb-1'>
            {Title}
        </h1>
        
        <hr className='border-textlight dark:textdark mb-1'></hr>

        <div className='flex items-center justify-center font-semibold text-gray-500'>
            <p className=''> ~{Mins} min read   |   {Date}</p> 
        </div>
    </div>
  )
}

export default Header
