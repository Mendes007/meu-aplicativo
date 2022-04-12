
export interface IuseText{
 text: string;
}

function CommentText(props: IuseText){
    return (
        <div className="Comment-text">
        {props.text}
      </div>

    );
}
export default CommentText;