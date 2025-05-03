import * as React from 'react'

interface Context {
  websiteTextColor: string,
  buttonFontSize: string,
  websiteFont: string
}

export const WebsiteContext = React.createContext<Context|undefined>(undefined)
