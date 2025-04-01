import React from 'react'
import { Navbar, Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <Navbar className="flex gap-3 items-center">
      <Menu>
        <MenuHandler>
          <span className='text-black cursor-pointer'>Clients</span>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <Link to={'/'}>Nouveau client</Link>
          </MenuItem>
          <MenuItem placeholder={"Test"}>
            <Link className='text-blue-500' to={'/'}>Liste des clients</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuHandler>
          <span className="text-black cursor-pointer">A propos</span>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <Link to={'/about'}>A Propos</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Navbar>
  )
}
