import Modal from '@akashaproject/design-system/dist/components/Modal'
import TextArea from '@akashaproject/design-system/dist/components/TextArea'
import React from 'react'

export interface ExportPersonaModalProps {
  isOpen: boolean
  exportText: string
  onClose: () => void
  onOk: () => void
}

const ExportPersonaModal: React.FC<ExportPersonaModalProps> = ({
  isOpen,
  exportText,
  onClose,
  onOk,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      headerContent={`Export persona`}
      onOk={onOk}
      onClose={onClose}
      closeTimeoutMS={0}
      cancelButtonContent="Cancel"
      ariaHideApp={false}
      okButtonContent="Copy"
      hideCancelButton={false}
      hideOkButton={true}
    >
      <TextArea label="Export text" showCounter={false} maxLength={-1} value={exportText} />
    </Modal>
  )
}

export default ExportPersonaModal
