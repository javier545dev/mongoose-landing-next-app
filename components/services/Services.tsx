import { CardServices } from '../atoms/CardServices'

export const Services = () => {
  return (
    <section id='services' className='min-w-screen min-h-screen bg-base-200 pt-[15vh] snap-start flex items-center justify-center w-full h-auto'>
      <div className='items-center flex justify-center flex-col md:justify-around gap-10'>
        <h2 className='py-5 text-5xl font-medium text-secondary'>Our Services</h2>
        <div className='items-center flex justify-center flex-col md:flex-row md:justify-around gap-10 md:gap-5 lg:gap-10 lg:px-10 pb-10 animate-fade-in-down'>

          <CardServices>
            <div className='flex items-center h-1/4'>
              <h2 className='text-2xl text-center font-medium text-primary py-2'>
                Consultancies
              </h2>
            </div>
            <div className='flex justify-center py-5 text-lg h-3/4 pb-10'>
              <p>We advise companies, we evaluate their business model to advise them on adopting one tool or another. We accompany our clients at every stage of the adoption process.</p>
            </div>
          </CardServices>

          <CardServices>
            <div className='flex items-center h-1/4'>
              <h2 className='text-2xl text-center font-medium text-primary py-2'>
                Crypto Asset Management
              </h2>
            </div>

            <div className='flex justify-center py-5 text-lg h-3/4'>
              <p>We provide education on the management of crypto assets and additionally provide software to simplify their management.</p>
            </div>
          </CardServices>

          <CardServices>
            <div className='flex items-center h-1/4'>
              <h2 className='text-2xl text-center font-medium text-primary py-2'>
                DeFi
              </h2>
            </div>
            <div className='flex justify-center py-5 text-lg h-3/4'>
              <p>We have unique DeFi platforms that adapt to the needs of each business and company.</p>
            </div>
          </CardServices>
        </div>
      </div>
    </section>
  )
}
