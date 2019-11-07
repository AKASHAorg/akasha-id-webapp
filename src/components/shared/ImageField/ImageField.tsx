import React, { PropsWithChildren } from 'react'
import { WrappedFieldProps } from 'redux-form'

import WithLabel from '../WithLabel/WithLabel'
import { ImageInput } from './StyledImageField'

export interface ImageFieldProps extends WrappedFieldProps {
  label: string
  openDialog?: boolean
  container: React.FC<PropsWithChildren<any>>
}

const ImageField: React.FC<ImageFieldProps> = ({
  container: Container,
  label,
  openDialog,
  input,
  meta: { touched, error },
  ...props
}) => {
  let inputRef: HTMLElement | null = null

  return (
    <WithLabel label={label} error={touched ? error : ''}>
      <Container
        onClick={() => {
          if (inputRef) {
            inputRef.click()
          }
        }}
      >
        {input.value && <img alt={label} src={input.value} />}

        <ImageInput
          ref={ref => {
            inputRef = ref

            if (openDialog && inputRef) {
              inputRef.click()
            }
          }}
          type="file"
          onChange={event => {
            const file = event.target.files![0]
            if (!file) {
              return
            }

            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
              input.onChange(fileReader.result)
            })

            fileReader.readAsDataURL(event.target.files![0])
          }}
          {...props}
        />
      </Container>
    </WithLabel>
  )
}

export default ImageField
