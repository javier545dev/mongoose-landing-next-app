import { ReactNode } from 'react'
import { Transition } from "@headlessui/react"

interface Props {
  children: ReactNode
}

export const FadeUp = ({ children }: Props) => {
  return (
    <Transition
      as='div'
      appear={true}
      show={true}
      enter="transform transition ease-in-out duration-1000"
      enterFrom="opacity-0 translate-y-24"
      enterTo="opacity-100 transition-y-0"
      leave="transform transition ease-in-out duration-1000"
      leaveFrom="opacity-100 transition-y-0"
      leaveTo="opacity-0 translate-y-24"
    >
      {children}
    </Transition>
  )
}
