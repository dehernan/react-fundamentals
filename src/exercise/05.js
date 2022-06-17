// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({size, className = '', style, children}) {
  const VARIANTS = {
    small: 'box--small',
    medium: 'box--medium',
    large: 'box--large',
  }
  return (
    <div
      className={`box ${className} ${VARIANTS[size]}`}
      style={{fontStyle: 'italic', ...style}}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
