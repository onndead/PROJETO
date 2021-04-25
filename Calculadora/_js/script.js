function insert(num){
    document.form.textbox.value = document.form.textbox.value + num; 
}
function clean(){
    document.form.textbox.value = ''; 
}
function total(){
    var x = document.form.textbox.value; 
    if(x){ //Verifica se X é verdadeiro.
        document.form.textbox.value = eval(x);
    }
}
function back(){
    var exp = document.form.textbox.value; 
    document.form.textbox.value = exp.substring(0, exp.length-1);
}






function insert(num){
    document.form.textbox.value = document.form.textbox.value + num; 
}