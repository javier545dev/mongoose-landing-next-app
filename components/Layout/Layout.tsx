import { ReactNode, useState } from 'react'
import { Header } from '../header/Header'
import { Drawer } from '../drawer/Drawer'
import { Footer } from '../footer/Footer'

type Props = {
  children: ReactNode
}
export const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <main data-theme='mytheme'>
      <Header setIsOpen={setIsOpen} />
      {children}
      <Footer />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  )
}
