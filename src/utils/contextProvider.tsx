import PropTypes from 'prop-types'
import * as React from 'react'
import { WebsiteContext } from './context'

export default function WebsiteContextProvider(
  { children }: { children: React.ReactNode }
) {
  const websiteTextColor = '#D3D3D3'
  const buttonFontSize = '30px'
  return (
    <WebsiteContext.Provider
      value={{
        websiteTextColor,
        buttonFontSize
      }}
    >
      {children}
    </WebsiteContext.Provider>
  )
}

WebsiteContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
