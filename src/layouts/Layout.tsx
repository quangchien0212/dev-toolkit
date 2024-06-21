import React, { PropsWithChildren } from 'react'
import GlobalSidebar from '../components/GlobalSidebar'

type Props = {}

const Layout: React.FC<Props & PropsWithChildren> = (props) => {
  return (
    <div className='flex h-full'>
      <GlobalSidebar />

      <div className='grow p-4'>
        {props.children}
      </div>
    </div>
  )
}

export default Layout
