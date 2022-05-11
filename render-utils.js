export function renderCrystal(crystal) {
    const div = document.createElement('div');
    div.classList.add('crystal');

    const h1 = document.createElement('h1');
    h1.textContent = crystal.name;

    const img = document.createElement('img');
    img.src = crystal.image;

    const a = document.createElement('a');
    a.href = `/details/?id=${crystal.id}`;
     
    a.append(h1, img);
    div.append(a);

    return div;}