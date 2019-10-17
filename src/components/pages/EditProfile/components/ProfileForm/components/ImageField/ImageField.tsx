import React, { PropsWithChildren } from 'react'
import { WrappedFieldProps } from 'redux-form'

import WithLabel from '../../../../../../shared/WithLabel/WithLabel'
import { ImageInput } from './StyledImageField'

export interface ImageFieldProps extends WrappedFieldProps {
  label: string
  container: React.FC<PropsWithChildren<any>>
}

const ImageField: React.FC<ImageFieldProps> = ({
  container: Container,
  label,
  input,
  meta: { touched, error },
  ...props
}) => {
  let inputRef: HTMLElement | null = null

  return (
    <WithLabel label={label} error={touched ? error : ''}>
      <Container
        onClick={() => {
          inputRef!.click()
        }}
      >
        {input.value && <img alt={label} src={input.value} />}

        <ImageInput
          ref={ref => {
            inputRef = ref
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
