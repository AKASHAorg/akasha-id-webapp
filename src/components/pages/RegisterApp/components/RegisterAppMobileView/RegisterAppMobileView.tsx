import Button from '@akashaproject/design-system/dist/components/Button'
import Checkbox from '@akashaproject/design-system/dist/components/Checkbox'
import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import { RadioButton } from 'grommet'
import React, { useContext, useEffect, useState } from 'react'

import attributeNamesMap from '../../../../../consts/attribute-names-map'
import * as routes from '../../../../../consts/routes'
import { AddAppFormData, AddAppModalStep } from '../../../../../types/apps'
import { ProfileData } from '../../../../../types/users'
import { AppImage } from '../../../../shared/AppImage'
import { MobileTopBarWithLabelCancelButton } from '../../../../shared/MobileTopBarWithLabelCancelButton'
import { RowTextContainer } from '../../../../shared/RowTextContainer'
import {
  AddProfileLink,
  AppContainer,
  AppDivider,
  AppHeader,
  AppNonce,
  AppWarning,
  MobileBottomContainer,
  ProfileAttributesHeader,
  ProfileAttributesLabel,
  ProfileAttributesList,
  ProfileAttributesRow,
  ProfileAttributesText,
  ProfileDivider,
  ProfileName,
  ProfileNameContainer,
  ProfileRow,
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
  profile,
  loadProfile,
  onOk,
}) => {
  const theme = useContext(AkashaThemeContext)

  useEffect(() => {
    loadProfile()
  }, [loadProfile])

  const initialState = Object.fromEntries(attributes.map(attribute => [attribute, false]))
  const [state, changeState] = useState(initialState)

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
          <ProfileRow selected={false}>
            <ProfileNameContainer>
              <ProfileName>Family</ProfileName>
              <RadioButton name="profile" value="Family" />
            </ProfileNameContainer>
          </ProfileRow>

          <ProfileRow selected={true}>
            <ProfileNameContainer>
              <ProfileName>Professional</ProfileName>
              <RadioButton name="profile" value="Professional" checked={true} />
            </ProfileNameContainer>

            <ProfileDivider />

            <ProfileAttributesHeader>
              {name} requests access to the following attributes:
            </ProfileAttributesHeader>

            <ProfileAttributesList>
              {attributes.map(attribute => (
                <ProfileAttributesRow key={attribute}>
                  <div>
                    <ProfileAttributesLabel>
                      {attributeNamesMap.get(attribute)}
                    </ProfileAttributesLabel>
                    <ProfileAttributesText>{(profile as any)[attribute]}</ProfileAttributesText>
                  </div>

                  <Checkbox
                    name={attribute}
                    checked={state[attribute]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      changeState({ ...state, [attribute]: e.target.checked })
                    }
                  />
                </ProfileAttributesRow>
              ))}
            </ProfileAttributesList>
          </ProfileRow>

          <ProfileRow selected={false}>
            <ProfileNameContainer>
              <ProfileName>Social</ProfileName>
              <RadioButton name="profile" value="Social" />
            </ProfileNameContainer>
          </ProfileRow>
        </ProfilesList>

        <AddProfileLink to={routes.createProfile}>
          <Icon type="plus" color={theme.colors.blue} width="13px" height="13px" />
          New Persona
        </AddProfileLink>
      </ProfilesContainer>

      <MobileBottomContainer>
        <Button fullWidth={true} buttonType="primary" onClick={() => onOk(state as AddAppFormData)}>
          Authorize
        </Button>
      </MobileBottomContainer>
    </StyledPageContainer>
  )
}

export default RegisterAppMobileView
