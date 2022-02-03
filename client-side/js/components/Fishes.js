export default function Fishes(fishes) {
    return ` 
    <h1> Welcome to thee Aquarium</h1>
    <ul class='fishes-list'>
    ${fishes
    .map((fishes)=> {
    return `
    <li class='fishes-list__title'>${fishes.species-name}
    </li> 
    `;
    }) 
    .join('')}
    </ul> 
    `;
}