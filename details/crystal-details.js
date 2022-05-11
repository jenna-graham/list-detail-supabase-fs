import { getCrystalById } from '../fetch-utils.js';

const crystalName = document.getElementById('crystal-name'); 

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const crystal = await getCrystalById(id);
    crystalName.textContent = crystal.name;
    
}
loadData();


