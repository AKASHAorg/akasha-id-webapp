import React from 'react'

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

const questions: QuestionType[] = [
  {
    id: '1',
    question: 'What is AKASHA.id?',
    answer:
      'It is a privacy-respectful way to enhance your experience when using decentralized, blockchain-based applications that have no standard way to manage personal profile data, such as your name, photo, and many more attributes.',
  },
  {
    id: '2',
    question: 'Where is my data stored?',
    answer:
      'Your data is stored in an encrypted form locally in the browser, on your device, using modern browser storage mechanisms.',
  },
  {
    id: '3',
    question: 'Is the data stored safely?',
    answer:
      'Your data is never at risk! We use a password-based key derivation method to generate an encryption key for each local account. All data stored locally is encrypted with this key, and you can always change your password without having to re-encrypt everything.',
  },
  {
    id: '4',
    question: 'What about my privacy? Are you GDPR compliant?',
    answer:
      'Absolutely! There is nothing better in terms of privacy than having absolute control over your own data. Because the data is stored locally, we at AKASHA have no way to access it, even in its encrypted form. We are fully [GDPR] compliant.',
  },
  {
    id: '5',
    question: 'Can I export all my data?',
    answer:
      'Of course. We offer the possibility of exporting all your data, in a machine readable format that can be imported by other applications, or even a different instance of our AKASHA.id application that runs on another device or in a different browser.',
  },
  {
    id: '6',
    question: 'What happens if I delete my account?',
    answer:
      'Being in control of your data also means that it is under your responsibility. For example, you currently have the option to create backups by exporting individual account data. We are exploring the possibility of automating this process by adding third party integrations with Dropbox, Google Drive, iCloud, etc.',
  },
  {
    id: '7',
    question: 'How do applications access my data?',
    answer:
      'In order for an application to request access to your personal information, we are offering a free "discovery" service, which helps third party applications (dapps) communicate with the AKASHA.id application. Exchanges take place using short-lived sessions that use random identifiers, to avoid tracking. Also, all the data that transits through this service is end-to-end encrypted using Perfect Forward Secrecy (PFS), a mechanism by which we cannot see what goes through and each individual session uses a different encryption key. [link to a technical document]',
  },
  {
    id: '8',
    question: 'What applications can I use with my AKASHA.id?',
    answer: 'Ethereum.world (coming soon!)',
  },
  {
    id: '9',
    question: 'Can any developer integrate their dapp with AKASHA.id?',
    answer:
      'AKASHA.id is open for all developers to integrate with their own dapp. Please visit our developer resources to learn more. (needs a dedicated dev space, but we can link to Github for now)',
  },
]

const Faq: React.FC<{}> = () => {
  return (
    <SidebarContainer>
      <MobileTopBar />

      <Column size={6}>
        <PageContainer>
          <MobileTopBarWithArrowCancelButton>FAQs</MobileTopBarWithArrowCancelButton>

          <QuestionsList>
            {questions.map(question => (
              <Question key={question.id} {...question} />
            ))}
          </QuestionsList>
        </PageContainer>
      </Column>
    </SidebarContainer>
  )
}

export default Faq
