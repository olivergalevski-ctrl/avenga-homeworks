import { fetchData } from "./api.js";
import { createToggleButton, updateToggleButton, renderTableRows } from "./helpers.js";

const tableBody = document.querySelector("#planetsTable tbody");
const loadPlanetsBtn = document.getElementById("loadPlanetsBtn");

const toggleBtn = createToggleButton(loadPlanetsBtn);

function renderPlanets(page = 1) {
    const apiUrl = `https://swapi.dev/api/planets/?page=${page}`;

    fetchData(apiUrl)
        .then(data => {
            const planets = data.results;

            tableBody.innerHTML = "";

            renderTableRows(planets, tableBody);

            toggleBtn.style.display = "inline-block";

            updateToggleButton(toggleBtn, page, renderPlanets);

            loadPlanetsBtn.style.display = "none";
        });
}

loadPlanetsBtn.addEventListener("click", () => renderPlanets(1));