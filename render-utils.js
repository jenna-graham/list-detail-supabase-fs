export function renderCrystal(crystal) {
    const div = document.createElement('div');
    div.classList.add('crystal');

    const h1 = document.createElement('h1');
    h1.textContent = crystal.name;

    const img = document.createElement('img');
    img.src = crystal.image;

    const p = document.createElement('p');
    p.textContent = `${crystal.name} is ${crystal.color} and is the stone for the zodiac sign of ${crystal.zodiac}.`;

    const h2 = document.createElement('h2');
    h2.textContent = `it is the stone of ${crystal.healing} and is connected to the ${crystal.chakra} chakra.`;

    
     
    div.append(h1, img, p, h2);

    return div;}