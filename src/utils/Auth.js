class Auth {

    /**
     * Authenticate a user. Save a token string in Local Storage
     * @param {string} token
     */
    static authenticateUser() {
      localStorage.setItem("signedIn", true)
      return true;
    }
  
    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     * @returns {boolean}
     */
    static isUserAuthenticated() {
      return localStorage.getItem('token') !== null;
    }
  
    //Deauthenticate a user. Remove a token from Local Storage.
    static deauthenticateUser() {
      localStorage.removeItem("signedIn")
    }
  
    /**
     * Get a token value.
     * @returns {string}
     */
    static getToken() {
      let token = localStorage.getItem('token');
      return token;
    }
  
  }
  
  export default Auth;