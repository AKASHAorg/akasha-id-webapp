import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'qwant-research-components'

import { Modal } from '../../components'

import styles from './QRCode.module.scss'

class QRCode extends Component {
  copyLink () {
    const link = document.querySelector('input')
    link.select()
    document.execCommand('copy')
  }

  render () {
    const { onClose, currentAppRequest } = this.props

    return (
      <Modal height={370} width={511} onClose={onClose}>
        <div className={styles.QRCode}>
          <p className={styles.title}>Connexion sur un autre appareil</p>
          <p className={styles.description}>
            Copiez le lien suivant sur un autre appareil pour vous connecter depuis celui-ci.
          </p>
          <input id='link' readOnly defaultValue={currentAppRequest.link} />
          <Button label='Copier' onClick={this.copyLink} />
        </div>
      </Modal>
    )
  }
}

QRCode.propTypes = {
  onClose: PropTypes.func,
  currentAppRequest: PropTypes.object
}

const mapStateToProps = state => ({
  currentAppRequest: state.masq.currentAppRequest
})

export default connect(mapStateToProps)(QRCode)