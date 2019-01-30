import React from 'react'
import { Avatar } from '../../components'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'

import { signout } from '../../actions'

import styles from './SidebarMin.module.scss'
import { ReactComponent as AppsIcon } from '../../assets/cards.svg'
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg'
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg'
import { ReactComponent as LogoutIcon } from '../../assets/logout.svg'

class SidebarMin extends React.Component {
  render () {
    const { user, signout } = this.props

    if (!user) return <Redirect to='/' />

    return (
      <div className={styles.Sidebar}>
        <div>
          <div className={styles.header}>
            <Avatar {...user} size={64} />
            <h2>{user.username}</h2>
          </div>

          <div className={styles.nav}>
            <NavLink to='/apps' className={styles.navElement} activeClassName={styles.active}>
              <AppsIcon fill='white' opacity={0.8} width={24} />
              <p className='label' />
            </NavLink>
            <NavLink to='/devices' className={styles.navElement} activeClassName={styles.active}>
              <PhoneIcon fill='white' opacity={0.8} width={24} />
              <p className='label' />
            </NavLink>
            <NavLink to='/settings' className={styles.navElement} activeClassName={styles.active}>
              <SettingsIcon fill='white' opacity={0.8} width={24} />
              <p className='label' />
            </NavLink>
          </div>
        </div>

        <div className={styles.logout} onClick={signout}>
          <div className={styles.navElement}>
            <LogoutIcon fill='white' opacity={0.8} width={24} />
            <p className='label' />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.masq.currentUser
})

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMin)
