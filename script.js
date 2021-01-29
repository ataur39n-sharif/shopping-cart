// document.getElementById("phnQntyPlus").addEventListener("click",function(){
//     const phnInput= document.getElementById("phnQnty");
//     const phnCount = parseInt(phnInput.value);
//     const phnNewCount = phnCount + 1;
//     phnInput.value =phnNewCount;
//     const phnTotalCost = phnNewCount * 1219;
//     document.getElementById("phnTotal").innerText = "$" + phnTotalCost;
// })


// document.getElementById("phnQntyMinus").addEventListener("click",function(){
//     const phnInput = document.getElementById("phnQnty");
//     const phnCount = parseInt(phnInput.value);
//     const phnNewCount = phnCount -1 ;
//     phnInput.value = phnNewCount;
//     const phnTotalCost = phnNewCount * 1219;
//     document.getElementById("phnTotal").innerText= "$" + phnTotalCost;
// })


document.getElementById("phnQntyPlus").addEventListener("click", function () {
    ProductChange(true);
})

document.getElementById("phnQntyMinus").addEventListener("click", function () {
    ProductChange(false);
})

function ProductChange(increase) {

    const phnInput = document.getElementById("phnQnty");
    const phnCount = parseInt(phnInput.value);
    let phnNewCount = phnQnty;
    if (increase == true) {
        phnNewCount = phnCount + 1;
    }
    if (increase == false && phnCount > 0) {
        phnNewCount = phnCount - 1;
    }
    phnInput.value = phnNewCount;
    const phnTotalCost = phnNewCount * 1219;
    document.getElementById("phnTotal").innerText = "$" + phnTotalCost;

}