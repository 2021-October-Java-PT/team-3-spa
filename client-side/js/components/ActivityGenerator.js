export default function ActivityGenerator(boredObj) {
  if (boredObj.type == "cooking") {
    return `
    <iframe src="https://giphy.com/embed/N23cG6apipMmQ" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <h3>${boredObj.activity}</h3>
        <ul class="activity-item__list>
            <li class="activity-item">Participants: ${boredObj.participants}</li>
            <li class="activity-item">Link: ${boredObj.link}</li>
        </ul>
        <button class="reset-cooking">Try Again</button>
        <br></br>
        <button class="reset-activities"> Activities</button>
        <audio level up>
            <source src="assets/Level Up Sound Effect.mp3" type="audio/mpeg"> 
            Your browser does not support the audio tag. 
        </audio>

        `;
  }

  if (boredObj.type == "education") {
    return `
    <div><iframe width="480" height="480" frameBorder="0"  src="https://giphy.com/embed/znA8n5vnpH4kCw5tWm/video" class="giphy-embed" allowFullScreen></iframe></div>
    <h3>${boredObj.activity}</h3>
    <ul class="activity-item__list>
            <li class="activity-item">Participants: ${boredObj.participants}</li>
            <li class="activity-item">Link: ${boredObj.link} </li>
        </ul>
        <button class="reset-education">Try Again</button>
        <br></br>
        <button class="reset-activities"> Activities</button>
        <audio level up>
            <source src="assets/Level Up Sound Effect.mp3" type="audio/mpeg">  
        </audio>
    `;
  }

  if (boredObj.type == "music") {
    return `
    <iframe src="https://giphy.com/embed/jRZ9aoOjivJMgrRYLy" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <h3>${boredObj.activity}</h3>
    <ul class="activity-item__list>
            <li class="activity-item">Participants: ${boredObj.participants}</li>
            <li class="activity-item">Link: ${boredObj.link}</li>
        </ul>
        <button class="reset-music">Try Again</button>
        <br></br>
        <button class="reset-activities"> Activities</button>
        <audio level up>
            <source src="assets/Level Up Sound Effect.mp3" type="audio/mpeg">  
        </audio>
    `;
  }

  if (boredObj.type == "recreational") {
    return `
    <iframe src="https://giphy.com/embed/70tblROO7cNSqfc188" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <h3>${boredObj.activity}</h3>
    <ul class="activity-item__list>
            <li class="activity-item">Participants: ${boredObj.participants}</li>
            <li class="activity-item">Link: ${boredObj.link}</li>
        </ul>
        <button class="reset-recreation">Try Again</button>
        <br></br>
        <button class="reset-activities"> Activities</button>
        <audio level up>
            <source src="assets/Level Up Sound Effect.mp3" type="audio/mpeg">  
        </audio>
    `;
  }

  if (boredObj.type == "relaxation") {
    return `
   <iframe src="https://giphy.com/embed/vc7fzbdrDEeTwcruYd" width="480" height="480"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <h3>${boredObj.activity}</h3>
    <ul class="activity-item__list>
            <li class="activity-item">Participants: ${boredObj.participants}</li>
            <li class="activity-item">Link: ${boredObj.link}</li>
        </ul>
        <button class="reset-relaxation">Try Again</button>
        <br></br>
        <button class="reset-activities"> Activities</button>
        <audio level up>
            <source src="assets/Level Up Sound Effect.mp3" type="audio/mpeg">  
        </audio>
    `;
  }

  if (boredObj.type == "social") {
    return `
    <iframe src="https://giphy.com/embed/xUA7bdrXps7IlbZGzS" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> 
    <h3>${boredObj.activity}</h3>
    <ul class="activity-item__list>
            <li class="activity-item">Participants: ${boredObj.participants}</li>
            <li class="activity-item">Link: ${boredObj.link}</li>
        </ul>
        <button class="reset-social">Try Again</button>
        <br></br>
        <button class="reset-activities"> Activities</button>
        <audio level up>
            <source src="assets/Level Up Sound Effect.mp3" type="audio/mpeg">  
        </audio>
    `;
  }
}

// return `
//     <p>${activity.activity}</p>
//     `;
