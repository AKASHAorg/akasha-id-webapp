import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ChevronLeft } from 'react-feather'

import { withTranslation } from 'react-i18next'
import { signin, signup, fetchUsers, setCurrentAppRequest } from '../../actions'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Cubes } from '../../assets/cubes.svg'
import { ReactComponent as PlusSquare } from '../../assets/plus-square.svg'
import { Avatar, Button, TextField, Typography, Space } from '../../components'
import { Signup, SyncDevice, QRCodeModal } from '../../modals'
import { Landing } from '../../containers'

import styles from './Login.module.scss'

const remoteWebRTCEnabled = (process.env.REACT_APP_REMOTE_WEBRTC === 'true')
class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedUser: null,
      isWrongPassword: false,
      isLoggedIn: false,
      signup: false,
      sync: false,
      password: '',
      qrcodeModal: false
    }

    this.handleClickSyncProfile = this.handleClickSyncProfile.bind(this)
    this.handleClickNewProfile = this.handleClickNewProfile.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.closeQRCodeModal = this.closeQRCodeModal.bind(this)
    this.openQRCodeModal = this.openQRCodeModal.bind(this)
    this.renderQRCode = this.renderQRCodeModal()
    this.onPasswordKeyUp = this.onPasswordKeyUp.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.connect = this.connect.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  async componentDidMount () {
    const { setCurrentAppRequest, users } = this.props
    this.props.fetchUsers()

    if (window.location.hash.substr(0, 7) !== '#/link/') {
      return
    }

    const hash = window.location.hash.substr(7) // ignore #/link/ characters
    if (!hash.length) return
    const decoded = Buffer.from(hash, 'base64')

    try {
      const [ appId, msg, channel, key ] = JSON.parse(decoded) // eslint-disable-line
      await setCurrentAppRequest({ appId, channel, key, link: window.location.href })
      if (!users.length) {
        this.setState({ signup: true })
      }
    } catch (e) {
      console.error(e)
    }
  }

  handleClose () {
    this.setState({
      signup: false,
      sync: false
    })
  }

  handleSignup (user) {
    const { signup } = this.props
    signup(user)
    this.setState({ signup: false })
  }

  handleClickNewProfile () {
    this.setState({ signup: true })
  }

  handleClickSyncProfile () {
    this.setState({ sync: true })
  }

  selectUser (user) {
    this.setState({ selectedUser: user })
  }

  onPasswordChange (e) {
    this.setState({
      password: e.target.value
    })
  }

  async onPasswordKeyUp (e) {
    if (e.key === 'Enter') {
      this.connect()
    }
  }

  async connect () {
    const { signin } = this.props
    const { password, selectedUser } = this.state
    try {
      await signin(selectedUser, password)
    } catch (e) {
      this.setState({ isWrongPassword: true })
    }
  }

  goBack () {
    this.setState({ selectedUser: null })
  }

  openQRCodeModal () {
    this.setState({ qrcodeModal: true })
  }

  closeQRCodeModal () {
    this.setState({ qrcodeModal: false })
  }

  renderQRCodeModal () {
    if (this.props.currentAppRequest && remoteWebRTCEnabled) {
      return (
        <div style={{ marginBottom: 32 }}>
          <Button onClick={this.openQRCodeModal}>Connect with another device</Button>
        </div>
      )
    }
  }

  renderUsersSelection () {
    const { users, t } = this.props
    const { signup, sync, qrcodeModal } = this.state

    return (
      <div className={styles.usersSelection}>
        {qrcodeModal && <QRCodeModal onClose={this.closeQRCodeModal} />}
        <Typography type='title'>{t('Who is it ?')}</Typography>
        <Space size={34} />
        {/* { this.renderQRCodeModal() } */}
        <div className={styles.users}>
          {users.map(user => (
            <div key={user.username} className={styles.user} onClick={() => this.selectUser(user)}>
              <Avatar {...user} />
              <Space size={16} />
              <Typography type='username'>{user.username}</Typography>
            </div>
          ))}
          <PlusSquare className={styles.PlusSquare} onClick={this.handleClickNewProfile} />
        </div>
        {signup && <Signup onSignup={this.handleSignup} onClose={this.handleClose} />}
        {sync && <SyncDevice onClose={this.handleClose} />}
      </div>
    )
  }

  renderPassword () {
    const { t } = this.props
    const { selectedUser, password } = this.state

    return (
      <div className={styles.userPassword}>
        <div className={styles.users}>
          <div key={selectedUser.username} className={styles.user}>
            <Avatar {...selectedUser} />
            <Space size={16} />
            <Typography type='username'>{selectedUser.username}</Typography>
          </div>
        </div>

        <Space size={16} />

        <div className={styles.passwordSection}>
          <TextField
            password
            large
            height={46}
            autoFocus
            type='password'
            onChange={this.onPasswordChange}
            error={this.state.isWrongPassword}
            label={this.state.isWrongPassword ? t('Wrong password, please try again') : ''}
            onKeyUp={this.onPasswordKeyUp}
            defaultValue={password}
          />
          <Space size={19} />
          <Button width={302} onClick={this.connect}>{t('Validate')}</Button>
          <Space size={32} />
          <div className={styles.goback} onClick={this.goBack}>
            <ChevronLeft />
            <Typography type='label'>{t('Change profile')}</Typography>
          </div>
        </div>
      </div>
    )
  }

  componentDidUpdate (prevProps) {
    if (!prevProps.user && this.props.user) {
      this.props.history.push('/apps')
    }
  }

  render () {
    const { users, currentAppRequest } = this.props
    const { selectedUser, signup } = this.state

    const children = () => {
      if (users.length === 0) {
        return null
      } else if (selectedUser) {
        return this.renderPassword()
      } else {
        return this.renderUsersSelection()
      }
    }

    if (!currentAppRequest || users.length === 0) {
      return (
        <div>
          {signup && <Signup onSignup={this.handleSignup} onClose={this.handleClose} />}
          <Landing onClick={this.handleClickNewProfile}>
            {children()}
          </Landing>
        </div>
      )
    }

    return (
      <div className={styles.Login}>
        <div className={styles.content}>
          <Space size={68} />
          <Logo />
          <Space size={82} />
          {selectedUser
            ? this.renderPassword()
            : this.renderUsersSelection()
          }
        </div>

        <Cubes className={styles.Background} />
      </div>
    )
  }
}

Login.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
  fetchUsers: PropTypes.func,
  signup: PropTypes.func,
  signin: PropTypes.func,
  history: PropTypes.object,
  currentAppRequest: PropTypes.object,
  setCurrentAppRequest: PropTypes.func,
  t: PropTypes.func
}

const mapStateToProps = state => ({
  user: state.masq.currentUser,
  users: state.masq.users,
  currentAppRequest: state.masq.currentAppRequest
})

const mapDispatchToProps = dispatch => ({
  signin: (user, passphrase) => dispatch(signin(user, passphrase)),
  signup: user => dispatch(signup(user)),
  fetchUsers: user => dispatch(fetchUsers(user)),
  setCurrentAppRequest: app => dispatch(setCurrentAppRequest(app))
})

const translatedLogin = withTranslation()(Login)
export default connect(mapStateToProps, mapDispatchToProps)(translatedLogin)
