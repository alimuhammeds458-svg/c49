//method of objact[keys,valus,assign]
let exit = new Date();
function  chackuserdata(){
    console.log("start ch at",new Date() - exit)
   setTimeout(
    function(){
       console.log('found user')
         console.log("end ch at",new Date() - exit)
    },
    5000 
   );
}
function senEmail(){
     console.log("start se at",new Date() - exit)
    setTimeout(
        function(){
      console.log('send email')
        console.log("end se at",new Date() - exit)
        },3000
    );
}    

function updatUser(){
     console.log("start up at",new Date() - exit)
    setTimeout(
        function(){
      console.log('updat user')
        console.log("end up at",new Date() - exit)
        },1500
    );
}    


chackuserdata()
senEmail()
updatUser(
    
)
let x=9;
