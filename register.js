const register=()=>{
    return `
     <div class="registration-page">
        <form>
            <h1>Register</h1>
            <div>
                <input type="name" name="name" placeholder="Name">
                <span><i class="fa-solid fa-signature"></i></span>
            </div>
            <div>
                <input type="email" name="email" placeholder="Email">
                <span><i class="fa-solid fa-envelope"></i></span>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password">
                <span><i class="fa-solid fa-key"></i></span>
            </div>
            <div>
                <input type="password" name="re-password" placeholder="Re-Type Password">
                <span><i class="fa-solid fa-key"></i></span>
            </div>
            <div>
                <textarea name="address" placeholder="Address"></textarea>
                <span><i class="fa-solid fa-location-dot"></i></span>
            </div>
            <div>
                <input type="file" accept=".png,.jpg" id="fileinput">
            </div>
            <div>
                <input type="button" value="Register" id="Submit">
            </div>
        </form>
    </div>
    `
}

export default register;