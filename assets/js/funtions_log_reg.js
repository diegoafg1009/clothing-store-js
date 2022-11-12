function is_empty_log( user_email, user_password ){
    if(user_email==" " && user_password==" "){
        return true;
    }else{
        return false;
    }
}
module.exports = is_empty_log;

function is_empty_regist(user_email, user_password, user_name, user_name_user){
    if(user_email==" " || user_password==" " || user_name==" " || user_name_user==" "){
        return true;
    }else{
        return false;
    }
}
module.exports = is_empty_regist;
