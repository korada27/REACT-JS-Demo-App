const Auth = {

    isAuthenticated: localStorage.getItem('token') ? true : false,

    authenticate() {
        this.isAuthenticated = true;
    },
    signout() {
        this.isAuthenticated = false;
    },
    getAuth() {
        return this.isAuthenticated;
    }
};
export default Auth;