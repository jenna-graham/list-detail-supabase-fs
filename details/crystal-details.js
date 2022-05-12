import { getCrystalById } from '../fetch-utils.js';
import { renderCrystals } from '../render-utils.js';

const crystals = document.getElementById('crystals'); 

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const crystalId = params.get('id');
    const crystal = await getCrystalById(crystalId);

    const crystalDiv = renderCrystals(crystal);
    crystals.append(crystalDiv);
    
}
loadData();


