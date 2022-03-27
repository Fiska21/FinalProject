import "./login.scss"
import logo from "../../../src/components/navbar/LOGO.png"

export default function Login() {

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo"
                        src={logo} alt=""
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1> Sign In </h1>
                    <input type="email" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton"> Sign In </button>
                    <span>
                        New to Netflix? <b> Sign Up Now </b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <b> Learn more </b>
                    </small>
                </form>
            </div>
        </div>
    )
}
