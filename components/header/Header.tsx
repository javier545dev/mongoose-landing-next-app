import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { BiMenuAltRight } from 'react-icons/bi'

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Header = ({ setIsOpen }: Props) => {
  return (
    <header className='fixed z-40 w-screen bg-base-100 p-5 md:p-7'>
      <div className='flex justify-between pr-3 md:px-10'>
        <h1 className='px-2 py-1 text-center text-xl font-medium text-secondary transition delay-150 ease-in-out hover:rounded hover:bg-secondary hover:text-base-100'>
          <Link href={'/'}>
            <a onClick={() => setIsOpen(false)}>Mongoose</a>
          </Link>
        </h1>
        <div className='hidden items-center justify-between gap-10 md:flex'>
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
          {/* <ul className='rounded bg-secondary px-4 py-1 text-base-100'>
            <a onClick={() => setIsOpen(false)}>Logout</a>
          </ul> */}
        </div>
        <button
          className='rounded bg-secondary px-2 py-1 text-base-100 md:hidden'
          onClick={() => setIsOpen(true)}
        >
          <BiMenuAltRight className='text-2xl text-base-100 font-medium' />
        </button>
      </div>
    </header>
  )
}
