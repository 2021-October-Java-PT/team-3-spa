export default function Activities(activities) {
  return `
<form action="${activities.activity}"
  <label for="activity-select">Choose an option:</label>
    <select name="activity-select" id="activity-select">
        <option value="type">Type</option>
        <option value"participants">Participants</option>
        <option value"price">Price</option>
    </select>
    <br></br>
    <input type="submit" value="Submit">
    </form>
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
