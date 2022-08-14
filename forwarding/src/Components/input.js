import { Input } from '@mui/material'
import React from 'react'

const MyInput = React.forwardRef((props,refs) => {
        return (
            <div>
                <input type="text" ref={refs}/>
          </div>
        )
    }
) 

export default MyInput