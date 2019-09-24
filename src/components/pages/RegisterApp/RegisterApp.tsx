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
  onMount: () => void
  onUnmount: () => void
}

const RegisterApp: React.FC<RegisterAppProps> = ({
  addAppModalStep,
  onMount,
  onUnmount,
  match,
}) => {
  // eslint-disable react-hooks/exhaustive-deps
  useEffect(() => {
    onMount()

    return onUnmount
  }, [match.params.apprequestlink])
  // eslint-enable react-hooks/exhaustive-deps

  return (
    <>
      {addAppModalStep === 'finish' && <Redirect to={apps} />}
      <AddAppModal />
    </>
  )
}

export default RegisterApp
