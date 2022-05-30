// Add the coffee to local storage with key "coffee"


let url="https://masai-mock-api.herokuapp.com/coffee/menu";

data();


async function data()
{
    try
    {
        let response=await fetch(url);

        let info=await response.json()

      var x=info.menu.data;
      console.log(x)
       display(x);
    }

    catch(error)
    {
        console.log(error)
    }
}


function display(x)
{
   
    x.forEach(function(elem)
    {
        var card=document.createElement("div");


        var image=document.createElement("img");
        image.src=elem.image;

        var type=document.createElement("p");
        type.innerText=elem.title;

        var Price=document.createElement("p");
        Price.innerText=elem.price;

        let add=document.createElement("button");
        add.innerText="Add to Bucket"
           add.setAttribute("id","add_to_bucket")
        add.addEventListener("click",function()
        {
                     AddFn(elem)
        })


        card.append(image,type,Price,add)
        document.querySelector("#menu").append(card)
    })
}

var coffeeArr=JSON.parse(localStorage.getItem("coffee")) || [];


document.querySelector("#coffee_count").innerText=coffeeArr.length;

function AddFn(elem)
{
    coffeeArr.push(elem)
    localStorage.setItem("coffee",JSON.stringify(coffeeArr))
    window.location.reload()
}


