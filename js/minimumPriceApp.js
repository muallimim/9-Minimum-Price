document.getElementById("btnFindMinimum").addEventListener("click", findminimum);



function findminimum(){

    
    var price1;
    var price2;
    var price3;
    var max;

    price1 = document.getElementById("price1").value;
    price2 = document.getElementById("price2").value;
    price3 = document.getElementById("price3").value;

    max = price1;

    if(parseInt(price2) > parseInt(max))
    max = price2

    if(parseInt(price3) > parseInt(max))
    max = price3

    document.getElementById("result").innerHTML = max;

}