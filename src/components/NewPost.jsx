import classes from './NewPost.module.css'
import { useState } from 'react'

export function NewPost(props) {
  const [currentBody, setCurrentBody] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')

  function bodyChangeHandler(event) {
    setCurrentBody(event.target.value)
  }

  function authorChangeHandlier(event) {
    setEnteredAuthor(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault()
    const postData = {
      body: currentBody,
      author: enteredAuthor
    }
    props.onAddPost(postData)
    props.onCancel()
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={bodyChangeHandler}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandlier} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  )
}
