import Checkbox from '@akashaproject/design-system/dist/components/Checkbox'
import { RadioButton } from 'grommet'
import React from 'react'

import attributeNamesMap from '../../../../../../../consts/attribute-names-map'
import { Profile as ProfileType } from '../../../../../../../types/users'
import {
  ProfileAttributesHeader,
  ProfileAttributesLabel,
  ProfileAttributesList,
  ProfileAttributesRow,
  ProfileAttributesText,
  ProfileDivider,
  ProfileName,
  ProfileNameContainer,
  ProfileRow,
} from './Styled'

export interface ProfileProps extends ProfileType {
  appName: string
  appAttributes: string[]
  attributesState: { [x: string]: boolean }
  selected: boolean
  toggleAttribute: (attribute: string) => void
  toggleProfile: (profileId: string) => void
}

const Profile: React.FC<ProfileProps> = ({
  selected,
  profileName,
  id,
  appName,
  appAttributes,
  attributesState,
  toggleAttribute,
  toggleProfile,
  ...props
}) => {
  return (
    <ProfileRow selected={selected}>
      <ProfileNameContainer>
        <ProfileName>{profileName}</ProfileName>
        <RadioButton
          name="profile"
          value={id}
          checked={selected}
          onChange={() => toggleProfile(id)}
        />
      </ProfileNameContainer>

      {selected && (
        <>
          <ProfileDivider />

          <ProfileAttributesHeader>
            {appName} requests access to the following attributes:
          </ProfileAttributesHeader>

          <ProfileAttributesList>
            {appAttributes.map(attribute => (
              <ProfileAttributesRow key={attribute}>
                <div>
                  <ProfileAttributesLabel>
                    {attributeNamesMap.get(attribute)}
                  </ProfileAttributesLabel>
                  <ProfileAttributesText>{(props as any)[attribute]}</ProfileAttributesText>
                </div>

                <Checkbox
                  name={attribute}
                  checked={attributesState[attribute]}
                  onChange={() => toggleAttribute(attribute)}
                />
              </ProfileAttributesRow>
            ))}
          </ProfileAttributesList>
        </>
      )}
    </ProfileRow>
  )
}

export default Profile
