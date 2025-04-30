import * as React from 'react'

interface Context {
  websiteTextColor: string,
  buttonFontSize: string
}

export const WebsiteContext = React.createContext<Context|undefined>(undefined)
