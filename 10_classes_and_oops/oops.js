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
  console.log(user.username)
//   console.log(user.getUserDetails());
  console.log(this);