var data1={image : "abc.jpg",name : " Shreeya Ganji", designation:"Software Developer"};
var data2={image : "ss.jpg",name : "Shreeya", designation:"Frontend developer"};
var isdata1 = true;
var displaydata;
var changemypic = function(){
    if(isdata1){
        displaydata= data2;
        isdata1 = false;
    }
    else{
        displaydata = data1;
        isdata1=true;
    }
    document.getElementById("myimage").src=displaydata.image;
    document.getElementById("myname").innerHTML=displaydata.name;
    document.getElementById("mydesig").innerHTML=displaydata.designation;
}