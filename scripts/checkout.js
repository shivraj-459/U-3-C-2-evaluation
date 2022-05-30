
var put=document.querySelector("#confirm").addEventListener("click",myconfirmFn)




function myconfirmFn()
    {
         alert("Your order is accepted") 

         
          content=checkContent()
       
    }

    

    setTimeout(function()
    {
       alert("Your order is being Prepared") 
       console.log("1")
    },3000)
               
    
    
    setTimeout(function()
    {
       alert("Your order is being packed") 
       console.log("2")
    },8000)
    
    
    
    setTimeout(function()
    {
       alert("Your order is out for delivery") 
       console.log("3")
    },10000)
    
    
    setTimeout(function()
    {
       alert("Order delivered") 
       console.log("4")
    },12000)

 