import classes from './NewPost.module.css'
import { Modal } from '../Modal'
import { useNavigate, Form, redirect } from 'react-router-dom'

export function NewPost() {
  const navigator = useNavigate()

  function onCancelHandler() {
    navigator('..')
  }

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required name="body" rows={3}></textarea>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancelHandler}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  )
}

export async function action({ request }) {
  const formData = await request.formData()
  const postData = Object.fromEntries(formData)
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return redirect('/')
}
