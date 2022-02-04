export default function ActivityGenerator(boredObj) {
  if (boredObj.type == "cooking") {
    return `
    <iframe src="https://giphy.com/embed/N23cG6apipMmQ" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <h2 id="activity-listing">${boredObj.activity}</h2>
        
            <h3 class="activity-item">Participants: ${boredObj.participants}</h3>
            
        
        <button class="reset-cooking" id="project-button" >Try Again</button>
        <br></br>
        <button class="reset-activities" id="project-button"> Activities</button>
        

        `;
  }

  if (boredObj.type == "education") {
    return `
    <div><iframe width="480" height="480" frameBorder="0"  src="https://giphy.com/embed/znA8n5vnpH4kCw5tWm/video" class="giphy-embed" allowFullScreen></iframe></div>

    <h2 id="activity-listing">${boredObj.activity}</h2>
    
    <h3 class="activity-item">Participants: ${boredObj.participants}</h3>
            
        
        <button class="reset-education" id="project-button"  >Try Again</button>

        <br></br>
        <button class="reset-activities" id="project-button"> Activities</button>
       
    `;
  }

  if (boredObj.type == "music") {
    return `
    <iframe src="https://giphy.com/embed/jRZ9aoOjivJMgrRYLy" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <h2 id="activity-listing">${boredObj.activity}</h2>
    
    <h3 class="activity-item">Participants: ${boredObj.participants}</h3>
            
        
        <button class="reset-music" id="project-button">Try Again</button>
        <br></br>
        <button class="reset-activities" id="project-button"> Activities</button>
       
    `;
  }

  if (boredObj.type == "recreational") {
    return `
    <iframe src="https://giphy.com/embed/70tblROO7cNSqfc188" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <h2 id="activity-listing">${boredObj.activity}</h2>
    
    <h3 class="activity-item">Participants: ${boredObj.participants}</h3>
            
       
        <button class="reset-recreation" id="project-button">Try Again</button>
        <br></br>
        <button class="reset-activities" id="project-button"> Activities</button>
        
    `;
  }

  if (boredObj.type == "relaxation") {
    return `
   <iframe src="https://giphy.com/embed/vc7fzbdrDEeTwcruYd" width="480" height="480"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <h2 id="activity-listing">${boredObj.activity}</h2>
    
    <h3 class="activity-item">Participants: ${boredObj.participants}</h3>
           
       
        <button class="reset-relaxation" id="project-button">Try Again</button>
        <br></br>
        <button class="reset-activities" id="project-button"> Activities</button>
        
    `;
  }

  if (boredObj.type == "social") {
    return `
    <iframe src="https://giphy.com/embed/xUA7bdrXps7IlbZGzS" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> 
    <h2 id="activity-listing">${boredObj.activity}</h2>
   
    <h3 class="activity-item">Participants: ${boredObj.participants}</h3>
           
        
        <button class="reset-social" id="project-button">Try Again</button>
        <br></br>
        <button class="reset-activities" id="project-button"> Activities</button>
       
    `;
  }
}

// return `
//     <p>${activity.activity}</p>
//     `;
