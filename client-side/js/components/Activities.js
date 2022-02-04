export default function Activities() {
  return `
  <h1 class="activities-page-header">Bored?</h1>

  <iframe  src="https://giphy.com/embed/l378AEZceMwWboAQE" width="480" height="329" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    
<div class="activities-grid-container">
    <button type="button" class="cooking-button" id="activity-button"  >Cooking</button>
    <button type="button" class="education-button" id="activity-button" >Education</button>
    <button type="button" class="music-button" id="activity-button" >Music</button>
    <button type="button" class="recreational-button" id="activity-button">Recreation</button>
    <button type="button" class="relaxation-button" id="activity-button" >Relaxation</button>
   <button type="button" class="social-button" id="activity-button" >Social</button>
   
   
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
