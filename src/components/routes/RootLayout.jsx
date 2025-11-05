import { MainHeader } from '../MainHeader'
import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  )
}
