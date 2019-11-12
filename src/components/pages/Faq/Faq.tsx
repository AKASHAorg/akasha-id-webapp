import React from 'react'
import { useTranslation } from 'react-i18next'

import { faq } from '../../../consts/i18n'
import { FAQ } from '../../../consts/i18n-ns'
import { MobileTopBar } from '../../shared/MobileTopBar'
import { MobileTopBarWithArrowCancelButton } from '../../shared/MobileTopBarWithArrowCancelButton'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import { Question } from './components/Question'
import { PageContainer, QuestionsList } from './Styled'

interface QuestionType {
  id: string
  question: string
  answer: string
}

const questions: QuestionType[] = []

for (let i = 0; i < 9; i = i + 1) {
  questions.push({
    id: i.toString(10),
    question: faq.question(i),
    answer: faq.answer(i),
  })
}

console.log(questions)

const Faq: React.FC<{}> = () => {
  const { t } = useTranslation(FAQ)

  return (
    <SidebarContainer>
      <MobileTopBar />

      <Column size={6}>
        <PageContainer>
          <MobileTopBarWithArrowCancelButton>FAQs</MobileTopBarWithArrowCancelButton>

          <QuestionsList>
            {questions.map(question => (
              <Question
                key={question.id}
                question={t(question.question)}
                answer={t(question.answer)}
              />
            ))}
          </QuestionsList>
        </PageContainer>
      </Column>
    </SidebarContainer>
  )
}

export default Faq
