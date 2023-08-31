let calculation = localStorage.getItem('calculation' || '');

      displayCalculation();

      function updateCalculation(value){
        calculation += value;
        displayCalculation();
      }

      function saveCalculation(){
        localStorage.setItem('calculation', calculation);
      }


      function displayCalculation(){
        document.querySelector('.js-calculation')
        .innerHTML = calculation;
      }

      function converToFahrenheit(celsius){
     return(celsius* 9 / 5) +32;
     }

     function convertToCelsius(fahrenheit){
      return(fahrenheit - 32) * 5 / 9;
     }

     function convertTemperatureToF(){
      const inputElement = document.querySelector('.js-C-input');
      let conversion = Number(inputElement.value);
      document.querySelector('.js-C')
      .innerHTML = `${converToFahrenheit(conversion)} F`
     }

     function convertTemperatureToC(){
      const inputElement = document.querySelector('.js-F-input');
      let conversion = Number(inputElement.value);
      document.querySelector('.js-F')
      .innerHTML = `${convertToCelsius(conversion)} C`
     }

    
        function handleConversionKeydownF(event){
          if(event.key === 'Enter'){
          convertTemperatureToC();
        }
      }
     
        function handleConversionKeydownC(event){
          if(event.key === 'Enter'){
          convertTemperatureToF();
        }
      }