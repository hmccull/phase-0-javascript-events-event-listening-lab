function addingEventListener() {
    const input = document.getElementById('input');

    input.addEventListener('click', () => alert('I was clicked!'))
}

input.addEventListener('click', addingEventListener);

// // create variable, assign target element as value
// const input = document.getElementById('input');

// // create callback function for event
// function clickAlert() {
//     alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert);

