import React from 'react'
import Box from '@mui/material/Box';


function createData(id, name, color) {
    return { id, name, color};
  }
  



 


export default function SecondComponetn(props) {
    
  return (
    <div>
        {props.passProduct.map((product)=>(
        <Box component="section" sx={{ p: 1, border: '2px dotted blue' }}>{[product.product_id, "   ", product.name, "  ", product.color]} </Box>
        // <p>{product.product_id}</p>

      ))}
    </div>
  )
}
