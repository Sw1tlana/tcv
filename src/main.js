import axios from "axios";

const listContainer = document.querySelector(".list-container");
const exerciseCards = document.querySelectorAll(".exercise-card");
const exerciseDetailsContainer = document.querySelector(".exercise-details-container");

const BASE_URL = "https://energyflow.b.goit.study/api";
const ENDPOINT = "filters";
const Muscles = "Muscles";

async function getMuscules() {
    try {
        const response = await axios.get(`${BASE_URL}/${ENDPOINT}`, {
            params: {
                filter: Muscles,
                page: 1,
                limit: 12,
            }
        });
        console.log(response.data);
        const muscles = response.data.results;
        renderMusculesBody(muscles);
    } catch (error) {
        console.log(error);
    }
}

getMuscules();
function renderMusculesBody(muscles) {
    const markup = muscles.map(({ name, imgUrl }) => {
        return `
        <li class="container-list-item">
    <h2>${name}</h2>
    <img class="exercise-card" data-exercise-id src="${imgUrl}" alt="${name}">
    </li>
        `;
    }).join("");

    listContainer.insertAdjacentHTML("beforeend", markup);
        
}

exerciseCards.forEach((card) => async () => {
    const exerciseId = card.dataset.exerciseId;

    try {
        const response = await axios.get(`${BASE_URL}/exercise/${exerciseId}`);
        const exerciseDetalis = response.data;
        console.log(exerciseDetalis);
        renderExerciseDetails(exerciseDetalis);
    } catch (error) {
        console.log(error);
    }
})

function renderExerciseDetails({ name, bodyPart, equipment, target, _id }) {
    const exerciseDetailsMarkup = `
        <li class="exercise-details">
            <h3>${name}</h3>
            <p><strong>Body Part:</strong> ${bodyPart}</p>
            <p><strong>Equipment:</strong> ${equipment}</p>
            <p><strong>Target:</strong> ${target}</p>
            <p><strong>ID:</strong> ${_id}</p>
        </li>
    `;

    // Очистимо контейнер для деталей вправи
    exerciseDetailsContainer.innerHTML = exerciseDetailsMarkup;
}