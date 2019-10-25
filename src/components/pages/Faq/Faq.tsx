import React from 'react'

import { MobileTopBar } from '../../shared/MobileTopBar'
import { MobileTopBarWithArrowCancelButton } from '../../shared/MobileTopBarWithArrowCancelButton'
import { Column } from '../shared/Container'
import { SidebarContainer } from '../shared/SidebarContainer'
import { Question } from './components/Question'
import { PageContainer, QuestionsList } from './Styled'

const Faq: React.FC<{}> = () => {
  return (
    <SidebarContainer>
      <MobileTopBar />

      <Column size={6}>
        <PageContainer>
          <MobileTopBarWithArrowCancelButton>FAQs</MobileTopBarWithArrowCancelButton>

          <QuestionsList>
            <Question text="What is AKASHA.ID" answer="" opened={false} />

            <Question text="How does it work?" answer="" opened={false} />

            <Question
              text="What apps does it support?"
              answer="The list of apps it supports is quite vast and can be found at the Supported Apps page"
              opened={true}
            />

            <Question text="Is it free?" answer="" opened={false} />

            <Question text="Is any data stored?" answer="" opened={false} />

            <Question text="What is the meaning of life?" answer="" opened={false} />

            <Question
              text="What colour is the grey hourse of Napoleon in the 16th century?"
              answer=""
              opened={false}
            />

            <Question text="What’s the first rule of Fight Club?" answer="" opened={false} />

            <Question text="Knock, Knock. Who’s there?" answer="" opened={false} />
          </QuestionsList>
        </PageContainer>
      </Column>
    </SidebarContainer>
  )
}

export default Faq
