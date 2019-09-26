import Checkbox from '@akashaproject/design-system/dist/components/Checkbox'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React, { useState } from 'react'
import styled from 'styled-components'

import { AddAppFormData, AddAppModalStep } from '../../../types/apps'

export interface AddAppModalProps {
  step: AddAppModalStep
  name: string
  description: string
  icon: string
  url: string
  nonce: number
  attributes: string[]
  onClose: () => void
  onOk: (formData: AddAppFormData) => void
}

const StyledModalBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const StyledModalColumn = styled.div`
  width: 50%;
  box-sizing: border-box;
`

const StyledCheckboxList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const StyledCheckboxRow = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`

const attributeLabelMap: { [key: string]: string } = {
  address: 'Address',
  email: 'E-mail',
  photo: 'Photo',
  picture: 'Picture',
  jobTitle: 'Job title',
  givenName: 'Given name',
  familyName: 'Family name',
  birthDate: 'Birth date',
  telephone: 'Telephone',
  url: 'URL',
}

const AddAppModal: React.FC<AddAppModalProps> = ({
  step,
  name,
  description,
  icon,
  url,
  nonce,
  attributes,
  onClose,
  onOk,
}) => {
  const initialState = Object.fromEntries(attributes.map(attribute => [attribute, false]))
  const [state, changeState] = useState(initialState)

  return (
    <Modal
      isOpen={true}
      headerContent={`The following application requests access to your profile`}
      onOk={() => onOk(state as AddAppFormData)}
      onClose={onClose}
      closeTimeoutMS={0}
      cancelButtonContent="Cancel"
      ariaHideApp={false}
      okButtonContent="Allow app"
      hideCancelButton={false}
      hideOkButton={step !== 'register-app'}
    >
      <StyledModalBody>
        <StyledModalColumn>
          <p>
            <img src={icon} alt={name} />
          </p>
          <h3>{name}</h3>
          <p>
            <a href={url}>{url}</a>
          </p>
          <p>{description}</p>
          <p>Please make sure AKASHA.world display the same security code:</p>
          <h3>{nonce}</h3>
        </StyledModalColumn>
        <StyledModalColumn>
          <p>Select profile attributes to share with AKASHA.world</p>

          <StyledCheckboxList>
            {attributes.map(attribute => (
              <StyledCheckboxRow key={attribute}>
                <Checkbox
                  label={attributeLabelMap[attribute]}
                  checked={state[attribute]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changeState({ ...state, [attribute]: e.target.checked })
                  }
                />
              </StyledCheckboxRow>
            ))}
          </StyledCheckboxList>
        </StyledModalColumn>
      </StyledModalBody>
    </Modal>
  )
}

export default AddAppModal
