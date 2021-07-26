var images = [],i=0,myvar;
images[0]='1.jpg';
images[1]='2.jpg';
images[2]='3.jpg';
images[3]='4.jpg';
 function changeimages() {
    document.slide.src = images[i];
    if(i<images.length -1){
        i++;
    }else{
        i=0;
    }
}
function slideshow (){
    myvar = setInterval(changeimages,1000);
}

function stop(){
    clearInterval(myvar);
    document.slide.src = images[0];
}
function next(){
    document.slide.src = images[i];
    if(i<images.length -1){
        if(document.slide.src==images[i]){
            document.slide.src = images[i+1];
        }
        i++;
    }else{
        i=0;
    } 
}
function previous(){
    document.slide.src = images[i];
    if(i<images.length -1){
        if(document.slide.src==images[i]){
            document.slide.src = images[i-1];
        }
        i++;
    }else{
        i=0;
    } 
}