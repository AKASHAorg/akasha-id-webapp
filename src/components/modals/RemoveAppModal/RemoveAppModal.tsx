import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'
import styled from 'styled-components'

import { App, Claim } from '../../../types/apps'

export interface RemoveAppModalProps {
  isOpen: boolean
  app?: App
  claim?: Claim
  onClose: () => void
  onOk: () => void
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

const RemoveAppModal: React.FC<RemoveAppModalProps> = ({ isOpen, app, claim, onClose, onOk }) => {
  return (
    <Modal
      isOpen={isOpen}
      headerContent={`Are you sure want to remove the following application?`}
      onOk={onOk}
      onClose={onClose}
      closeTimeoutMS={0}
      cancelButtonContent="Cancel"
      ariaHideApp={false}
      okButtonContent="Remove"
      hideCancelButton={false}
      hideOkButton={false}
    >
      {app && (
        <StyledModalBody>
          <StyledModalColumn>
            <p>
              <img src={app.icon} alt={app.name} />
            </p>
            <h3>{app.name}</h3>
            <p>
              <a href={app.url}>{app.url}</a>
            </p>
            <p>{app.description}</p>
          </StyledModalColumn>
          <StyledModalColumn>
            <p>Select profile attributes to share with AKASHA.world</p>
            {claim && (
              <StyledCheckboxList>
                {claim.addressLocality && (
                  <StyledCheckboxRow>Address locality: {claim.addressLocality}</StyledCheckboxRow>
                )}
                {claim.addressRegion && (
                  <StyledCheckboxRow>Address region: {claim.addressRegion}</StyledCheckboxRow>
                )}
                {claim.postalCode && (
                  <StyledCheckboxRow>Postal code: {claim.postalCode}</StyledCheckboxRow>
                )}
                {claim.streetAddress && (
                  <StyledCheckboxRow>Street address: {claim.streetAddress}</StyledCheckboxRow>
                )}
                {claim.email && <StyledCheckboxRow>E-mail: {claim.email}</StyledCheckboxRow>}
                {claim.photo && <StyledCheckboxRow>Photo: {claim.photo}</StyledCheckboxRow>}
                {claim.image && <StyledCheckboxRow>Image: {claim.image}</StyledCheckboxRow>}
                {claim.jobTitle && (
                  <StyledCheckboxRow>Job title: {claim.jobTitle}</StyledCheckboxRow>
                )}
                {claim.givenName && (
                  <StyledCheckboxRow>Given name: {claim.givenName}</StyledCheckboxRow>
                )}
                {claim.familyName && (
                  <StyledCheckboxRow>Family name: {claim.familyName}</StyledCheckboxRow>
                )}
                {claim.birthDate && (
                  <StyledCheckboxRow>Birth date: {claim.birthDate}</StyledCheckboxRow>
                )}
                {claim.telephone && (
                  <StyledCheckboxRow>Telephone: {claim.telephone}</StyledCheckboxRow>
                )}
                {claim.url && <StyledCheckboxRow>URL: {claim.url}</StyledCheckboxRow>}
              </StyledCheckboxList>
            )}
          </StyledModalColumn>
        </StyledModalBody>
      )}
    </Modal>
  )
}

export default RemoveAppModal
