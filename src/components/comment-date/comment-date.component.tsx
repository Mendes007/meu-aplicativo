
export interface IUserInfoProps {
    date: Date;
}

function CommentDate(props: IUserInfoProps) {
    
    return(
        <div className="Comment-date">
          {props.date.getFullYear()}
        </div>
    );
}

export default CommentDate;