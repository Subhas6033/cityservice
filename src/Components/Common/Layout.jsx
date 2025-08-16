import React from 'react'

const Layout = ({className = "", children, ...props}) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  )
}

export default Layout
