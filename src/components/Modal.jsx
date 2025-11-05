import classes from './Modal.module.css'
import { useNavigate } from 'react-router-dom'

export function Modal(props) {
  const navigate = useNavigate()

  function closehandler() {
    navigate('..')
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closehandler} />
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  )
}
