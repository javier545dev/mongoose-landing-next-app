const User = () => {
  return (
    <div>
      <div>
        <div className='mb-6 mt-[50px] grid items-end gap-6 md:grid-cols-3'>
          <div className='relative'>
            <input
              type='text'
              id='default_outlined'
              className='peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-base-100 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
              placeholder=' '
            />
            <label
              htmlFor='default_outlined'
              className='absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-base-100 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              Default outlined
            </label>
          </div>
          <div className='relative z-0'>
            <input
              type='text'
              id='default_standard'
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
              placeholder=' '
            />
            <label
              htmlFor='default_standard'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              Default standard
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
