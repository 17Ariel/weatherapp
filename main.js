const key = "Your own api key";
const forms = document.querySelector("#formsubmit");
const getWeather = async () => {
  const kelv = 273.15;
  let result = "";
  const url = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Manaoag,ph&appid=${key}`
  );
  const data = await url.json();
  let temp = parseFloat(data.main.temp) - kelv;
  let feels = parseFloat(data.main.feels_like) - kelv;
  let final_temp = temp.toFixed(2);
  let final_feels = feels.toFixed(2);
  result += `
    <li>
      <p>Humidity</p>
      <span>${data.main.humidity}%</span>
    </li>
    <li>
      <p>Wind</p>
      <span>${data.wind.speed} mps</span>
    </li>
    <li>
      <p>Feels Like</p>
      <span>${final_feels} C</span>
    </li>
  `;
  document.querySelector("h3").innerHTML = data.name;
  document.querySelector("h2").innerHTML = `${final_temp} C`;
  document.querySelector("ul").innerHTML = result;
};

const searchWeather = async (e) => {
  e.preventDefault();
  const kelv = 273.15;
  let result = "";
  let input = document.querySelector("#search_input").value;
  input.value = "";
  const url = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input},ph&appid=${key}`
  );
  try {
    const data = await url.json();
    let temp = parseFloat(data.main.temp) - kelv;
    let feels = parseFloat(data.main.feels_like) - kelv;
    let final_temp = temp.toFixed(2);
    let final_feels = feels.toFixed(2);
    result += `
    <li>
      <p>Humidity</p>
      <span>${data.main.humidity}%</span>
    </li>
    <li>
      <p>Wind</p>
      <span>${data.wind.speed} mps</span>
    </li>
    <li>
      <p>Feels Like</p>
      <span>${final_feels} C</span>
    </li>
  `;
    document.querySelector("h3").innerHTML = data.name;
    document.querySelector("h2").innerHTML = `${final_temp} C`;
    document.querySelector("ul").innerHTML = result;
  } catch (err) {
    alert("Search not found");
  }
};

forms.addEventListener("submit", searchWeather);
window.addEventListener("load", getWeather);
