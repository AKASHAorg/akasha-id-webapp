import { notify } from '@akashaproject/design-system/dist/components/Notification'
import jsQR from 'jsqr'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { translation } from '../../../consts/i18n'
import * as routes from '../../../consts/routes'
import { MobileTopBarWithArrowCancelButton } from '../../shared/MobileTopBarWithArrowCancelButton'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import { StyledMobilePageContainer, StyledVideo } from './Styled'

const QRCode: React.FC<RouteComponentProps<any>> = ({ history }) => {
  let videoRef: HTMLVideoElement
  const canvasElement: HTMLCanvasElement = document.createElement('canvas')

  let width = 0
  let height = 0
  let prevTime = 0

  const tick = (time: number) => {
    if (videoRef && videoRef.readyState === videoRef.HAVE_ENOUGH_DATA && time - prevTime > 100) {
      prevTime = time

      width = videoRef.videoWidth
      height = videoRef.videoHeight
      canvasElement.width = width
      canvasElement.height = height

      const canvas: CanvasRenderingContext2D = canvasElement.getContext('2d')!

      canvas.drawImage(videoRef, 0, 0, width, height)

      const imageData = canvas.getImageData(0, 0, width, height)
      const code = jsQR(imageData.data, width, height, {
        inversionAttempts: 'dontInvert',
      })

      if (code) {
        history.replace(routes.registerApp.replace(routes.appRequestLinkParam, code.data))
      }
    }

    requestAnimationFrame(tick)
  }

  const setVideoRef = (ref: HTMLVideoElement | null) => {
    videoRef = ref!

    window.navigator.getUserMedia(
      {
        video: {
          facingMode: 'environment',
        },
      },
      stream => {
        if (videoRef) {
          videoRef.srcObject = stream
          videoRef.setAttribute('playsinline', 'true')
          videoRef.play()

          requestAnimationFrame(tick)
        }
      },
      error => {
        notify(error)
        console.error(error)
      },
    )
  }

  const { t } = useTranslation()

  return (
    <SidebarContainer>
      <Column size={6}>
        <MobileTopBarWithArrowCancelButton>
          {t(translation.mobilePageTitles.QRCode)}
        </MobileTopBarWithArrowCancelButton>

        <StyledMobilePageContainer>
          <StyledVideo ref={setVideoRef}>{t(translation.videoIsNotSupported)}</StyledVideo>
        </StyledMobilePageContainer>
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(QRCode)
