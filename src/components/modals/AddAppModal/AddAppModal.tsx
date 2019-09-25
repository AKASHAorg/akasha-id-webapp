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
  const [shareAddress, changeShareAddress] = useState(false)
  const [shareEmail, changeShareEmail] = useState(false)
  const [sharePhoto, changeSharePhoto] = useState(false)
  const [sharePicture, changeSharePicture] = useState(false)
  const [shareJobTitle, changeShareJobTitle] = useState(false)
  const [shareGivenName, changeShareGivenName] = useState(false)
  const [shareFamilyName, changeShareFamilyName] = useState(false)
  const [shareBirthDate, changeShareBirthDate] = useState(false)
  const [shareTelephone, changeShareTelephone] = useState(false)
  const [shareUrl, changeShareUrl] = useState(false)

  return (
    <Modal
      isOpen={true}
      headerContent={`The following application requests access to your profile`}
      onOk={() =>
        onOk({
          shareAddress,
          shareEmail,
          sharePhoto,
          sharePicture,
          shareJobTitle,
          shareGivenName,
          shareFamilyName,
          shareBirthDate,
          shareTelephone,
          shareUrl,
        })
      }
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
            <StyledCheckboxRow>
              <Checkbox
                label="Address"
                checked={shareAddress}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeShareAddress(e.target.checked)
                }
              />
            </StyledCheckboxRow>

            <StyledCheckboxRow>
              <Checkbox
                label="E-mail"
                checked={shareEmail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeShareEmail(e.target.checked)
                }
              />
            </StyledCheckboxRow>

            <StyledCheckboxRow>
              <Checkbox
                label="Photo"
                checked={sharePhoto}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeSharePhoto(e.target.checked)
                }
              />
            </StyledCheckboxRow>

            <StyledCheckboxRow>
              <Checkbox
                label="Picture"
                checked={sharePicture}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeSharePicture(e.target.checked)
                }
              />
            </StyledCheckboxRow>

            <StyledCheckboxRow>
              <Checkbox
                label="Job title"
                checked={shareJobTitle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeShareJobTitle(e.target.checked)
                }
              />
            </StyledCheckboxRow>

            <StyledCheckboxRow>
              <Checkbox
                label="Given name"
                checked={shareGivenName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeShareGivenName(e.target.checked)
                }
              />
            </StyledCheckboxRow>

            <StyledCheckboxRow>
              <Checkbox
                label="Family name"
                checked={shareFamilyName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeShareFamilyName(e.target.checked)
                }
              />
            </StyledCheckboxRow>

            <StyledCheckboxRow>
              <Checkbox
                label="Birth date"
                checked={shareBirthDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeShareBirthDate(e.target.checked)
                }
              />
            </StyledCheckboxRow>

            <StyledCheckboxRow>
              <Checkbox
                label="Telephone"
                checked={shareTelephone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeShareTelephone(e.target.checked)
                }
              />
            </StyledCheckboxRow>

            <StyledCheckboxRow>
              <Checkbox
                label="URL"
                checked={shareUrl}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeShareUrl(e.target.checked)
                }
              />
            </StyledCheckboxRow>
          </StyledCheckboxList>

          <p>Required attributes: {attributes.join(', ')}</p>
        </StyledModalColumn>
      </StyledModalBody>
    </Modal>
  )
}

export default AddAppModal
