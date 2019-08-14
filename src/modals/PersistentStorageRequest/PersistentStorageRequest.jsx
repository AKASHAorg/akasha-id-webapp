import React from 'react'
import PropTypes from 'prop-types'

import { useTranslation } from 'react-i18next'
import { Button, Modal, Typography, Space } from '../../components'
import styles from './PersistentStorageRequest.module.scss'

const PermanentStorageRequest = ({ onClose }) => {
  const { t } = useTranslation()
  return (
    <Modal width={511} onClose={onClose}>
      <div className={styles.PermanentStorage}>
        <div>
          <Typography type='title-modal'>{t('Storage authorization')}</Typography> />
          <Space size={32} />
          <Typography type='paragraph-modal'>
            {`${t('In order to store your data securely,')}
          ${t('please authorize this application to use the persistent storage of the browser.')}
          ${t('This notification will appear again if necessary.')}`}
          </Typography>
        </div>
        <Space size={32} />
        <Button onClick={onClose}>{t('Ok')}</Button>
      </div>
    </Modal>
  )
}

PermanentStorageRequest.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default PermanentStorageRequest
