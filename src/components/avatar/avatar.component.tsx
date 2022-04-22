
export interface IAvatarProps {
    user: IUser;
}

export interface IUser {
    avatarUrl: string;
    name: string;
}

function Avatar(props: IAvatarProps) {
    return <img className="avatar" style={{width:"50vh"}} src={props.user.avatarUrl} alt={props.user.name} />
}

export default Avatar;