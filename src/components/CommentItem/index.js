// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName} = commentDetails

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const likeTextClassName = isLiked ? 'active' : 'inactive'

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }
  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <>
      <li>
        <div>
          <div className={initialClassName}>
            <p>s</p>
          </div>
          <div>
            <p>{name}</p>
            <p>{comment}</p>
          </div>
          <div>
            <img src={likeImgUrl} alt="like" />
            <button
              type="button"
              className={likeTextClassName}
              onClick={onClickLike}
            >
              like
            </button>
          </div>
          <div>
            <button
              type="button"
              className="button"
              onClick={onDeleteComment}
              data-testid="delete"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
        <hr />
      </li>
    </>
  )
}
export default CommentItem
