export default function Activities() {
  return `
  <h1 class="activities-page-header">Bored?</h1>
  
  <p> Oh no, you're bored!  </p>
  
  <p>It's time to play some games.  Use the buttons below to play the Mystery Educator game.  You will be given tasks to play with your friends.  Play and have fun!</p>

  <iframe src="https://giphy.com/embed/l378AEZceMwWboAQE" width="480" height="329" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    
<div class="activities-grid-container">
    <button type="button" class="cooking-button" >Cooking</button>
    <button type="button" class="education-button" >Education</button>
    <button type="button" class="music-button" >Music</button>
    <button type="button" class="recreational-button">Recreational</button>
    <button type="button" class="relaxation-button" >Relaxation</button>
   <button type="button" class="social-button" >Social</button>
   
   
</div>
   
<h2 class="activities-page-subtitle"> Check out the options above for activity ideas </h2>

    `;
}

// return `
//     <h1 class="activities-page-header">Bored?</h1>
//     <h3 class="activities-page-subtitle>Check out the options below for activity ideas</h3>
//     <div class="activities-grid-container">
//     ${activities
//       .map((activity) => {
//         return `
//           <li class='activities-grid-item'>${activity.species}

//           </li>
//           `;
//       })
//       .join("")}
//       </ul>
//     </div>
//     `;
