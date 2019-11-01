import Icon from '@akashaproject/design-system/dist/components/Icon'
import AkashaThemeContext from '@akashaproject/design-system/dist/providers/ThemeProvider'
import { Subtract } from 'grommet-icons'
import React, { useContext, useState } from 'react'

import { Answer, QuestionButton, QuestionText, Row } from './Styled'

export interface QuestionProps {
  question: React.ReactNode
  answer: React.ReactNode
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [opened, setOpened] = useState(false)
  const theme = useContext(AkashaThemeContext)

  return (
    <Row opened={opened}>
      <QuestionButton
        onClick={() => {
          setOpened(!opened)
        }}
      >
        <QuestionText>{question}</QuestionText>

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
