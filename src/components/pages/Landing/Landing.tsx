import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext } from 'react'

export interface LandingProps {
  onSignUp: () => void
}

const Landing: React.FC<LandingProps> = ({ onSignUp }: LandingProps) => {
  const theme = useContext(AkashaThemeContext)

  return (
    <>
      <h1>AKASHA.ID</h1>
      <Button buttonType="primary" onClick={onSignUp}>
        <Icon
          type="plus"
          width={theme.spacing.fontSize}
          height={theme.spacing.fontSize}
          color={theme.colors.white}
        />
        Sign up
      </Button>
    </>
  )
}

export default Landing
