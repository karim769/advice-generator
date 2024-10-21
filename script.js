
function fetchData(){
fetch("https://api.adviceslip.com/advice")
.then(res => {

    return res.json();

}).then(dataObject => {

        changeContent(dataObject.slip.advice,dataObject.slip.id);
    
})
}

fetchData();

document.querySelector("main >div").addEventListener('click',() =>{

fetchData();

})


function changeContent(advice,id){

    document.querySelector('p').textContent=`Advice #${id}`;
    document.querySelector('h2').textContent=`"${advice}"`;




}