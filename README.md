 # Explnation about API
 Open-Meteo(https://open-meteo.com/)
 Open-meteo.com offers precise, location-based weather forecasts data. It's easy to use, providing detailed predictions for temperature, precipitation, wind, and humidity and dosen't need an Authentication key or CORS setting.

 # Reason to choose
 Feeling the warmth lately, I struggled to pick the right jacket. Thought it'd be helpful to create a site offering weather updates and clothing suggestions.

 # Trouble shooting
 ### 1. Contents shrink to fit in the flexbox. 
 
 List to try
 ```
    flex-grow: 1 (grow proportionally)
    flex-shrink: 1 (shrink proportionally)
    flex-basis: auto (initial size based on content size)

    //same as
    flex: 1 1 auto
 ```

 ## 2. Syntex to access JS variables in HTML code
 Need to search more
 ```
   // X
    <h2>Today's {currentDate}</h2>
 ```