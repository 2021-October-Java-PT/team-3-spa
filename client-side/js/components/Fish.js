export default function Species(species) {
    return `
    <h1> Our Fish</h1>
    <ul class='species-list'>
        ${species
        .map((species) => {
        return` <
        li class = 'species-list__ title' > $ {
            species.title
        } <
        input type = 'hidden'
    id = 'speciesId'
    values = $ {
        species.id
    }
    /> <
    /li>
    `;
        })
        .join('')} 
    </ul>
    `;
}