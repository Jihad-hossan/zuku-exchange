// // get elements
// const choose_crypto = document.getElementById('choose-crypto');
// const currency_form = document.getElementById('currency-form');
// const msg = document.querySelector('.msg');
// const details = document.querySelector('.msg-details');
// const c_result = document.querySelector('.result');
// const iso = document.querySelector('.iso');

// // Form Submit
// currency_form.onsubmit = (event) => {
//     event.preventDefault();

//     let amount = currency_form.querySelector('input[name="amount"]');
//     let crypto = currency_form.querySelector('select[name="choose-crypto"]');
//     let currency = currency_form.querySelector('select[name="select-currency"]');
    

//     if( amount.value == '' || crypto.value == '' || currency.value == ''){
//         msg.innerHTML = setAlert('All fields are required');
//     }else{

//         let result = 0;
//         let choose_cry = crypto.value;
//         let rate = 0;

//         if( choose_cry == 'busd' ){
//             switch(currency.value){
//                 case 'bdt' :
//                     rate = 110.5;
//                     break;
//                 case 'cad' :
//                     rate = 1.26;
//                     break;
//                 case 'cny' :
//                     rate = 7.11;
//                     break;
//                 case 'eur' :
//                     rate = 0.96;
//                     break;
//                 case 'gbp' :
//                     rate = 0.84;
//                     break;
//                 case 'inr' :
//                     rate = 80.5;
//                     break;
//                 case 'jpy' :
//                     rate = 138.82;
//                     break;
//                 case 'rub' :
//                     rate = 60.55;
//                     break;
//                 case 'usd' :
//                     rate = 1;
//                     break;
//             }
//         }else if(choose_cry == 'usdc'){
//             switch(currency.value){
//                 case 'bdt' :
//                     rate = 110.5;
//                     break;
//                 case 'cad' :
//                     rate = 1.26;
//                     break;
//                 case 'cny' :
//                     rate = 7.11;
//                     break;
//                 case 'eur' :
//                     rate = 0.96;
//                     break;
//                 case 'gbp' :
//                     rate = 0.84;
//                     break;
//                 case 'inr' :
//                     rate = 80.5;
//                     break;
//                 case 'jpy' :
//                     rate = 138.82;
//                     break;
//                 case 'rub' :
//                     rate = 60.55;
//                     break;
//                 case 'usd' :
//                     rate = 1;
//                     break;
//             }
//         }else if(choose_cry == 'usdt'){
//             switch(currency.value){
//                 case 'bdt' :
//                     rate = 110.5;
//                     break;
//                 case 'cad' :
//                     rate = 1.26;
//                     break;
//                 case 'cny' :
//                     rate = 7.11;
//                     break;
//                 case 'eur' :
//                     rate = 0.96;
//                     break;
//                 case 'gbp' :
//                     rate = 0.84;
//                     break;
//                 case 'inr' :
//                     rate = 80.5;
//                     break;
//                 case 'jpy' :
//                     rate = 138.82;
//                     break;
//                 case 'rub' :
//                     rate = 60.55;
//                     break;
//                 case 'usd' :
//                     rate = 1;
//                     break;
//             }
//         }
//         result = amount.value / rate;

//         // define min fee
//         let Min_Fee = 0.05;
//         let Tax_Fee = 0.5;

//         let result_with_Min_Fee = result - Min_Fee;
//         let result_with_tax = (result_with_Min_Fee / 100) * Tax_Fee;
//         let totalResult = result_with_Min_Fee - result_with_tax;

//         c_result.innerHTML = `${result.toFixed(2)}`;
//         iso.innerHTML = `${crypto.value}`;

//         // total crypto
//         details.innerHTML =  `${ amount.value} ${ currency.value } = ${ totalResult.toFixed(2) } ${ crypto.value } `, 'success';
//     }
// }

let btc = document.getElementById('bitcoin');

let liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",
    // "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
})