'use-strict'

const container=document.querySelector('.container')
console.log(Array.from(container.children));
console.log(container.children);

const elements=document.querySelectorAll('h1');
let counter=1;
elements.forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        console.log(`clicked on ${e.target.textContent} at index ${i} `);
       
        // let li=document.createElement('li');
        // li.textContent=`element number ${counter}`
        // container.append(li);
        counter++;
    })
})
let content=document.querySelector('.content');
let btn=document.querySelector('.btn')
elements.forEach((element)=>{
    element.addEventListener(('click'),()=>{
        element.classList.toggle('border')
    })
})
const whenBackgroundIsNotSet=()=>{
    button.parentElement.classList.toggle('background')
        button.textContent="Remove Background";
        setBackground=!setBackground;
}
const whenBackgroundIsSet=()=>{
    button.parentElement.classList.toggle('background')
    button.textContent="Add Background";
    setBackground=!setBackground;
}

//working on background feature
const button=document.querySelector('button')
let setBackground=false;
button.addEventListener(('click'),()=>{
    !setBackground?whenBackgroundIsNotSet():whenBackgroundIsSet();
        
    
})


//adding and removing the list of items from the ul
const ul_elements=document.querySelectorAll('li')



// content.innerText="<h1>something is missing</h1>"
// let a=document.querySelector('a');
// console.log(a.getAttribute('href'));
// a.setAttribute('href','changed to something')
// console.log(a.getAttribute('href'));
// container.style.backgroundColor="yellow"


//adding a feature of adding and removing elements


//getting buttons
let li_count=3;
const add=document.querySelector('.add')
const remove=document.querySelector('.delete')
const ul=document.querySelector('ul');
add.addEventListener(('click'),()=>{
    li_count++;
    let li=document.createElement('li')
    let text=`lorem ${li_count}`
    li.textContent=text
    ul.appendChild(li);
})

remove.addEventListener(('click'),()=>{
    ul.firstChild.remove();
})

const input=document.querySelector('.input');
console.log(input.textContent);

ul_elements.forEach((element)=>{
    element.addEventListener(('click'),(e)=>{
        e.target.style.textDecoration="line-through"
    })
})
ul.addEventListener('click',e=>{
    if(e.target.nodeName=='LI'){
        console.log('li element is getting printed');
    }
})

const email=document.tempForm.email;
const value=document.tempForm.value;
const submit=document.tempForm
let email_value='';
let value_value='';

email.addEventListener('input',(e)=>{
    email_value=e.target.value;
    
})

value.addEventListener('input',(e)=>{
    value_value=e.target.value;
})
submit.addEventListener('submit',(e)=>{
    e.preventDefault();

    let li=document.createElement('li')
    let text=email_value+value_value
    li.textContent=text
    ul.appendChild(li);
    console.log(`the final values are as follow :`);
    console.log(`email is :${email_value}`);
    console.log(`value value is : ${value_value}`);
})

let cart=[
    {name:'mobile phone',
     brand:'nokia',
     price:46000
},

    {name:'duplicate',
     brand:'nokia',
     price:46000
}
]

let new_cart=cart.map(item=>{
    if(item.name==='mobile phone'){
        return [item,{name:'free item',price:0}]
    }else{
        return [item];
    }
})
console.log(new_cart);
//using flat map here 

let modified_new_cart=cart.flatMap(item=>{
    if(item.name==='mobile phone'){
        return [item,{name:'free item',price:0}]
    }else{
        return [item];
    }
})
console.log(modified_new_cart);