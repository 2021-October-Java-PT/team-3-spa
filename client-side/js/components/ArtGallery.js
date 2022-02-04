
export default function ArtGallery(pieces) {
  return `
  
      <h1>Art Gallery </h1>
      <h2>Look through art that has been created from around the world and you will see the world from the eyes of the artist.  </h2> 
      <div class='art-gallery'> </div>
      
      <img src="${pieces.primaryImage}" width=480px height=480px/>
      <h1> Title: ${pieces.title}</h1>
       <h2> Culture: ${pieces.culture}</h2>
       <h2> Medium: ${pieces.medium}</h2>
  
       <p>More pieces coming soon</p>
      `;
}

