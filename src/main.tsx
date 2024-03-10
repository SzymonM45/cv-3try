import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <main className='main'>
          <h1 className='header'>header header header headerheader header header header</h1>
          <aside className='personal'>Dane osobowe
              <img className='photo' src="szymon.jpg" alt=""/>
          <ul>
              <li></li>
          </ul></aside>
          <section className='details'>
              <h2>Doświadczenie</h2>
              <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
              <h2>Wykształcenie</h2>
              <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </section>
          
      </main>
   
      
  </React.StrictMode>,
)
