import Link from 'next/link'
import Image from 'next/image'
import Bg from '../../public/logo-mongoose.jpg'
export const Hero = () => {
  return (
    <section id='hero' className="min-w-screen min-h-screen relative snap-start bg-base-200 flex items-center justify-center w-full h-full pt-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div className="flex gap-5 md:gap-10 lg:gap-20 items-center px-5 max-w-7xl relative animate-fade-in-down">
        <div className="flex flex-col items-center justify-between md:items-start mt-5 pt-5 text-center md:text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 bg-hero2 md:bg-none bg-no-repeat bg-center bg-cover rounded-lg basis-full md:basis-1/2">
          <h1 className="basis-1/4 mb-2 md:pl-5 text-4xl font-bold leading-none tracking-tighter text-secondary px-2 md:text-5xl">
            Hello
          </h1>
          <span className="basis-1/2 text-4xl font-bold leading-none tracking-tighter text-orange-700 px-5 md:text-5xl">
            Mongooser
          </span>
          <p className="mt-28 pt-56 md:mt-0 md:pt-10 lg:pt-14 text-base px-5 basis-1/2 leading-relaxed text-center md:text-left text-gray-500 drop-shadow-lg md:text-gray-400">Everything related to your cryptocurrency education and how to invest safe and confident.</p>
          <div className="mt-5 lg:mt-6 max-w-7xl sm:flex">
            <div className="mt-3 rounded-lg sm:mt-0 px-5 pb-5">
              <button className="items-center block px-16 py-2 text-base font-medium text-center text-base-200 transition duration-500 ease-in-out transform bg-secondary rounded-lg hover:bg-orange-700">
                <Link href={'#about'}>
                  Get Info
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-full lg:max-w-lg lg:w-1/2 rounded-full md:basis-1/2">
          <div className="relative flex items-center justify-center w-full max-w-lg animate-flip-horizontal rounded-full">
            <div className="relative w-full h-full">
              <Image alt="hero" src={Bg} layout="responsive" priority width={300} height={300} className='rounded-xl drop-shadow-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
