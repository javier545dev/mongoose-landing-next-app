import { ReactNode, useState } from 'react'
import { Header } from '../header/Header'
import { Drawer } from '../drawer/Drawer'
import { Footer } from '../footer/Footer'

interface Props {
  children: ReactNode
}
export const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div data-theme='mytheme' className='overflow-y-scroll w-full h-screen snap-y snap-mandatory'>
      <Header setIsOpen={setIsOpen} />
      {children}
      <Footer />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
