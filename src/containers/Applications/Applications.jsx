import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Trash } from 'react-feather'
import { withTranslation } from 'react-i18next'
import { fetchApps, removeApp, setNotification } from '../../actions'
import { Card, Typography, Space } from '../../components'
import { DeleteAppDialog } from '../../modals'

import { ReactComponent as MapsIcon } from '../../assets/apps-maps.svg'

import Link from './Link'

import styles from './Applications.module.scss'

const MAPS_URL = 'https://qwant.com/maps'

class Apps extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      appToRemove: null,
      confirmDialog: false
    }

    this.confirmDelete = this.confirmDelete.bind(this)
    this.handleTrashClick = this.handleTrashClick.bind(this)
    this.closeConfirmDialog = this.closeConfirmDialog.bind(this)
  }

  componentDidMount () {
    if (!this.props.user) return
    this.props.fetchApps()
  }

  handleTrashClick (app) {
    this.setState({
      appToRemove: app,
      confirmDialog: true
    })
  }

  async closeConfirmDialog () {
    this.setState({
      appToRemove: null,
      confirmDialog: false
    })
  }

  async confirmDelete () {
    const { removeApp, setNotification } = this.props
    const { appToRemove } = this.state
    await removeApp(appToRemove)
    this.closeConfirmDialog()
    setNotification({
      title: this.props.t('Application succesfully deleted')
    })
  }

  render () {
    const { apps, user, t } = this.props
    const { confirmDialog, appToRemove } = this.state

    if (!user) return <Redirect to='/' />

    return (
      <div className={styles.Apps}>
        {confirmDialog && <DeleteAppDialog
          app={appToRemove}
          onConfirm={() => this.confirmDelete()}
          onCancel={() => this.closeConfirmDialog()}
          onClose={() => this.closeConfirmDialog()}
        />}

        <div className={styles.topSection}>
          <Typography type='title-page'>{t('My applications')}</Typography>
        </div>

        <Space size={16} />

        {apps.length === 0 && (
          <React.Fragment>
            <Typography type='subtitle-page'>{t('You do not have a registered application yet')}</Typography>
            <Space size={42} />
            <Typography type='title-page'>{t('Recommended applications')}</Typography>
            <Space size={16} />
            <Typography type='subtitle-page'>{t('The following applications are using Masq:')}</Typography>
            <Space size={24} />
            <div className={styles.recommendedApps}>
              <MapsIcon className={styles.icon} onClick={() => window.open(MAPS_URL, '_blank')} />
              <Link url={MAPS_URL} label={t('Open Qwant Maps')} />
            </div>
          </React.Fragment>
        )}

        <div className={styles.cards}>
          {apps.map((app, index) => (
            <div key={index} className={styles.Card}>
              <Card
                minHeight={64}
                title={app.name}
                image={app.imageURL}
                color='#82c362'
                description={app.description}
                actions={
                  <Trash
                    className={styles.trashIcon}
                    onClick={() => this.handleTrashClick(app)}
                  />
                }
                footer={<Link url={new URL(app.imageURL).origin + '/maps'} />}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.masq.currentUser,
  apps: state.masq.apps
})

const mapDispatchToProps = dispatch => ({
  fetchApps: () => dispatch(fetchApps()),
  removeApp: (app) => dispatch(removeApp(app)),
  setNotification: (notif) => dispatch(setNotification(notif))
})

Apps.propTypes = {
  apps: PropTypes.array,
  user: PropTypes.object,
  fetchApps: PropTypes.func,
  removeApp: PropTypes.func,
  setNotification: PropTypes.func,
  t: PropTypes.func
}
const translatedApps = withTranslation()(Apps)
export default connect(mapStateToProps, mapDispatchToProps)(translatedApps)
