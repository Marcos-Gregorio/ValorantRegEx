
/* 
const BtnAction = document.getElementById('SubmitBtn')
BtnAction.addEventListener('click', function(){
    alert('foi') 
    try{
        ValidateEmail('email')
    }catch(error){
        
        alert(error.message)
    }
  
    
}) 
*/


const email = document.getElementById('email')
const password = document.getElementById('password')
let ErrorEmail = document.getElementById('ErrorEmail')

email.addEventListener('change',()=>{
    try{
        ValidateEmail('email')
    }catch(error){
        ErrorEmail.innerHTML = error.message
       
    }
   
})
let ErrorPass = document.getElementById('ErrorPass')
password.addEventListener('change',()=>{
    try{
        ValidadePassword('password')
    }catch(error){
       ErrorPass.innerHTML = error.message
    }
})

function ValidateEmail(element){
    let StringValue = document.getElementById(element).value
    let Verification = StringValue.match(/@/g)
    if(!Verification){
        throw new Error('- Email invalido,insira o "@" para continuar ')
    
    }else{
        let SecondeVerification = StringValue.match(/(?=^)[a-zA-Z0-9_\.]{2,64}(?=@)/gm)
       
        if(!SecondeVerification){
            throw new Error('- Email invalido,use no minimo 2 caracter')
        }else{
            let ThirdVerification = StringValue.match(/(?<=@)\w{2,7}\.+\w{2,5}/gm)
            if(!ThirdVerification){
                throw new Error('Provedor invalido')
            }else{
                alert('Email válido')
            }
        
        }  
}
}
function ValidadePassword(element){
    let ValidadePassword = document.getElementById(element).value
    let PassVerification = ValidadePassword.match(/(?=^)[a-bA-z0-9_\.\-\*\@]{8,20}(?=$)/gm)
   if( !PassVerification){

    throw new Error('Para senha ser valida,ela tem que possuir no minimo:\n 8 caracter, uma letra minúscula, uma letra maiúscula, um número,  um caractere especial.')
   }else{
        alert('Senha Cadstrada com sucesso.')
   }
}

 

