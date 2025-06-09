const textInput = document.getElementById('user-input');
const displayText = document.getElementById('display-text');

// Функция debounce 
function debounce(fn, delay) {
    var timer = null;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}

//
const updateText = (e) => {
    displayText.textContent = e.target.value;
}

textInput.addEventListener('input', debounce(updateText, 300));