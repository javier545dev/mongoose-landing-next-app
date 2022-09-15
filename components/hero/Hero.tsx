import Link from 'next/link'
import Image from 'next/image'
export const Hero = () => {
  return (
    <section className="min-w-screen min-h-screen pt-[15vh] relative snap-start bg-base-200 flex items-center justify-center w-full h-full py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div className="flex gap-5 md:gap-10 lg:gap-20 items-center px-10 max-w-7xl relative">
        {/* <div className="absolute sm:hidden z-10 w-[75%] max-h-[450px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-hero">
          <Image alt="hero" src="https://wickedblocks.dev/assets/images/placeholders/squareCard.png" layout="responsive" width={300} height={300}
          />
        </div> */}
        <div className="z-20 flex flex-col items-center justify-center md:items-start mt-12 py-10 mb-16 text-center md:text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0 bg-hero md:bg-none bg-no-repeat bg-center bg-cover rounded-lg">
          <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-secondary px-5 md:text-7xl lg:text-5xl">Hello CryptoLover</h1>
          <p className="mb-8 text-base px-5 leading-relaxed text-center md:text-left text-gray-400">Everything related to your cryptocurrency education and how to invest safe and confident.</p>
          <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
            <div className="mt-3 rounded-lg sm:mt-0 px-5">
              <button className="items-center block px-10 py-2 text-base font-medium text-center text-base-200 transition duration-500 ease-in-out transform bg-secondary rounded-lg hover:bg-blue-700">
                <Link href={'#about'}>
                  Get Info
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-full lg:max-w-lg lg:w-1/2 rounded-xl">
          <div className="relative flex items-center justify-center w-full max-w-lg">
            <div className="relative w-full h-full">
              <Image alt="hero" src="https://wickedblocks.dev/assets/images/placeholders/squareCard.png" layout="responsive" width={300} height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
