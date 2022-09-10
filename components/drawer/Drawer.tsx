import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
// import { Card } from '../skeleton/card/Card'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Drawer = ({ isOpen, setIsOpen }: Props) => {
  return (
    <main
      className={
        ' fixed inset-0 z-50 transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out ' +
        (isOpen
          ? ' translate-x-0 opacity-100 transition-opacity duration-500  '
          : ' translate-x-full opacity-0 transition-all delay-500  ')
      }
    >
      <section
        className={
          ' delay-400 absolute right-0 h-full w-screen max-w-lg transform bg-base-200 shadow-xl transition-all duration-500 ease-in-out  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <article className='relative flex h-full w-screen max-w-lg flex-col space-y-6 overflow-y-scroll pb-10'>
          <header className='mx-auto flex p-8 text-lg font-bold'>
            <h2>Mongoose</h2>
          </header>
          <div className='flex h-screen flex-col items-center justify-center gap-7'>
            <ul className='transition delay-150 ease-in-out hover:border-b-2 hover:border-secondary'>
              <Link href={'/'}>
                <a onClick={() => setIsOpen(false)}>Home</a>
              </Link>
            </ul>
            <ul className='transition delay-150 ease-in-out hover:border-b-2 hover:border-secondary'>
              <Link href={'/courses'}>
                <a onClick={() => setIsOpen(false)}>Courses</a>
              </Link>
            </ul>
            <ul className='transition delay-150 ease-in-out hover:border-b-2 hover:border-secondary'>
              <Link href={'/services'}>
                <a onClick={() => setIsOpen(false)}>Services</a>
              </Link>
            </ul>
            <ul className='transition delay-150 ease-in-out hover:border-b-2 hover:border-secondary'>
              <Link href={'/about'}>
                <a onClick={() => setIsOpen(false)}>About</a>
              </Link>
            </ul>
            <ul className='rounded bg-secondary px-4 py-1 text-base-100 transition-all'>
              <a onClick={() => setIsOpen(false)}>Logout</a>
            </ul>
            {/* <Card /> */}
          </div>
          <div className='flex items-center justify-center'>
            <h2 className='text-xs text-primary'>Copyright Mongoose ©</h2>
          </div>
        </article>
      </section>
      <section
        className=' h-full w-screen cursor-pointer '
        onClick={() => {
          setIsOpen(false)
        }}
      ></section>
    </main>
  )
}
