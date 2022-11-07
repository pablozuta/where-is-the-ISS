getISS();



async function getISS(){
    const URL_ISS ='https://api.wheretheiss.at/v1/satellites/25544'
    const response = await fetch(URL_ISS);
    const data = await response.json();
    console.log(data);
   
    document.getElementById("root").innerHTML = `Name: ${data.name.toUpperCase()}`
    document.getElementById("altitude").innerHTML = `Altitude: ${data.altitude}`
    document.getElementById("velocity").innerHTML = `Velocity: ${data.velocity}`
    document.getElementById("visibility").innerHTML = `Visibility: ${data.visibility.toUpperCase()}`
  

}