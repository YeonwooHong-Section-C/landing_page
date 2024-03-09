// Get today's date
let currentDate = new Date().toLocaleDateString('sv-SE');
document.getElementById('title').innerText = currentDate

// API call for weather
fetch(`https://api.open-meteo.com/v1/gem?latitude=43.6532&longitude=79.3832&hourly=apparent_temperature&start_date=${currentDate}&end_date=${currentDate}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        // Access hour, tempertaure from data
        const timeSet = data.hourly.time;
        const temperatureSet = data.hourly.apparent_temperature;
        
        // Create div tags for the length of time array
        for (i=0; i < timeSet.length; i++){
            // Create row div for each hour
            const row = document.createElement('div');
            row.id = 'row'+i;
            document.getElementById('wrap').appendChild(row);

            // Create a time div and insert a value
            const time = document.createElement('div');
            time.classList.add('time-data');
            time.appendChild(document.createTextNode(timeSet[i].split('T')[1]));
            document.getElementById(row.id).appendChild(time);

            // Create a temperature div and insert a value
            const temperature = document.createElement('div');
            temperature.classList.add('temp-data');
            temperature.appendChild(document.createTextNode(temperatureSet[i] + '°C'));
            document.getElementById(row.id).appendChild(temperature);

            // Create a jacket div
            const jacket = document.createElement('div');
            jacket.classList.add('jacket-data');

            // Assign jaket type according to temperature
            if (temperatureSet[i] <= 5){
                jacket.appendChild(document.createTextNode('Puffer'));
            } else if (6 <= temperatureSet[i] <= 9){
                jacket.appendChild(document.createTextNode('Coat'));
            } else if (6 <= temperatureSet[i] <= 9){
                jacket.appendChild(document.createTextNode('Cardigan'));
            } else {
                jacket.appendChild(document.createTextNode('No jacket'));
            }
            // Insert a jacket type
            document.getElementById(row.id).appendChild(jacket);
        }
    })
    .catch(error => console.error('Error fetching data: ', error));
