import styled from 'styled-components'
import ListItem_ from '@material-ui/core/ListItem'
import ListItemAvatar_ from '@material-ui/core/ListItemAvatar'
import ListItemText_ from '@material-ui/core/ListItemText'

import theme from 'theme'

export const ListItem = styled(ListItem_)`
  align-items: flex-start;
  padding-left: ${theme.spacing(0)}px;
  padding-right: ${theme.spacing(0)}px;
`

export const ListItemAvatar = styled(ListItemAvatar_)`
  margin-right: ${theme.spacing(2)}px;
  width: 100px;
`

export const ListItemText = styled(ListItemText_)`
  margin-top: ${theme.spacing(0)}px;
`
