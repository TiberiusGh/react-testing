import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Posts, { loader as postLoader } from './components/routes/Posts.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NewPost, action } from './components/routes/NewPost.jsx'
import { RootLayout } from './components/routes/RootLayout.jsx'
import {
  PostDetails,
  loader as postDetailsLoader
} from './components/routes/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: action },
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader }
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
