import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {nameInput: '', commentTextarea: '', commentsList: []}

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentTextarea} = this.state

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentTextarea,
      date: new Date(),
      isLiked: false,
      initialClassName: initialContainerBackgroundClassNames,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentTextarea: '',
    }))
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeCommentTextarea = event => {
    this.setState({commentTextarea: event.target.value})
  }

  deleteComment = commentId => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== commentId),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {nameInput, commentTextarea, commentsList} = this.state
    return (
      <div className="mainContainer">
        <div className="container">
          <h1>Comments</h1>
          <div>
            <p>Say something about 4.0 Technologies</p>

            <form className="form" onSubmit={this.onAddComment}>
              <input
                type="text"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <textarea
                placeholder="Your comment"
                value={commentTextarea}
                onChange={this.onChangeCommentTextarea}
                rows="6"
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr />
          <p>Comments</p>
          <ul>
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                deleteComment={this.deleteComment}
                toggleIsLiked={this.toggleIsLiked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
