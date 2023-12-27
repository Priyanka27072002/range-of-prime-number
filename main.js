var a=parseInt(prompt("Enter the starting number"))
var b=parseInt(prompt("Enter the ending number"))

for(i=a;i<=b;i++){
    if(a==2){
        document.write(i+"<br>")
    }
    
    for(j=2;j<i;j++){
        if(i%j==0){
            var prime=false
            break
        }
        
    }
    if(prime==true){
        document.write(i+"<br>")
    
    }
}