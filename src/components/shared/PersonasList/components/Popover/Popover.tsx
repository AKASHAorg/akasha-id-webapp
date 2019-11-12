import Icon from '@akashaproject/design-system/dist/components/Icon'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { translation } from '../../../../../consts/i18n'
import * as routes from '../../../../../consts/routes'
import {
  PopoverContent,
  PopoverLabel,
  PopoverLink,
  PopoverMenuList,
  PopoverMenuRow,
} from './Styled'

import editIcon from './edit.svg'

export interface PopoverProps {
  id: string
}

const Popover: React.FC<PopoverProps> = ({ id }) => {
  const { t } = useTranslation()

  return (
    <PopoverContent>
      <PopoverMenuList>
        <PopoverMenuRow>
          <PopoverLink to={routes.editPersona.replace(routes.personaIdParam, id)}>
            <img src={editIcon} alt="Edit persona" />
            <PopoverLabel>{t(translation.personasList.edit)}</PopoverLabel>
          </PopoverLink>
        </PopoverMenuRow>

        <PopoverMenuRow>
          <PopoverLink to={routes.deletePersona.replace(routes.personaIdParam, id)}>
            <Icon type="trash" width="16px" height="16px" color="#132540" />
            <PopoverLabel>{t(translation.personasList.delete)}</PopoverLabel>
          </PopoverLink>
        </PopoverMenuRow>
      </PopoverMenuList>
    </PopoverContent>
  )
}

export default Popover
