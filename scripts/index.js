const skyBackground = document.querySelector('.sky-display');
const cityName = document.querySelector('.city-name');
const cityNameForm = document.querySelector('#city-name-form');
const temp = document.querySelector('.temp');
const landscape = document.querySelector('.landscape');
const skyMenu = document.querySelector('.sky-menu');

cityNameForm.addEventListener('submit', (event) => {
    let info = new FormData(cityNameForm)
    event.preventDefault();

});

cityNameForm.addEventListener('formdata', (e) => {
    console.log('formdata fired');
  
    // Get the form data from the event object
    let data = e.formData;
    for (var value of data.values()) {
        cityName.textContent = value;
    } 
    cityNameForm.style.display = 'none';   
  
  });
