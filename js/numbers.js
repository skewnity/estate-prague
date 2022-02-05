const soldNumber1 = document.querySelector('.sold-1');
const soldNumber2 = document.querySelector('.sold-2');
const soldNumber3 = document.querySelector('.sold-3');

function randomSale(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

soldNumber1.textContent = randomSale(200, 230) + ' prodejů';
soldNumber2.textContent = randomSale(180, 200) + ' prodejů';
soldNumber3.textContent = randomSale(160, 180) + ' prodejů';

