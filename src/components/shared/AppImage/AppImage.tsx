import React from 'react'

import { ImageContainer } from './Styled'

export interface AppImageProps {
  icon: string
  name: string
}

const AppImage: React.FC<AppImageProps> = ({ icon, name, ...props }) => {
  return (
    <ImageContainer {...props}>
      <img src={icon} alt={name} />
    </ImageContainer>
  )
}

export default AppImage
