import addProduct, { handleaddProductBind } from "./addProducts.js"


let home=()=>{
    const router={
    "/addProduct":[addProduct,handleaddProductBind]
    };
    

(async()=>{
    try {
        let res=await fetch("http://localhost:5000/api/products/all");
        let products=await res.json();
        console.log(res)
        if(res.status==200){
            console.log(products);
            let modifiedArray=products.map(product=>{  
                return ` 
                <div class="card">
                <div class="product-card">
                <img src="${product.image}" alt="${product.title}" class="prod-img" />
                <div class="product-info">
                <h3>${product.title}</h3>
                <p> Price : ${product.price}</p>
                <p> Category : ${product.category}</p>
                <p>Description : ${product.description}</p>
                </div>
                </div>
                </div>
                `;
            }).join("");
            root.innerHTML=`
            <h1>Home</h1>
            <div class='products-list'>${modifiedArray}</div>
            <a href="addProduct" id="add">Add Product</a>
            `

            // Inject the product cards into #products-list
            // const productsList = document.querySelector("#products-list");
            // productsList.innerHTML = modifiedArray.join('');
                setTimeout(()=>{
            let anchor=document.querySelector("#add")
            
            const handelClickAnchor=(e)=>{
            let path=e.target.pathname
            e.preventDefault()
            history.pushState({},"",`${path}`)
            root.innerHTML=router[path][0]()
            if(router[path][1]){
            router[path][1]()
        }
    }
    anchor.addEventListener('click',handelClickAnchor)
});
         }
         else{
            console.log("Something is Wrong");
         }
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    })();
    
}



export default home