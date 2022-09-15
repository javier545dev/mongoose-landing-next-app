import Image from 'next/image'

export const About = () => {
  return (
    <section id="about" className='min-w-screen min-h-screen bg-base-200 snap-start flex items-center justify-center w-full h-auto'>
      <div className='flex items-center justify-center text-center animate-fade-in-down'>
        <div className='max-w-lg'>
          <h2 className='py-5 text-5xl font-bold text-secondary'>About Us</h2>
          <p className='py-6 text-justify px-6'>
            We are a 100% Salvadoran financial technology company focused on cryptocurrencies, we seek to facilitate these technologies to all people, designing high-quality and easy-to-understand software, we also educate people about what they are and how to manage crypto assets.
          </p>
        </div>
      </div>
    </section>
  )
}


