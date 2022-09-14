let menu = document.getElementsByClassName('menu');
let navigation = document.getElementsByClassName('navigation');
let dot_item = document.getElementsByClassName('dot-item');
let video = document.getElementsByClassName('video');
let container = document.getElementsByClassName('container');

function addActivesItemStart(name){
    name[0].className += ' active';
}
addActivesItemStart(dot_item);
addActivesItemStart(video);
addActivesItemStart(container);


function addActive(name,i){
    if(name[i].className.includes('active') === true){
        name[i].className = name[i].className.replace(' active','')
    }else{
        name[i].className += ' active';
    }
    
}

menu[0].addEventListener('click', function(){
    addActive(navigation,0);  
})



function addActives(name,i){
    for(let j = 0; j < name.length;j++){
        name[j].className = name[j].className.replace(' active','')
    }
    if(name[i].className.includes('active') === true){
        
    }else{
        name[i].className += ' active';
    }
}

for(let i = 0; i < dot_item.length; i++){
    dot_item[i].addEventListener('click', function(){
        addActives(dot_item,i);  
        addActives(video,i);    
        addActives(container,i) 
    })

}

let i = 0;
function autoSlide(){
        addActives(dot_item,i);  
        addActives(video,i);    
        addActives(container,i)  
        i=i+1;    
        if(i >= dot_item.length){
        i = 0;   
    }
}

setInterval(autoSlide,3500);

