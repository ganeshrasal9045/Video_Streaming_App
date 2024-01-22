import Comment from "./Comment"

const CommentList = ({comments}) => {
  return comments.map((comment, i) => (
    <div key={i}>
        <Comment data={comment} />
        <div className="pl-5 border border-l-black ml-2">
            <CommentList comments={comment.replies} />
        </div>
  </div>
  )
  ) 
}

export default CommentList
