import { Action } from 'redux'
import { SET_ADD_APP_MODAL_STEP } from '../consts/actions'
import { AddAppModalStep } from '../types/apps'

export interface SetAddAppModalStepAction extends Action<string> {
  step: AddAppModalStep
}

const setAddAppModalStep = (step: AddAppModalStep): SetAddAppModalStepAction => ({
  step,
  type: SET_ADD_APP_MODAL_STEP,
})

export default setAddAppModalStep
