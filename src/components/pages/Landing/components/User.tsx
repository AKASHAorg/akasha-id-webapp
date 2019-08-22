import Avatar from '@akashaproject/design-system/dist/components/Avatar'
import React from 'react'

interface UserProps {
  avatar: string
  login: string
  onClick: () => void
}

const User: React.FC<UserProps> = ({ avatar, login, onClick }) => {
  return (
    <li>
      <Avatar src={avatar} size="lg" onClick={onClick} />
      <span>{login}</span>
    </li>
  )
}

export default User
