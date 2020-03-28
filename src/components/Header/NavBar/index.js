import React from 'react'
import Typography from '@material-ui/core/Typography'

import Link from 'components/Link'
import * as S from './styles'

const navBarItems = [
  { slug: 'women', name: 'Women' },
  { slug: 'men', name: 'Men' },
  { slug: 'kids', name: 'Kids' },
  { slug: 'babies', name: 'Babies' },
]

const NavBar = () => (
  <S.NavBar>
    {navBarItems.map((navBarItem) => (
      <S.NavBarItem key={navBarItem.slug}>
        <Link to={`/${navBarItem.slug}`}>
          <Typography component="h2" variant="button">
            {navBarItem.name}
          </Typography>
        </Link>
      </S.NavBarItem>
    ))}
  </S.NavBar>
)

export default NavBar
