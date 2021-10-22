import React from 'react'

interface AppProps {
  children: React.ReactNode
}

const App: React.FC<AppProps> = ({ children }) => {
  return <div className="layout-wrapper">{children}</div>
}

export default App
