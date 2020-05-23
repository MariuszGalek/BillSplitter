const price = document.getElementById('price');
const people = document.getElementById('people');
const tip = document.getElementById('tip');
const span = document.querySelector('.cost');
const error = document.querySelector('.error');
const button = document.querySelector('.count')
const info = document.querySelector('.cost-info')

const countCheck = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);
    const finalPrice = (newPrice + (newPrice * newTip)) / newPeople;
    info.style.display = "block"; 
    span.innerHTML = finalPrice.toFixed(2);
}

const checkTip = () => {
    if (price.value === '' || people.value === '' || tip.value == 0) {
            error.textContent = 'Wpisz brakujące wartości!';
            span.innerHTML = "";
            info.style.display = "none";
    } else {
        countCheck();
        error.textContent = "";
        price.value = "";
        people.value = "";
        tip.options.selectedIndex = 0;
    }
}

button.addEventListener('click', checkTip);
