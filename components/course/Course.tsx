export const Course = () => {
  return (
    <section id="course" className='min-w-screen flex min-h-screen flex-col md:flex-row gap-2 md:gap-10 items-center justify-center bg-base-200 pt-[15vh] w-full h-full relative snap-start'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 animate-fade-in-up px-10 items-center'>
        {/* <div className='flex flex-col justify-center max-w-md pt-10 items-center text-center h-1/2 '>
          <h1 className='text-5xl font-medium text-secondary md:pl-10'>Demo of Course</h1>
        </div> */}
        <div className='flex items-center pb-10'>
          <div>
            <div className='flex max-w-lg w-full bg-base-100 shadow-md rounded-lg overflow-hidden mx-auto'>
              <div className='flex flex-col m-5 '>
                <div className='relative'>
                  <video className='w-screen '>
                    <source
                      className='w-30 h-30'
                      src='https://www.w3schools.com/html/mov_bbb.mp4'
                      type='video/mp4'
                    />
                  </video>
                  <div className='absolute bottom-0 w-full bg-gradient-to-r from-black'>
                    <span className='text-white text-xs uppercase px-2'>red</span>
                  </div>
                </div>
                <div>
                  <div>
                    <div className='relative h-1 bg-gray-200'>
                      <div className='absolute h-full w-1/2 bg-secondary flex items-center justify-end'>
                        <div className='rounded-full w-3 h-3 bg-white shadow'>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-between text-xs font-medium text-gray-500 py-1'>
                    <div>1:50</div>
                    <div className='flex space-x-3 pt-5'>
                      <button className='focus:outline-none'>
                        <svg
                          className='w-4 h-4'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='#ff8200'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <polygon points='19 20 9 12 19 4 19 20'></polygon>
                          <line x1='5' y1='19' x2='5' y2='5'></line>
                        </svg>
                      </button>
                      <button className='rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-secondary focus:outline-none'>
                        <svg
                          className='w-5 h-5'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='#ff8200'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <polygon points='5 3 19 12 5 21 5 3'></polygon>
                        </svg>
                      </button>
                      <button className='focus:outline-none'>
                        <svg
                          className='w-4 h-4'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='#ff8200'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <polygon points='5 4 15 12 5 20 5 4'></polygon>
                          <line x1='19' y1='5' x2='19' y2='19'></line>
                        </svg>
                      </button>
                    </div>
                    <div>3:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
