/* 
    1 : when form update update the price
    2 : get value and data-info
    3 : check teh data-info and update the totalprice
    4 : insert totalprice in price area
*/


// 1
const shopcardform = document.querySelector('.shop-card-form');
shopcardform.addEventListener('change',()=>{
    let totalprice = 0; 
    let inputnumbers = document.querySelectorAll('.input-number');
    inputnumbers.forEach(input =>{
        // 2
        let datainfo = input.getAttribute('data-info');
        let value = input.value;
        // 3
        if(datainfo === 'Shoes'){
            totalprice += value * 90000;
        }else if (datainfo === 'Hoodie'){
            totalprice += value * 120000;
        }else if (datainfo === 'T-shirt'){
            totalprice += value * 40000;
        }
        // 4
        const pricearea = document.querySelector('.price-pay-area');
        pricearea.innerHTML = totalprice;
    })
})