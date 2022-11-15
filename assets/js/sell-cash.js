// get elements
const choose_crypto = document.getElementById('choose-crypto');
const currency_form = document.getElementById('currency-form');
const msg = document.querySelector('.msg');
const details = document.querySelector('.msg-details');
const c_result = document.querySelector('.result');
const iso = document.querySelector('.iso');

// Form Submit
currency_form.onsubmit = (event) => {
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
                    rate = 0.75;
                    break;
                case 'cny' :
                    rate = 0.14;
                    break;
                case 'eur' :
                    rate = 1.03;
                    break;
                case 'gbp' :
                    rate = 1.18;
                    break;
                case 'inr' :
                    rate = 0.012;
                    break;
                case 'jpy' :
                    rate = 0.007;
                    break;
                case 'rub' :
                    rate = 0.017;
                    break;
                case 'usd' :
                    rate = 1;
                    break;
            }
        }else if(choose_cry == 'usdc'){
            switch(currency.value){
                case 'bdt' :
                    rate = 0.009;
                    break;
                case 'cad' :
                    rate = 0.75;
                    break;
                case 'cny' :
                    rate = 0.14;
                    break;
                case 'eur' :
                    rate = 1.03;
                    break;
                case 'gbp' :
                    rate = 1.18;
                    break;
                case 'inr' :
                    rate = 0.012;
                    break;
                case 'jpy' :
                    rate = 0.007;
                    break;
                case 'rub' :
                    rate = 0.017;
                    break;
                case 'usd' :
                    rate = 1;
                    break;
            }
        }else if(choose_cry == 'usdt'){
            switch(currency.value){
                case 'bdt' :
                    rate = 0.009049;
                    break;
                case 'cad' :
                    rate = 0.75;
                    break;
                case 'cny' :
                    rate = 0.14;
                    break;
                case 'eur' :
                    rate = 1.03;
                    break;
                case 'gbp' :
                    rate = 1.18;
                    break;
                case 'inr' :
                    rate = 0.012;
                    break;
                case 'jpy' :
                    rate = 0.007;
                    break;
                case 'rub' :
                    rate = 0.017;
                    break;
                case 'usd' :
                    rate = 1;
                    break;
            }
        }
        // result = amount.value / rate;

        // define min fee
        let Min_Fee = 0.05;
        let Tax_Fee = 0.5;

        let Tax_bad_die = amount.value / 100;
        let Tax_bad_die_2 = Tax_bad_die * Tax_Fee;
        let Min_fee_bad_die = Tax_bad_die_2 - Min_Fee;

        let asol_result = amount.value - Min_fee_bad_die;

        let main_result = asol_result * rate;

        let result_with_tax = (amount.value / 100) * Tax_Fee;
        let result_afer_added_tax =  amount.value - result_with_tax;
        
        let result_with_Min_fee = result_afer_added_tax - Min_Fee;

        let final_result = result_with_Min_fee * rate;
    

        // total crypto
        details.innerHTML =  `${ amount.value} ${ crypto.value } = ${ final_result.toFixed(2) } ${ currency.value } `, 'success';
    }
}