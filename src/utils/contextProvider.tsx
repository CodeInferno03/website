import PropTypes from 'prop-types'
import * as React from 'react'
import { WebsiteContext } from './context'

export default function WebsiteContextProvider(
  { children }: { children: React.ReactNode }
) {
  const websiteTextColor = '#000000'
  return (
    <WebsiteContext.Provider
      value={{
        websiteTextColor
      }}
    >
      {children}
    </WebsiteContext.Provider>
  )
}

WebsiteContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
