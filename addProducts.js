import home from "./home.js"
let addProduct=()=>{
    return `
       <div class="addProduct registration-page">
        <form action="">
            <h1>Add Products</h1>
            <div>
                <input type="text" name="title" placeholder="Title">

            </div>
            <div>
                <input type="number" name="price" placeholder="Price">

            </div>
            <div>
                <select name="category">
                    <option value="select" disabled>------Select-Category-----</option>
                    <option value="electronics">Electronics</option>
                    <option value="mensWear">Mens Wear</option>
                    <option value="womensWear">Womens Wear</option>
                    <option value="kidswear">Kids Wear</option> 
                </select>
            </div>
            <div>

                <textarea name="description" placeholder="Description"></textarea>
            </div>
            <div>
                <input type="file" accept="image/*" id="fileinput" name="image">
            </div>
            
        </form>
    </div>
    `
}

export let handleaddProductBind=()=>{
    const state={
  setState(name,value){
    this[name]=value
  }
}
const form=document.querySelector('form')
const inputs=document.querySelectorAll('input')
const textArea=document.querySelector('textarea')
const h1=document.querySelector('h1')

function handelChange(e){
  let {name,value,files}=e.target
  if(name=='image'){
    value=files[0]
    const reader=new FileReader()
    reader.onload=function(){

      form.style.transform='rotateY(180deg)'

      form.style.backgroundImage=`url(${reader.result})`

      form.style.justifyContent="end"
      form.innerHTML=`
        <div>
                <button id="submit" style="transform:rotateY(180deg);">Submit</button>
        </div>
      `
    }
    reader.readAsDataURL(value)
    state.setState(name,value)
  }
  else{
    state.setState(name,value)
  }
}

function handelSubmit(e){
  e.preventDefault()
  console.log(state)
  let {title,price,category,description,image}=state;
  let payload={title,price,category,description,image}
  console.log(category)
  let formData=new FormData()
  for(let input in payload){
    formData.append(input,payload[input]);
  }
  (async()=>{
   try {
     let res=await fetch("http://localhost:5000/api/products/add",{
        method:"POST",
        body:formData
        })
        console.log(res);
        let data=await res.json()
        console.log(data);
        if(res.status==201){
            alert(`${data.message}`)
            history.pushState({},"","/home")
            root.innerHTML=home()
        }else{
           alert(`${data.message}`)

        }   
   } catch (error) {
    console.log(error);
    alert("Something went wrong")
    
   }  
})()
  // inputs.forEach(input=>{
  //   input.value="";
  // })
  // textArea.value=""
  // form.style.backgroundImage="none"
}
form.addEventListener('submit',handelSubmit)
inputs.forEach(input=>{
  input.addEventListener('change',handelChange)
})
textArea.addEventListener('change',handelChange)

}

export default addProduct;
