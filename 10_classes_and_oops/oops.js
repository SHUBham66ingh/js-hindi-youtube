const user={
    username: "shubham",
    loginCount:8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`username : ${username}`);
        console.log(this);
    }      
  }
//   console.log(user.username)
// //   console.log(user.getUserDetails());
//   console.log(this);


function User(username, loginCount , isLoggedIn) 
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggegdIn = isLoggedIn;

     this.greeting = function()
     {
        console.log(`welcome ${this.username}`)
     }
}

const userOne = new User(shubham,12,true)
const userTwo= new User("ChaiAurCode,11,false")
console.log(userOne.constructor);
console.log(userTwo);