import * as React from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import SpanComponent from '../SpanComponent/SpanComponent'

const TextOutputComponent = ({ words }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Card sx={{ height: '80vh', p: 2, overflow: 'auto' }} variant='outlined'>
        {words.map((word, i) => {
          if (word === '%Enter%') {
            return <br key={i} />
          }
          return <SpanComponent text={word + ' '} key={i} />
        })}
      </Card>
    </Box>
  )
}

export default TextOutputComponent
