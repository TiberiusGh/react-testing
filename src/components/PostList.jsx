import { Post } from './Post'
import { NewPost } from './NewPost'
import classes from './PostList.module.css'

export function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Tiberius" body="Hello world!" />
        <Post author="Lisa" body="Hello!" />
      </ul>
    </>
  )
}
