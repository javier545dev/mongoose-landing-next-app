import { CardServices } from '../atoms/CardServices'

export const Services = () => {
  return (
    <div className='min-w-screen hero min-h-screen bg-base-200 pt-[20vh] lg:pt-[5vh] px-5'>
      <div className='items-center flex justify-center flex-col md:justify-around gap-10'>
        <h2 className='py-5 text-5xl font-medium text-secondary'>About us?</h2>
        <div className='items-center flex justify-center flex-col md:flex-row md:justify-around gap-10 md:gap-5 lg:gap-10 lg:px-10 pb-10'>
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
    </div>
  )
}
