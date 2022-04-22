import Avatar, { IUser } from "../avatar/avatar.component";

export interface IUserInfoProps {
    user: IUser;
}

function UserInfo(props: IUserInfoProps) {
    
    return(
        <div className="UserInfo">
            <Avatar user={props.user} />
            
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

export default UserInfo;