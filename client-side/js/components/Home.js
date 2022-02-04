
export default function Home() {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./css/style.css" />
      <link rel="stylesheet" href="../css/layout.css" />
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Kavivanar&family=Lato:wght@300&display=swap");
      </style>
  
      <title>Placeholder</title>
    </head>
    <body class="homeBody">
      <header class="header"></header>
  
      <div id="app">
        <h1 class="welcome-header">Mystery Educator!</h1>
        <h2 class="jac-subheading">Presented by JAC Enterpises</h2>

        <p> Oh No! Mystery Educator is for children ages 6-13.</p>
        <div class="content"></div>
      </div>
      <footer class="footer"></footer>
      <script src="./js/index.js"></script>
    </body>
  </html>
    
    
    `;
}
