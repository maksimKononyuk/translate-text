import * as React from 'react'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import Stack from '@material-ui/core/Stack'

const GoButton = ({ setIsInputComponent }) => {
  const clickHandler = () => {
    setIsInputComponent(false)
  }
  return (
    <Stack direction='row' spacing={1}>
      <Button variant='contained' endIcon={<SendIcon />} onClick={clickHandler}>
        Поехали
      </Button>
    </Stack>
  )
}

export default GoButton
