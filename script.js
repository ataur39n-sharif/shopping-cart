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


function ProductChange(increase) {

    const phnInput = document.getElementById("phnQnty");
    const phnCount = parseInt(phnInput.value);
    let phnNewCount = phnCount;
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

document.getElementById("caseQntyPlus").addEventListener("click", function () {
    caseItem(true);
})

document.getElementById("caseQntyMinus").addEventListener("click", function () {
    caseItem(false);
})

function caseItem(increase) {
    const caseInput = document.getElementById("caseQnty");
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if (increase == true) {
        caseNewCount = caseCount + 1;
    }
    if (increase == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("caseTotal").innerText = "$" + caseTotal;
}