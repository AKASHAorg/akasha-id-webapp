export interface App {
  token: string
  name: string
  description: string
  icon: string
  url: string
}

export interface AppsState {
  apps: App[]
}

const defaultAppsState: AppsState = {
  apps: [],
}

export { defaultAppsState }
