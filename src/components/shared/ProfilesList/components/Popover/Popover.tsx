import Icon from '@akashaproject/design-system/dist/components/Icon'
import React from 'react'

import * as routes from '../../../../../consts/routes'
import {
  PopoverContent,
  PopoverLabel,
  PopoverLink,
  PopoverMenuList,
  PopoverMenuRow,
} from './Styled'

export interface PopoverProps {
  id: string
}

const Popover: React.FC<PopoverProps> = ({ id }) => {
  return (
    <PopoverContent>
      <PopoverMenuList>
        <PopoverMenuRow>
          <PopoverLink to={routes.editProfile.replace(routes.profileIdParam, id)}>
            <Icon type="edit" width="16px" height="16px" color="#132540" />
            <PopoverLabel>Edit persona</PopoverLabel>
          </PopoverLink>
        </PopoverMenuRow>

        <PopoverMenuRow>
          <PopoverLink to={routes.deleteProfile.replace(routes.profileIdParam, id)}>
            <Icon type="trash" width="16px" height="16px" color="#132540" />
            <PopoverLabel>Delete persona</PopoverLabel>
          </PopoverLink>
        </PopoverMenuRow>
      </PopoverMenuList>
    </PopoverContent>
  )
}

export default Popover
