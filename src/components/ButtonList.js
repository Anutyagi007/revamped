import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list=["All","Sports","Dota 2","PUBG","React","Interview","JavaScript","Redux","Fashion","Entertainment","Music","Mixes"]
  return (
    <div className='flex overflow-x-auto'>
        {
            list.map((item,index)=>{
                return(
                    <Button name={item} key={index}/>
                )
            })
        }
    </div>
  )
}

export default ButtonList