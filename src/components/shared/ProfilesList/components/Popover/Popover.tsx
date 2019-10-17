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

const Popover: React.FC<{}> = () => {
  return (
    <PopoverContent>
      <PopoverMenuList>
        <PopoverMenuRow>
          <PopoverLink to={routes.editProfile}>
            <Icon type="edit" width="16px" height="16px" color="#132540" />
            <PopoverLabel>Edit persona</PopoverLabel>
          </PopoverLink>
        </PopoverMenuRow>

        <PopoverMenuRow>
          <PopoverLink to={routes.deleteProfile}>
            <Icon type="trash" width="16px" height="16px" color="#132540" />
            <PopoverLabel>Delete persona</PopoverLabel>
          </PopoverLink>
        </PopoverMenuRow>
      </PopoverMenuList>
    </PopoverContent>
  )
}

export default Popover
