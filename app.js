// import { crystals } from './crystals.js';
import { getCrystals } from './fetch-utils.js';
import { renderCrystal } from './render-utils.js';


async function loadData() {
    const crystals = await getCrystals();
    console.log(crystals);

    const main = document.getElementById('main-section');
    for (let crystal of crystals) {
        const crystalDiv = renderCrystal(crystal);
        main.append(crystalDiv);
  
    }
}
loadData();