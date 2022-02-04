export default function TestImg(marineObject) {
  return `
    <img id='page-image' src='${marineObject.primaryImage}'/>
    <p id='page-info'> ${marineObject.title}</p>
    `;
}
