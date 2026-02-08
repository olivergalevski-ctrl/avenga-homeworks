import { fetchData } from "./api.js";

const tableBody = document.querySelector("#planetsTable tbody");
const loadPlanetsBtn = document.getElementById("loadPlanetsBtn");

const toggleBtn = document.createElement("button");
toggleBtn.style.display = "none";
loadPlanetsBtn.insertAdjacentElement("afterend", toggleBtn);

function renderPlanets(page = 1) {
    const apiUrl = page === 1
        ? "https://swapi.dev/api/planets/?page=1"
        : "https://swapi.dev/api/planets/?page=2";

    fetchData(apiUrl)
        .then(data => {
            const planets = data.results;
            tableBody.innerHTML = "";

             for (const planet of planets) {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${planet.name}</td>
                    <td>${planet.population}</td>
                    <td>${planet.climate}</td>
                    <td>${planet.gravity}</td>
                `;
                tableBody.appendChild(row);
            };

            toggleBtn.style.display = "inline-block";

            if (page === 1) {
                toggleBtn.textContent = "NEXT 10";
                toggleBtn.onclick = () => renderPlanets(2);
            } else {
                toggleBtn.textContent = "PREVIOUS 10";
                toggleBtn.onclick = () => renderPlanets(1);
            }

            loadPlanetsBtn.style.display = "none";
        })
}

loadPlanetsBtn.addEventListener("click", () => renderPlanets(1));
