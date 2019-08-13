import React from 'react'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Grid, Smartphone, User, LogOut } from 'react-feather'

import { Avatar, Typography, Space } from '../../components'
import { signout } from '../../actions'
import { ReactComponent as Cubes } from '../../assets/cubes-sidebar-min.svg'
import { ReactComponent as Logo } from '../../assets/logo-sidebar.svg'

import styles from './NavbarMin.module.scss'

class NavbarMin extends React.Component {
  render () {
    const { user, signout } = this.props

    if (!user) return <Redirect to='/' />

    return (
      <div className={styles.Sidebar}>
        <div>
          <div className={styles.header}>
            <Logo />
            <Space size={22} />
            <Avatar {...user} size={58} />
            <Space size={8} />
            <Typography type='username'>{user.username}</Typography>
          </div>

          <div className={styles.nav}>
            <NavLink to='/apps' className={styles.navElement} activeClassName={styles.active}>
              <Grid opacity={0.8} width={24} />
              <p className='label' />
            </NavLink>
            <NavLink to='/devices' className={styles.navElement} activeClassName={styles.active}>
              <Smartphone opacity={0.8} width={24} />
              <p className='label' />
            </NavLink>
            <NavLink to='/profile' className={styles.navElement} activeClassName={styles.active}>
              <User opacity={0.8} width={24} />
              <p className='label' />
            </NavLink>
          </div>
        </div>

        <div className={styles.logout} onClick={signout}>
          <div className={styles.navElement}>
            <LogOut opacity={0.8} width={24} />
            <p className='label' />
          </div>
        </div>

        <Cubes className={styles.cubes} />
      </div>
    )
  }
}

NavbarMin.propTypes = {
  user: PropTypes.object,
  signout: PropTypes.func
}

const mapStateToProps = (state) => ({
  user: state.masq.currentUser
})

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMin)
