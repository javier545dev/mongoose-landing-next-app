import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const CardServices = ({ children }: Props) => {
  return (
    <>
      <div className='flex basis-1/3 flex-col items-center justify-center self-center rounded-3xl bg-base-100 px-5 py-5 drop-shadow-md w-4/5 md:w-1/3 h-[450px] lg:h-[300px] transform transition duration-500 hover:scale-110 focus:scale-110'>
        {children}
      </div>
    </>
  )
}
