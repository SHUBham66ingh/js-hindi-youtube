(function chai()// named IFFE
{
console.log(`shubham`);
}) ();

(// unamed IFFE
   (age)=> {
        console.log(`shubham what is your ${age}`);
    }
)('age')