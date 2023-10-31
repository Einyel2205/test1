const division =  (a, b)=>{
    //result=1;
    if (a==0 || b==0) {
        return 'error';
    }else{
        return a/b;
    }
}
module.exports = division;