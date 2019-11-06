import React from 'react'

import { ImageContainer } from './Styled'

export interface AppImageProps {
  icon: string
  name: string
}

const AppImage: React.FC<AppImageProps> = ({ icon, name, ...props }) => {
  return <ImageContainer {...props} src={icon} alt={name} />
}

export default AppImage
