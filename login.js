const login=()=>{
    return `
    <div class="login-page">
        <form>
            <h1>Login</h1>
            <div>
                <input type="email" name="email" placeholder="Email">
                <span><i class="fa-solid fa-envelope"></i></span>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password">
                <span><i class="fa-solid fa-key"></i></span>
            </div>
            <div>
                <input type="checkbox" name="remember" id="remember">
                <label for="remember">remember me</label>

                <a href="" class="forgot-link">Forgot Me?</a>
            </div>
            <div>
                <input type="button" value="Login" id="Submit">
            </div>
            <div style="align-items: center; justify-content: center; color: black; font-weight: 600; ">
                Dont Have an account? Register
            </div>
        </form>
    </div>
    `
}

export default login;