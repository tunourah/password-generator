const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", 
"5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
passwordone = document.getElementById("passwordone");
passwordtwo = document.getElementById("passwordttwo");
console.log(passwordttwo);
let isActivated = false;
let doing = true;

generate.addEventListener("click", function() {
 
        generatePassword()
     
    

})

refresh.addEventListener("click", function() {

    cleer();
})


function generatePassword() {
    if (!isActivated) {
        for (let i=0; i<15; i++) {
            let randomnum = Math.floor(Math.random() * characters.length);
        let randomchar = characters[randomnum];
                passwordone.textContent += randomchar;
                
            
        } 
        isActivated = true;
    } else if (isActivated){
        for (let i=0; i<15; i++) {
            let randomnum = Math.floor(Math.random() * characters.length);
        let randomchar = characters[randomnum];
        passwordtwo.textContent += randomchar;
        
            
        } 
        isActivated = false; 
        
     
    }
    
     
}

function cleer() {
    passwordone.textContent = "";
    passwordtwo.textContent = "";
}   
