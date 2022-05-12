export function renderCrystal(crystal) {
    const div = document.createElement('div');
    div.classList.add('crystal');

    const img = document.createElement('img');
    img.src = `./assets/${crystal.image}.jpg`;

    const a = document.createElement('a');
    a.href = `/details/?id=${crystal.id}`;
     
    a.append(img);
    div.append(a);

    return div;}

export function renderCrystals(crystals) {
    const div = document.createElement('div');
    div.classList.add('crystals');

    const h1 = document.createElement('h1');
    h1.textContent = crystals.name;

    const img = document.createElement('img');
    img.src = `../assets/${crystals.image}.jpg`;

    const p = document.createElement('p');
    p.textContent = `${crystals.name} is ${crystals.color} and is the stone for the zodiac sign of ${crystals.zodiac}.`;

    const h2 = document.createElement('h2');
    h2.textContent = `it is the stone of ${crystals.healing} and is connected to the ${crystals.chakra} chakra.`;

    div.append(h1, img, p, h2);
    return div;
}
