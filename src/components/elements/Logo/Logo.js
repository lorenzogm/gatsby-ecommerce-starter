import React from 'react'
import Typography from '@material-ui/core/Typography'

import Link from 'components/foundations/Link/Link'

export default function Logo() {
  return (
    <Link to="/">
      <Typography component="div" variant="h5">
        Dindim
      </Typography>
    </Link>
  )
}
