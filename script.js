//  Q--> Multiplication Table

function multiplicationTable(num){
    

    for ( let i=1;i<=10;i++){
        console.log(num*i)
    }
}
// multiplicationTable(3);





//  Q-->  temperatute converter

function tempConverter(){
    let tempout = 40;

    let tempin =(tempout*9/5)+32;

    console.log(tempin);
    

}
// tempConverter();





//  Q-->  positive or negative number


function cheakNumberType(){

    let num2 = 3;

    if( num2>0){
        console.log("Number is Positive");
        
    }
    else{
        console.log("Number is Negative");
        
    }
}
// cheakNumberType();
