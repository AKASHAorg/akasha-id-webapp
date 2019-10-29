import Button from '@akashaproject/design-system/dist/components/Button'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React, { useContext, useEffect, useState } from 'react'

import * as routes from '../../../../../consts/routes'
import { AddAppFormData, AddAppModalStep } from '../../../../../types/apps'
import { Profile as ProfileType, ProfileData } from '../../../../../types/users'
import { AppImage } from '../../../../shared/AppImage'
import { MobileTopBarWithLabelCancelButton } from '../../../../shared/MobileTopBarWithLabelCancelButton'
import { RowTextContainer } from '../../../../shared/RowTextContainer'
import { Profile } from './components/Profile'
import {
  AddProfileLink,
  AppContainer,
  AppDivider,
  AppHeader,
  AppNonce,
  AppWarning,
  MobileBottomContainer,
  ProfilesContainer,
  ProfilesHeader,
  ProfilesList,
  StyledPageContainer,
  TopText,
} from './Styled'

export interface RegisterAppMobileViewProps {
  step: AddAppModalStep
  name: string
  description: string
  icon: string
  url: string
  nonce: number
  attributes: string[]
  profiles: ProfileType[]
  profile: ProfileData
  loadProfile: () => void
  onClose: () => void
  onOk: (formData: AddAppFormData) => void
}

const RegisterAppMobileView: React.FC<RegisterAppMobileViewProps> = ({
  name,
  icon,
  description,
  nonce,
  attributes,
  profiles,
  loadProfile,
  onOk,
}) => {
  const theme = useContext(AkashaThemeContext)

  useEffect(() => {
    loadProfile()
  }, [loadProfile])

  const [selectedProfile, toggleProfile] = useState<null | string>(null)

  const initialAttributesState = Object.fromEntries(attributes.map(attribute => [attribute, false]))
  const [attributesState, changeAttributesState] = useState(initialAttributesState)

  const toggleAttribute = (attribute: string) => {
    changeAttributesState({
      ...attributesState,
      [attribute]: !attributesState[attribute],
    })
  }

  return (
    <StyledPageContainer>
      <MobileTopBarWithLabelCancelButton>New Application</MobileTopBarWithLabelCancelButton>

      <TopText>{name} requested access to your persona information:</TopText>

      <AppContainer>
        <AppHeader>
          <AppImage icon={icon} name={name} />
          <RowTextContainer header={name} subheader={description} />
        </AppHeader>
        <AppDivider />
        <AppWarning>
          Please ensure {name} displays the same security code: <AppNonce>{nonce}</AppNonce>
        </AppWarning>
      </AppContainer>

      <ProfilesContainer>
        <ProfilesHeader>Select persona</ProfilesHeader>
        <ProfilesList>
          {profiles.map(profile => (
            <Profile
              appName={name}
              appAttributes={attributes}
              selected={selectedProfile === profile.id}
              key={profile.id}
              attributesState={attributesState}
              toggleAttribute={toggleAttribute}
              toggleProfile={toggleProfile}
              {...profile}
            />
          ))}
        </ProfilesList>

        <AddProfileLink to={routes.createProfile}>
          <Icon type="plus" color={theme.colors.blue} width="13px" height="13px" />
          New Persona
        </AddProfileLink>
      </ProfilesContainer>

      <MobileBottomContainer>
        <Button fullWidth={true} buttonType="primary" onClick={() => {}}>
          Authorize
        </Button>
      </MobileBottomContainer>
    </StyledPageContainer>
  )
}

export default RegisterAppMobileView
