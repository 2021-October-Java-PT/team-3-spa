export default function ArtInfo(artObject){
    return `
    <div>
    <p id=art-info>${artObject.title}</p>
    <img id=page-image src='${artObject.primaryImageSmall}'/>
    </div>
    `;
}