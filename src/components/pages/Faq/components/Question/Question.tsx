import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import { Subtract } from 'grommet-icons'
import React, { useContext } from 'react'

import { Answer, QuestionButton, QuestionText, Row } from './Styled'

export interface QuestionProps {
  text: React.ReactNode
  answer: React.ReactNode
  opened: boolean
}

const Question: React.FC<QuestionProps> = ({ text, answer, opened }) => {
  const theme = useContext(AkashaThemeContext)

  return (
    <Row opened={opened}>
      <QuestionButton>
        <QuestionText>{text}</QuestionText>

        {opened ? (
          <Subtract size="13px" color="dark-1" />
        ) : (
          <Icon type="plus" width="13px" height="12px" color={theme.colors.dark} />
        )}
      </QuestionButton>
      {opened && <Answer>{answer}</Answer>}
    </Row>
  )
}

export default Question
