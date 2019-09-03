const isRequired = (errorMessage: string) => (value: string) => (value ? undefined : errorMessage)

export default isRequired
