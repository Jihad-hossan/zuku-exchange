// get elements
const choose_crypto = document.getElementById('choose-crypto');
const currency_form = document.getElementById('currency-form');
const msg = document.querySelector('.msg');
const details = document.querySelector('.msg-details');
const c_result = document.querySelector('.result');
const iso = document.querySelector('.iso');
const convert = document.querySelector('.convert');

convert.onclick = (event) => {
    event.preventDefault();

    let amount = currency_form.querySelector('input[name="amount"]');
    let crypto = currency_form.querySelector('select[name="choose-crypto"]');
    let currency = currency_form.querySelector('select[name="select-currency"]');

    if( amount.value == '' || crypto.value == '' || currency.value == ''){
        msg.innerHTML = setAlert('All fields are required');
    }else{

        let result = 0;
        let choose_cry = crypto.value;
        let rate = 0;

        if( choose_cry == 'busd' ){
            switch(currency.value){
                case 'bdt' :
                    rate = 110.5;
                    break;
                case 'cad' :
                    rate = 1.33;
                    break;
                case 'cny' :
                    rate = 7.05;
                    break;
                case 'eur' :
                    rate = 0.97;
                    break;
                case 'gbp' :
                    rate = 0.85;
                    break;
                case 'inr' :
                    rate = 81.01;
                    break;
                case 'jpy' :
                    rate = 140.24;
                    break;
                case 'rub' :
                    rate = 61.10;
                    break;
                case 'usd' :
                    rate = 1;
                    break;
            }
        }else if(choose_cry == 'usdc'){
            switch(currency.value){
                case 'bdt' :
                    rate = 110.5;
                    break;
                case 'cad' :
                    rate = 1.33;
                    break;
                case 'cny' :
                    rate = 7.05;
                    break;
                case 'eur' :
                    rate = 0.97;
                    break;
                case 'gbp' :
                    rate = 0.85;
                    break;
                case 'inr' :
                    rate = 81.01;
                    break;
                case 'jpy' :
                    rate = 140.24;
                    break;
                case 'rub' :
                    rate = 61.10;
                    break;
                case 'usd' :
                    rate = 1;
                    break;
            }
        }else if(choose_cry == 'usdt'){
            switch(currency.value){
                case 'bdt' :
                    rate = 110.5;
                    break;
                case 'cad' :
                    rate = 1.33;
                    break;
                case 'cny' :
                    rate = 7.05;
                    break;
                case 'eur' :
                    rate = 0.97;
                    break;
                case 'gbp' :
                    rate = 0.85;
                    break;
                case 'inr' :
                    rate = 81.01;
                    break;
                case 'jpy' :
                    rate = 140.24;
                    break;
                case 'rub' :
                    rate = 61.10;
                    break;
                case 'usd' :
                    rate = 1;
                    break;
            }
        }
        result = amount.value * rate;
        c_result.innerHTML = `${result}`;
        iso.innerHTML = currency.value;


        // define min fee
        let Min_Fee = 0.08;
        let Tax_Fee = 1.5;
        
        let result_with_tax = (amount.value / 100) * Tax_Fee;
        let result_afer_added_tax =  amount.value - result_with_tax;
        
        let result_with_Min_fee = result_afer_added_tax - Min_Fee;

        let final_result = result_with_Min_fee * rate;





// // Form Submit
// currency_form.onsubmit = (event) => {
//     event.preventDefault();

//     let amount = currency_form.querySelector('input[name="amount"]');
//     let crypto = currency_form.querySelector('select[name="choose-crypto"]');
//     let currency = currency_form.querySelector('select[name="select-currency"]');
    

    // if( amount.value == '' || crypto.value == '' || currency.value == ''){
    //     msg.innerHTML = setAlert('All fields are required');
    // }else{

    //     let result = 0;
    //     let choose_cry = crypto.value;
    //     let rate = 0;

    //     if( choose_cry == 'busd' ){
    //         switch(currency.value){
    //             case 'bdt' :
    //                 rate = 110.5;
    //                 break;
    //             case 'cad' :
    //                 rate = 1.33;
    //                 break;
    //             case 'cny' :
    //                 rate = 7.05;
    //                 break;
    //             case 'eur' :
    //                 rate = 0.97;
    //                 break;
    //             case 'gbp' :
    //                 rate = 0.85;
    //                 break;
    //             case 'inr' :
    //                 rate = 81.01;
    //                 break;
    //             case 'jpy' :
    //                 rate = 140.24;
    //                 break;
    //             case 'rub' :
    //                 rate = 61.10;
    //                 break;
    //             case 'usd' :
    //                 rate = 1;
    //                 break;
    //         }
    //     }else if(choose_cry == 'usdc'){
    //         switch(currency.value){
    //             case 'bdt' :
    //                 rate = 110.5;
    //                 break;
    //             case 'cad' :
    //                 rate = 1.33;
    //                 break;
    //             case 'cny' :
    //                 rate = 7.05;
    //                 break;
    //             case 'eur' :
    //                 rate = 0.97;
    //                 break;
    //             case 'gbp' :
    //                 rate = 0.85;
    //                 break;
    //             case 'inr' :
    //                 rate = 81.01;
    //                 break;
    //             case 'jpy' :
    //                 rate = 140.24;
    //                 break;
    //             case 'rub' :
    //                 rate = 61.10;
    //                 break;
    //             case 'usd' :
    //                 rate = 1;
    //                 break;
    //         }
    //     }else if(choose_cry == 'usdt'){
    //         switch(currency.value){
    //             case 'bdt' :
    //                 rate = 110.5;
    //                 break;
    //             case 'cad' :
    //                 rate = 1.33;
    //                 break;
    //             case 'cny' :
    //                 rate = 7.05;
    //                 break;
    //             case 'eur' :
    //                 rate = 0.97;
    //                 break;
    //             case 'gbp' :
    //                 rate = 0.85;
    //                 break;
    //             case 'inr' :
    //                 rate = 81.01;
    //                 break;
    //             case 'jpy' :
    //                 rate = 140.24;
    //                 break;
    //             case 'rub' :
    //                 rate = 61.10;
    //                 break;
    //             case 'usd' :
    //                 rate = 1;
    //                 break;
    //         }
    //     }
    //     result = amount.value * rate;
    //     c_result.innerHTML = `${result}`;
    //     iso.innerHTML = currency.value;


    //     // define min fee
    //     let Min_Fee = 0.05;
    //     let Tax_Fee = 0.5;
        
    //     let result_with_tax = (amount.value / 100) * Tax_Fee;
    //     let result_afer_added_tax =  amount.value - result_with_tax;
        
    //     let result_with_Min_fee = result_afer_added_tax - Min_Fee;

    //     let final_result = result_with_Min_fee * rate;
    

        // total crypto
        details.innerHTML =  `You will get = ${ final_result.toFixed(2) } ${ currency.value } `, 'success';
    }
}