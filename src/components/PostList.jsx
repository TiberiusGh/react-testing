import { Post } from './Post'
import { NewPost } from './NewPost'
import { Modal } from './Modal'
import { useState } from 'react'
import classes from './PostList.module.css'

export function PostList() {
  const [modalIsVisible, setModalIsVisible] = useState(true)
  const [currentBody, setCurrentBody] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')

  function hideModalHandler() {
    setModalIsVisible(false)
  }

  function bodyChangeHandler(event) {
    setCurrentBody(event.target.value)
  }

  function authorChangeHandlier(event) {
    setEnteredAuthor(event.target.value)
  }

  let modalContent

  if (modalIsVisible) {
    modalContent = (
      <Modal onClose={hideModalHandler}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandlier}
        />
      </Modal>
    )
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={currentBody} />
        <Post author="Lisa" body="Hello!" />
      </ul>
    </>
  )
}
