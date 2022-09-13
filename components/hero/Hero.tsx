export const Hero = () => {
  return (
    <section className='min-w-screen hero min-h-screen bg-base-200 pt-[15vh] snap-start'>
      <div className='hero-content text-center px-10 animate-fade-in-up'>
        <div className='max-w-lg'>
          <h1 className='text-left text-5xl font-bold text-secondary'>Hello</h1>
          <h2 className='text-left text-5xl font-bold text-secondary'>Crypto-Lover</h2>
          <h3 className='py-5 text-2xl text-left font-normal text-primary my-4'>Simplifying access to cryptocurrencies and financial inclusion...</h3>
          <div className='flex flex-row items-center my-4'>
            <button
              className='rounded bg-secondary px-14 py-2 text-base-100'
            >
              Know Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
