const array=[
    {
        name:"king",
        age:20,
        job:"gigs"
    
    },
    {
        name:"prince",
        age:30,
        job:"hod"
    
    },
    {
        name:"bruce",
        age:40,
        job:"kunguf"
    
    },
    {
        name:"Kagame",
        age:40,
        job:"president"
    
    },
    {
        name:"serge",
        age:22,
        job:"teacher"
    
    }
]
let filterdArray=array.filter(lowAge =>array.age>=30);
console.log(filterdArray);