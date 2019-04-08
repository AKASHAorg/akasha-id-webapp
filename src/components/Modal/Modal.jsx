import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

import { X } from 'react-feather'

import styles from './Modal.module.scss'

const Modal = ({ onClose, width, children }) => (
  <div className={styles.Modal}>
    <div className={styles.overlay} onClick={onClose} />
    <div className={styles.modal} style={{ width }}>
      {onClose && <X className={styles.close} size={16} onClick={onClose} />}
      {children}
    </div>
  </div>
)

const ResponsiveModal = ({ onClose, width, children }) => (
  <div>
    <MediaQuery maxWidth={500}>
      <Modal width='100%' onClose={onClose} children={children} />
    </MediaQuery>
    <MediaQuery minWidth={501}>
      <Modal width={width} onClose={onClose} children={children} />
    </MediaQuery>
  </div>
)

Modal.propTypes =
ResponsiveModal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.object,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default ResponsiveModal
