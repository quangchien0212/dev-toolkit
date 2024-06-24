import React from 'react'

type Props = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

const Image = (props: Props) => {
  return (
    <img {...props}/>
  )
}

export default Image
