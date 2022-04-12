import CommentDate from "../comment-date/comment-date.component";
import UserInfo from "../user-info/user-info.component";
import CommentText from "../comment-text/comment-text.component";

export interface IAuthor {
    avatarUrl: string;
    name: string;
}
interface ICommentProps{
    author: IAuthor;
    date: Date;
    text: string;
}



function Comment(props: ICommentProps) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <CommentText text={props.text}></CommentText>
        <CommentDate date={props.date} />

      </div>
    );
  }
  export default Comment;