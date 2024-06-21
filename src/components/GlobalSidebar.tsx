import * as React from 'react'
import appList from '@/constants/appList'
import { Link, useLocation, useRoutes } from 'react-router-dom'
import clsx from 'clsx'

type Props = {}

const GlobalSidebar = (props: Props) => {
  const location = useLocation()

  return (
    <div className='sticky top-0 left-0 border-r p-2 h-full border-slate-700'>
      <nav id="nav" className='h-full'>
        <ul>
          {appList.map(a => (
            <li
            className={
              clsx(
                'p-2 rounded-full border border-slate-700 cursor-pointer relative',
                location.pathname === a.path && 'after:content-[\"\"] after:absolute after:h-full after:w-1 after:bg-slate-700 after:top-0 after:-left-2'
              )}
              key={a.name}
            >
              <Link to={a.path}>
                <img src={a.icon} alt={a.name} className='w-6 h-6' />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default GlobalSidebar
