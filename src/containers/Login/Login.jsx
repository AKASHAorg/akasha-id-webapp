import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signin, signup, fetchUsers } from '../../actions'
import { Redirect } from 'react-router-dom'

import styles from './Login.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Background } from '../../assets/background.svg'
import { ReactComponent as PlusSquare } from '../../assets/plus-square.svg'
import { Avatar } from '../../components'

import { Signup, AddProfile, SyncDevice } from '../../modals'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalOpened: false,
      isLoggedIn: false,
      signup: false,
      sync: false
    }

    this.handleSignup = this.handleSignup.bind(this)
    this.handleClickNewUser = this.handleClickNewUser.bind(this)
    this.handleClickSyncProfile = this.handleClickSyncProfile.bind(this)
    this.handleClickNewProfile = this.handleClickNewProfile.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount () {
    this.props.fetchUsers()
  }

  handleClickNewUser () {
    this.setState({
      isModalOpened: !this.state.isModalOpened
    })
  }

  handleClose () {
    this.setState({
      isModalOpened: false,
      signup: false,
      sync: false
    })
  }

  handleSignIn (user) {
    this.props.signin(user)
    this.setState({ isLoggedIn: true })
  }

  handleSignup (user) {
    const { signup } = this.props
    signup(user)
    this.setState({ isModalOpened: false, signup: false })
  }

  handleClickNewProfile () {
    this.setState({ isModalOpened: false, signup: true })
  }

  handleClickSyncProfile () {
    this.setState({ isModalOpened: false, sync: true })
  }

  render () {
    const { users, user } = this.props
    const { isModalOpened, signup, sync } = this.state

    if (user) return <Redirect to='/apps' />

    return (
      <div className={styles.Login}>
        <Logo className={styles.Logo} />
        <h1 className={styles.title}>Qui est-ce ?</h1>
        <div className={styles.users}>
          {users.map(user => (
            <div key={user.username} className={styles.user} onClick={() => this.handleSignIn(user)}>
              <Avatar {...user} />
              <h2>{user.username}</h2>
            </div>
          ))}
          <PlusSquare className={styles.PlusSquare} onClick={this.handleClickNewUser} />
        </div>
        <Background className={styles.Background} />
        {signup && <Signup onSignup={this.handleSignup} onClose={this.handleClose} />}
        {sync && <SyncDevice onClose={this.handleClose} />}
        {isModalOpened && (
          <AddProfile
            onClose={this.handleClose}
            onNewProfile={this.handleClickNewProfile}
            onSyncProfile={this.handleClickSyncProfile}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.masq.currentUser,
  users: state.masq.users
})

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user)),
  signup: user => dispatch(signup(user)),
  fetchUsers: user => dispatch(fetchUsers(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
