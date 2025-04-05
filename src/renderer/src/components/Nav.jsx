import React from 'react'
import { Navbar, Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <Navbar fullWidth={true} className="flex gap-3 items-center mb-5 shadow-gray-500 shadow-lg">
      <Menu>
        <MenuHandler>
          <Link to={'/'} className="link">
            Accueil
          </Link>
        </MenuHandler>
      </Menu>
      <Menu>
        <MenuHandler>
          <span className="link">Clients</span>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <Link className='link' to={'/add-client'}>Nouveau client</Link>
          </MenuItem>
          <MenuItem>
            <Link className="link" to={'/listClient'}>
              Liste des clients
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuHandler>
          <Link to={"/about"} className="link">A propos</Link>
        </MenuHandler>
      </Menu>
    </Navbar>
  )
}
