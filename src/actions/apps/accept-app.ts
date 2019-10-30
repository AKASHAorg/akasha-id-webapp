import { Action } from 'redux'

import { ACCEPT_APP } from '../../consts/actions/apps'
import { AddAppFormData } from '../../types/apps'

export interface AcceptAppAction extends Action<string> {
  personaId: string
  addAppFormData: AddAppFormData
}

const acceptApp = (personaId: string, addAppFormData: AddAppFormData): AcceptAppAction => ({
  personaId,
  addAppFormData,
  type: ACCEPT_APP,
})

export default acceptApp
