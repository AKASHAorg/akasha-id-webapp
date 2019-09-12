import { Action } from 'redux'

import { ACCEPT_APP } from '../../consts/actions/apps'
import { AddAppFormData } from '../../types/apps'

export interface AcceptAppAction extends Action<string> {
  addAppFormData: AddAppFormData
}

const acceptApp = (addAppFormData: AddAppFormData): AcceptAppAction => ({
  addAppFormData,
  type: ACCEPT_APP,
})

export default acceptApp
