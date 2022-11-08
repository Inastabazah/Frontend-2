let users=[{  userid : 1, 

    firstname :  "Krish" , 

    lastname :  "Lee " , 

    phonenumber :  "123456", 

    emailaddress :  'krish.lee@learningcontainer.com ' }, 

 { userid : 2, 

    firstname :  "racks " , 

    lastname : " jacson " , 

    phonenumber :  "123456 " , 

    emailaddress : " racks.jacson@learningcontainer.com " },
    { 

    userid : 3, 

    firstname :  "denial " , 

    lastname : "roast" , 

    phonenumber :  "21312312  ", 

    emailaddress :  "denial.roast@learningcontainer.com " }, 

 { userid : 4, 

    firstname :  "devid", 

    lastname : "neo" , 

    phonenumber :  "8975343 " , 

    emailaddress :  "devid.neo@learningcontainer.com "  

 }, 

 { userid : 5, 

    firstname : " jone " , 

    lastname :  "mac" , 

    phonenumber :  "3254667", 

    emailaddress : " jone.mac@learningcontainer.com " 

 } 

]


let x = users.length;
function idFirst(users){
    for(i=0;i<x ;i++)

    if(users[i].firstname=="racks "){
        return users[i].userid;
    }
}
consolidFirst(users)





function idLast(users){
    for(j=0;j<x ;j++)

    if(users[j].lastname=="roast"){
        console.log(users[j].userid)
    }
}
idLast(users)



function fullName(users){

    for(k=0;k<x;k++){
        if(users[k].phonenumber=="8975343 ")

        console.log("My Name is:"+ users[k].firstname+" "+ users[k].lastname)

    }


}
fullName(users)






 

 let array=[ 

 { 
    
 firstName: "Hussam", 
    
lastName: "Bawwab", 
    
age: 28, 
    
 address: "Irbid", 
    
phoneNumber: "7981323312", 
    
 jobDescription: { 
    
 title: "Frontend", 
    
 salary: 132123, 
    
}, 
    
childreen: [ 
    
    { 
    
    firstName: "Samer", 
    
     lastName: "Bawwab", 
    
    age: 3, 
    
     }, 
    
     { 
    
     firstName: "Bilal", 
    
     lastName: "Bawwab", 
    
     age: 6, 
    
    }, 
    
     { 
    
     firstName: "Mariam", 
    
     lastName: "Bawwab", 
    
    age: 8, 
    
   }, 
    
     ], 
    
      }, 
    
      { 
    
        firstName: "Sara", 
    
        lastName: "Lobani", 
    
        age: 22, 
    
        address: " Irbid ", 
    
        phoneNumber: "7213454654", 
    
        jobDescription: { 
    
          title: "Frontend", 
    
          salary: 2133, 
    
        }, 
    
        childreen: [ 
    
          { 
    
            firstName: "Ail", 
    
            lastName: "Lobani", 
    
            age: 13, 
    
          }, 
    
          { 
    
            firstName: "Lobna", 
    
            lastName: "Lobani", 
    
            age: 16, 
    
          }, 
    
          { 
    
            firstName: "Zaid", 
    
            lastName: "Lobani", 
    
            age: 1, 
    
          }, 
    
        ], 
    
      }, 
    
      { 
    
        firstName: "Ezz", 
    
        lastName: "Ashore", 
    
        age: 25, 
    
        address: "Amman", 
    
        phoneNumber: "79823216", 
    
        jobDescription: { 
    
          title: "Frontend", 
    
          salary: 2133, 
    
        }, 
    
        childreen: [ 
    
          { 
    
            firstName: "Rami", 
    
            lastName: "Lobani", 
    
            age: 20, 
    
          }, 
    
          { 
    
            firstName: "Omar", 
    
            lastName: "Lobani", 
    
            age: 9, 
    
          }, 
    
        ], 
    
      }, 
    
      { 
    
        firstName: "Mohammad", 
    
        lastName: "Damra", 
    
        age: 30, 
    
        address: "Amman", 
    
        phoneNumber: "79898798465", 
    
        jobDescription: { 
    
          title: "Frontend", 
    
          salary: 1133, 
    
        }, 
    
        childreen: [ 
    
          { 
    
            firstName: "Laith", 
    
            lastName: "Damra", 
    
     age: 1, 
    
    }, 
    
   { 
    
    firstName: "Ahmad", 
    
     lastName: "Damra", 
    
     age: 8, 
    
    }, 
    
    ], 
    
     }, 
    
    ]; 


let arraylenght= array.length



    function upThan25(array){
let up25=array.filter((element)=>element.age >= 25)
return {upto25:up25}
    }
    console.log(upThan25(array))



 function lessThan25(array){
    let less25=array.filter((element)=>element.age < 25)
    console.log(less25)
}
lessThan25(array)



function tax(array){
    let tax=[];

array.forEach (element => {
    let obj={
    
username:element.firstName+ " "+ element.lastName,
salaryAfterTax:element.jobDescription.salary-
(element.jobDescription.salary*0.07),
jobTitle:element.jobDescription.jobTitle
}
tax.push(obj);
});

 return tax;
}
tax(array)




function usersByAddressName(usersArray , adress){
for( b=0 ;b<arraylenght;b++){
if(array[b].address==adress){

    console.log(array[b].firstName)
}

}

}
usersByAddressName()




function twochildren(array){
    let two=array.filter((element)=>element.childreen.length > 2)
    return {haveTwoChildren:two}
        }
        console.log(twochildren(array))





        function getUsersAfterAddSalary(array){
            
            array.forEach(element=>{

if(element.jobDescription.salary<1500){

    element.jobDescription.salary=element.jobDescription.salary*0.5
}


            })
            return array;
        }
       console.log(addToSalary(array)) 




console.log("My Name is Inas Tabazah")