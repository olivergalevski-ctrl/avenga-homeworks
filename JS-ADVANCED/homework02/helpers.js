export function createToggleButton(afterElement) {
    const toggleBtn = document.createElement("button");
    toggleBtn.style.display = "none";
    afterElement.insertAdjacentElement("afterend", toggleBtn);
    return toggleBtn;
}

export function updateToggleButton(toggleBtn, page, renderPlanets) {
    if (page === 1) {
        toggleBtn.textContent = "NEXT 10";
        toggleBtn.onclick = () => renderPlanets(2);
    } else {
        toggleBtn.textContent = "PREVIOUS 10";
        toggleBtn.onclick = () => renderPlanets(1);
    }
}

export function renderTableRows(planets, tableBody) {
    for (const planet of planets) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${planet.name}</td>
            <td>${planet.population}</td>
            <td>${planet.climate}</td>
            <td>${planet.gravity}</td>
        `;
        tableBody.appendChild(row);
    }
}