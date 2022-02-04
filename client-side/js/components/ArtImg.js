export default function ArtImg(metObject) {
  return `
  
    <img id='page-image' src='${metObject.primaryImage}'/>
    <p id='page-info'> ${metObject.title}</p>
   
    `;
}
