// On clicking remove button the item should be removed from DOM as well as localstorage.
let coffeeArr=JSON.parse(localStorage.getItem("coffee"));

console.log(coffeeArr)
display(coffeeArr);


function display(x)
{
    var sum=0;
   


  
    
    
    

    x.forEach(function(elem,i)
    {
        sum=sum+Number(elem.price);
        
        var card=document.createElement("div");

        var image=document.createElement("img");
        image.src=elem.image;

        var type=document.createElement("p");
        type.innerText=elem.title;

        var Price=document.createElement("p");
        Price.innerText=elem.price;

        let remove=document.createElement("button");
        remove.innerText="Remove"
           remove.setAttribute("id","remove_coffee")
        remove.addEventListener("click",function()
        {
                     RemoveFn(elem,i)
        })


        card.append(image,type,Price,remove)
        document.querySelector("#bucket").append(card)
    })

    document.querySelector("#total_amount").innerText=sum;
}



function RemoveFn(elem,i)
{
    coffeeArr.splice(i,1);

    localStorage.setItem("coffee",JSON.stringify(coffeeArr));
    window.location.reload()
}



function CheckFn()
{
    window.location.href="checkout.html"
}
