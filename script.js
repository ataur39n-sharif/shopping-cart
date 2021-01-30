// function for phone item------

//system -1 (general type code)

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


//system -2  (code with simple function)

// document.getElementById("phnQntyPlus").addEventListener("click", function () {
//     ProductChange(true);
// })

// document.getElementById("phnQntyMinus").addEventListener("click", function () {
//     ProductChange(false);
// })

//system -3 (phn item code with full function)


// function ProductChange(increase) {

//     const phnInput = document.getElementById("phnQnty");
//     const phnCount = parseInt(phnInput.value);
//     let phnNewCount = phnCount;
//     if (increase == true) {
//         phnNewCount = phnCount + 1;
//     }
//     if (increase == false && phnCount > 0) {
//         phnNewCount = phnCount - 1;
//     }

//     phnInput.value = phnNewCount;
//     const phnTotalCost = phnNewCount * 1219;
//     document.getElementById("phnTotal").innerText = "$" + phnTotalCost;

// }

// function for case Item ------

// system -1 (general type code)

// document.getElementById("caseQntyPlus").addEventListener("click", function () {
//     const caseInput = document.getElementById("caseQnty");
//     const caseInputValue = parseInt(caseInput.value);
//     const caseNewInputValue = caseInputValue + 1;
//     caseInput.value = caseNewInputValue;
//     const caseTotal = caseNewInputValue * 59;
//     document.getElementById("caseTotal").innerText = "$" + caseTotal;
// })

// document.getElementById("caseQntyMinus").addEventListener("click", function () {
//     const caseInput = document.getElementById("caseQnty");
//     const caseInputValue = parseInt(caseInput.value);
//     caseNewInputValue = caseInputValue - 1;
//     caseInput.value = caseNewInputValue;
//     const caseTotal = caseNewInputValue * 59;
//     document.getElementById("caseTotal").innerText = "$" + caseTotal;
// })


//system -2 ( case item code with simple function)

// document.getElementById("caseQntyPlus").addEventListener("click", function () {
//     caseItem(true);
// })

// document.getElementById("caseQntyMinus").addEventListener("click", function () {
//     caseItem(false);
// })


//system-3 ( case item code full function)

// function caseItem(product, increase) {
//     const caseInput = document.getElementById(product);
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (increase == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (increase == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("caseTotal").innerText = "$" + caseTotal;
// }



//shared function

function ProductChange(product,increase) {

    const productInput = document.getElementById(product);
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (increase == true) {
        productNewCount = productCount + 1;
    }
    if (increase == false && productCount > 0) {
        productNewCount = productCount - 1;
    }

    productInput.value = productNewCount;
    let productTotalCost = 0;
    if (product == "phnQnty"){
        productTotalCost = productNewCount * 1219 ;
        document.getElementById("phnTotal").innerText = "$" + productTotalCost;
    }
    if ( product == "caseQnty"){
        productTotalCost = productNewCount* 59 ;
        document.getElementById("caseTotal").innerText = "$" + productTotalCost;
    }
    
    subtotal();
}
function subtotal() {
    const phnQnty = document.getElementById("phnQnty");
    const phnQntyValue = parseInt(phnQnty.value);

    const caseQnty = document.getElementById("caseQnty");
    const caseQntyValue = parseInt(caseQnty.value);

    const subtotal = phnQntyValue * 1219 + caseQntyValue * 59 ;
    document.getElementById("total").innerText = "$" + subtotal;

    const tax = subtotal *0.15;
    document.getElementById("tax").innerText = "$" + tax.toFixed(2);

    const grandTotal = subtotal + tax;
    document.getElementById("grandTotal").innerText = "$" + grandTotal;
}