import { PERSONA_FORM } from '../i18n-ns'

const personaFormNs = `${PERSONA_FORM}:`

const createPersona = `${personaFormNs}createPersona`
const saveChanges = `${personaFormNs}saveChanges`

const personaName = {
  label: `${personaFormNs}personaName.label`,
  placeholder: `${personaFormNs}personaName.placeholder`,
  errorIsRequired: `${personaFormNs}personaName.errorIsRequired`,
}

const name = {
  placeholder: `${personaFormNs}name.placeholder`,
}

const description = {
  placeholder: `${personaFormNs}description.placeholder`,
}

const email = {
  placeholder: `${personaFormNs}email.placeholder`,
}

const ethAddress = {
  placeholder: `${personaFormNs}ethAddress.placeholder`,
}

const address = {
  placeholder: `${personaFormNs}address.placeholder`,
}

const createdDate = `${personaFormNs}createdDate`
const updatedDate = `${personaFormNs}updatedDate`
const aboutFootnote = `${personaFormNs}aboutFootnote`
const createId = `${personaFormNs}createId`

const deletePersona = {
  header: `${personaFormNs}deletePersona.header`,
  text: [`${personaFormNs}deletePersona.text.0`, `${personaFormNs}deletePersona.text.1`],
  button: `${personaFormNs}deletePersona.button`,
}

export {
  createPersona,
  saveChanges,
  personaName,
  name,
  description,
  email,
  ethAddress,
  address,
  createdDate,
  updatedDate,
  aboutFootnote,
  createId,
  deletePersona,
}
