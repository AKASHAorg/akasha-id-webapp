import Button from '@akashaproject/design-system/dist/components/Button'
import React from 'react'
import { Field, InjectedFormProps } from 'redux-form'

import { ProfileData } from '../../../../../types/users'
import { Input, Textarea } from '../../../../shared/WithLabel'
import { ImageField } from './components/ImageField'
import {
  AboutContainer,
  AboutFootnote,
  ButtonContainer,
  DateContainer,
  DateDivider,
  DeleteContainer,
  DeleteHeader,
  DeleteText,
  DeleteTextContainer,
  Divider,
  ImageContainer,
  NameContainer,
  PhotoContainer,
  PictureContainer,
  StyledButton,
  UserNameHeader,
} from './StyledProfileForm'

export interface ProfileFormProps {
  name: string
  onDeleteProfile: () => void
}

const ProfileForm: React.FC<
  ProfileFormProps & InjectedFormProps<ProfileData, ProfileFormProps, string>
> = ({ name, handleSubmit, onDeleteProfile, reset }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <UserNameHeader>{name}</UserNameHeader>
        <DateContainer>
          Created on 22 July 2019
          <DateDivider>&bull;</DateDivider>
          Last update 8 September 2019
        </DateContainer>

        <ImageContainer>
          <Field name="photo" label="Avatar" component={ImageField} container={PhotoContainer} />
          <div />
          <Field
            name="picture"
            label="Cover image"
            component={ImageField}
            container={PictureContainer}
          />
        </ImageContainer>

        <NameContainer>
          <Field
            name="givenName"
            label="Name"
            placeholder="Type your name"
            component={Input}
            validate={() => undefined}
          />
          <div />
          <Field
            name="email"
            label="Email"
            placeholder="email@email.com"
            component={Input}
            validate={() => undefined}
          />
        </NameContainer>

        <AboutContainer>
          <Field
            name="about"
            label="About me"
            component={Textarea}
            validate={() => undefined}
            resize="none"
            maxLength={120}
          />
          <AboutFootnote>The About section could have max. 120 characters.</AboutFootnote>
        </AboutContainer>

        <ButtonContainer>
          <StyledButton ghost={true} buttonType="primary" onClick={reset}>
            Cancel
          </StyledButton>
          <StyledButton buttonType="primary" onClick={handleSubmit}>
            Create ID
          </StyledButton>
        </ButtonContainer>
      </form>

      <Divider />

      <DeleteContainer>
        <DeleteTextContainer>
          <DeleteHeader>Delete Profile</DeleteHeader>
          <DeleteText>Once you delete your profile, there is no going back.</DeleteText>
          <DeleteText>Please be certain.</DeleteText>
        </DeleteTextContainer>
        <Button buttonType="primary" onClick={onDeleteProfile}>
          Delete Profile
        </Button>
      </DeleteContainer>
    </>
  )
}

export default ProfileForm
