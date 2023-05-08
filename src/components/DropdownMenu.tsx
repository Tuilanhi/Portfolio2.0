import { Menu, Transition } from '@headlessui/react'
import { IoMenu } from 'react-icons/io5/index.js'
import DropdownMenuItem from './DropdownMenuItem'

export default function DropdownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="slide-item" data-transition-duration="0.6s" data-transition-easing="ease">
        <Menu.Button
          className="inline-flex justify-center rounded-md border border-zinc-400 px-2 py-2 text-sm font-medium shadow-sm hover:bg-sky-blue hover:text-black-gray"
          aria-label="menu"
        >
          <IoMenu className="h-5 w-5" />
        </Menu.Button>
      </div>

        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md border border-zinc-700 bg-accent-gray">
          <div className="py-1 text-sm">
            <DropdownMenuItem href="/blog">
                    Blog
                </DropdownMenuItem>
                <DropdownMenuItem href="/about">
                    About
                </DropdownMenuItem>
                <DropdownMenuItem href="https://drive.google.com/file/d/1kEYJiNMHdcBPOI0kir2n3yFmbb4DBuYo/view?usp=sharing">
                    Resume
                </DropdownMenuItem>
            </div>
        </Menu.Items>
    </Menu>
  )
}