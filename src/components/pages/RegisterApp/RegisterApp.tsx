import React, { useEffect } from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'

import { apps } from '../../../consts/routes'
import { AddAppModalStep } from '../../../types/apps'
import { AddAppModal } from '../../modals/AddAppModal'

export interface RegisterAppMatch {
  apprequestlink: string
}

export interface RegisterAppProps extends RouteComponentProps<RegisterAppMatch> {
  addAppModalStep: AddAppModalStep
  showAddAppModal: () => void
  finishSendClaim: () => void
}

const RegisterApp: React.FC<RegisterAppProps> = ({
  addAppModalStep,
  showAddAppModal,
  finishSendClaim,
  match,
}) => {
  // eslint-disable react-hooks/exhaustive-deps
  useEffect(() => {
    showAddAppModal()

    return finishSendClaim
  }, [match.params.apprequestlink, showAddAppModal, finishSendClaim])
  // eslint-enable react-hooks/exhaustive-deps

  return (
    <>
      {addAppModalStep === 'finish' && <Redirect to={apps} />}
      <AddAppModal />
    </>
  )
}

export default RegisterApp
