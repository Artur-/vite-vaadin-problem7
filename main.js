import styles from './style.css?inline'

const str = styles.toString().replace(/\./g,"\n.");

document.querySelector('#app').innerHTML = `
  <h1>Here are the styles!</h1>
  <pre>${str}</pre>
`
