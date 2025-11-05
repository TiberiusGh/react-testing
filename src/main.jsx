import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Posts, { loader } from './components/routes/Posts.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NewPost, action } from './components/routes/NewPost.jsx'
import { RootLayout } from './components/routes/RootLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: loader,
        children: [
          { path: '/create-post', element: <NewPost />, action: action }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
