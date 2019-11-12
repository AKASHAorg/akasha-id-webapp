import { FAQ } from '../i18n-ns'

const faqNs = `${FAQ}:`

const header = `${faqNs}header`
const question = (i: number) => `${faqNs}questions.${i}.question`
const answer = (i: number) => `${faqNs}questions.${i}.answer`

export { header, question, answer }
