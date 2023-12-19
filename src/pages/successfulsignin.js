import './successfulsignin.css'
export default function SuccessfulSignIn ({name}) {
    return (
        <div className = "page_login">
            <div>{name}</div>
            <div className = "content">
            <div> You've successfully logged into your account! </div> 
            </div>
        </div>
    )
}