import { ReactNode } from 'react'
import { Transition } from "@headlessui/react"

interface Props {
  children: ReactNode
}

export const FadeUp = ({ children }: Props) => {
  return (
    <Transition
      appear
      show
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  )
}
