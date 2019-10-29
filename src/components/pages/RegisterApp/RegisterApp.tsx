import React, { useEffect } from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'

import { appCreated } from '../../../consts/routes'
import { AddAppModalStep } from '../../../types/apps'
import { AddAppModal } from '../../modals/AddAppModal'
import { RegisterAppMobileView } from './components/RegisterAppMobileView'

export interface RegisterAppMatch {
  apprequestlink: string
}

export interface RegisterAppProps extends RouteComponentProps<RegisterAppMatch> {
  addAppModalStep: AddAppModalStep
  showAddAppModal: () => void
  finishSendClaim: () => void
  fetchProfiles: () => void
}

const RegisterApp: React.FC<RegisterAppProps> = ({
  addAppModalStep,
  showAddAppModal,
  finishSendClaim,
  fetchProfiles,
  match,
}) => {
  // eslint-disable react-hooks/exhaustive-deps
  useEffect(() => {
    showAddAppModal()

    return finishSendClaim
  }, [match.params.apprequestlink, showAddAppModal, finishSendClaim])
  // eslint-enable react-hooks/exhaustive-deps

  useEffect(() => {
    fetchProfiles()
  }, [fetchProfiles])

  return (
    <>
      {addAppModalStep === 'finish' && <Redirect to={appCreated} />}
      <AddAppModal />
      <RegisterAppMobileView />
    </>
  )
}

export default RegisterApp
