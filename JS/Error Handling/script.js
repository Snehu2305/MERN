try{
    console.log(age)
}catch(err){
    console.log(err);
    console.log(err.name);
    console.log(err.message);
}

// /*******Throwing an error *******/

try{
    const ans = prompt("Are you a robot ?");
    if(ans === 'Y'){
        throw new Error('Robots are strictly avoided!')
        // throw "Robot's are not allowed !!";
    }
}catch(err){
    console.log(err);
}finally{
    console.log("Important bussiness logic");
}




