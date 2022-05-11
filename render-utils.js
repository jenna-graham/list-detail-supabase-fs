export function renderCrystal(crystal) {
    const div = document.createElement('div');
    div.classList.add('crystal');

    

    const img = document.createElement('img');
    img.src = crystal.image;

    const a = document.createElement('a');
    a.href = `/details/?id=${crystal.id}`;
     
    a.append(img);
    div.append(a);

    return div;}