import Image from 'next/image'
import Bg from '../../public/logo.png'

export const About = () => {
  return (
    <section id="about" className='min-w-screen min-h-screen bg-base-200 snap-start flex items-center justify-center w-full h-auto'>
      <div className='flex md:flex-row items-center justify-center text-center gap-10 animate-fade-in-down w-full mx-5 md:mx-20'>
        <div className='max-w-lg md:basis-1/2 md:w-1/2 px-5'>
          <h2 className='py-5 text-5xl font-bold text-secondary'>About Us</h2>
          <p className='py-6 text-justify px-2'>
            We are a 100% Salvadoran financial technology company focused on cryptocurrencies, we seek to facilitate these technologies to all people, designing high-quality and easy-to-understand software, we also educate people about what they are and how to manage crypto assets.
          </p>
        </div>
        <div className="hidden md:flex items-center justify-center w-full lg:max-w-lg lg:w-1/2 rounded-xl md:basis-1/2">
          <div className="relative flex items-center justify-center w-full max-w-md animate-flip-horizontal">
            <div className="relative w-full h-full">
              <Image alt="hero" src={Bg} layout="responsive" priority width={300} height={300} className='rounded-xl drop-shadow-2xl'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


