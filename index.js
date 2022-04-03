// console.log("Hello Ashutosh Deshmukh")

let formSubmit = function(){

        notify =document.getElementById('alert')
        let uiString = `
       
                         <div class="alert alert-danger" role="alert" id="alert">
                         <h4> We will back to you soon.<h4>
                          </div>`;
    
        notify.innerHTML += uiString ;

        setTimeout(()=>{
                
                notify.innerHTML= ''
        },3000)
}
