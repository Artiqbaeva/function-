// 1 
{
   function createUser(){
    return{
        name: "Selena",
        age: 28,
    }
   }
   let User = Object.assign(createUser(), {isAdmin: false})
   console.log(User);
   
}
// 2
{
    const foo = (obj) =>{
        // return Object.values(obj).reduce((sum, item) => sum + Number(item), 0)
        return Object.values(obj).reduce((sum, item) => sum + +item, 0)
    }

    console.log( foo( {a:5, b:3, c:"8", d:4, e: 9}));
}
// 3
{
  let displayUserInfo = {
    name: "Bobur",
    age: 30,
  }
  let {name} = displayUserInfo
  let {age} = displayUserInfo
  console.log(name);
  console.log(age);
}
// 4
{ 
    const ObjectToArray = (obj) =>{
        return Object.entries(obj)
    }
    console.log( ObjectToArray( {name: "Ali", age:25}));     
}
// 5
{
    const getKeysAndValues = (obj) =>{
       return Object.keys(obj)
    }

    console.log( getKeysAndValues( {a:1, b:2, c:3 }));
}
// 6
{

     function sumPositiveValues(obj) {
        let allPositiveNums = Object.values(obj).filter(item => item > 0);
        let sum = allPositiveNums.reduce((prev, curr) => prev + curr, 0);
        return sum;
    }
    console.log( sumPositiveValues( {a:-5, b:10, c:15 }));
    
}
{
    
    let users = [
        {
            name: "John",
            gender: "male"
        },
        {
            name: "Elisa",
            gender: "female"
        },
        {
            name: "Lina",
            gender: "female"
        }
    ];
    
    let girls = users.filter(user => user.gender === "female");
    console.log(girls);
    
}
