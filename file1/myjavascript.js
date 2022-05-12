/*const ob={
    name: 'Rishav',
    usn : '1DS18EC137',
    sem: 8,
    college: 'Dayanada Sagar College of engineering',
    blogs :['wildlife','nature','blackhole','theory of everything'],
    login: function () {
        console.log('the user logged in');
    },
    logout : function() {
        console.log('the user loggedout');
    },
    
    // Array of objects
    arr : [{ title: 'Chapter 1',likes:30},
        {title:'chapter 2',likes: 40}

    ],
    blog:  function()  {
        this.arr.forEach(function(b){ // callbackunction for forEach
             console.log(b.title,b.likes);
        })
    },
    
        
    };
   ob.blog();

console.log(ob);
console.log(ob.name);
console.log(ob['usn']);
ob.sem=7;
console.log(ob['sem']);
ob['name']='Rishav Raj';
console.log(ob.name);

ob.login();
ob.logout();
......................................................................
*/
/*const para = document.querySelector('p');
para.innerText+='USN : 1DS18EC137';
const cont=document.querySelector('.content');
cont.innerText='lauramera';

//accesing all the paras
const allpara=document.querySelectorAll('p');
allpara.forEach(p =>{
    p.innerText+=' new text';
});
*/
// parents,childrens and siblings
const article =document.querySelector('article');
console.log(article.children); //give all the tags under article tag in console
console.log(Array.from(article.children)); // making the tags in the form of array so that we can iterate through html collection
const arr=Array.from(article.children);
arr.forEach(child =>{   //using foreach loop on array 
    console.log(child.innerText);
});
// getting parent and sibling of an element (tag)
const title =document.querySelector('h2');
console.log(title.parentElement);
console.log(title.nextElementSibling);




