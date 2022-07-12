function GreetingPeople(usersName){
    var userNamesArray = [];
    function insertedName(usersName, language){
        if(usersName === ""){
            return
        }
        if(userNamesArray.includes(usersName)){
            return
        }
        if(language === null){
            return
        }
        userNamesArray.push(usersName);
    }

    function greetingUsers(usersName, language){
        if(usersName === " "){
            return "Please Enter Your Name On The Text Field.";
        }
        if(language !== null){
            if(language === "english"){
                return "Hello, " + usersName;
            }
            if(language === "zulu"){
                return "Sawubona, " + usersName;
            }
            if(language === "xhosa"){
                return "Molo, " + usersName;
            }
        }
        else {
            return "Please Select A Language Of Your Choice."
        }
    }





return{
    insertedName,
    greetingUsers,
    userNamesArray

}

}