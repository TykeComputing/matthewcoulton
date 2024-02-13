const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>

  /* MOBILE ONLY */
    @media only screen and (max-width: 768px) {  
      .social-row {
        display: flex;
        flex-direction: row;
        width: 60vw;
        align-items: center;
        justify-content: space-between;
      }
    }

  
  /* MOBILE FIRST */

    footer {
      height: 70px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      align-items: center;
      position: relative;
      bottom: 5px;
      max-width: 100%;
      margin: auto;
      z-index: 5;
      background: transparent;
      justify-content: space-between;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }

    p {
      display: block;
      color: white;
    }
    
    .social-row {
      font-size: 20px;
    }
    
    .social-row li a {
      margin: 0;
      padding-top: 0;
    }

    .socials  {
      position: relative;
      bottom: 20px;
      align: center;
    }

    .menubarup {
      background: url("img/banner.png") repeat-x 0 100%;
      background-position: top;
      background-color: transparent;
      min-height: 8px;
      z-index: 1;
    }

    .fab {
      color: white;
    }

    .footerwrapper {
      background: black;
      width: 100vw;
    }

    #acefull {
      height: 60px;
      position: relative;
      top: 2px;
    }

    #spotlightlogo {
      position: relative;
      height: 25px;
      bottom: 15px;
    }

    #copyright {
      font-family: kepler-w03-light-scd-cp,'Lato',serif;
      font-size: 12px;
      line-height: normal;
      font: normal normal normal 17px/1.4em;
    }

    #acelogo {
      display:none;
    }

    /* DESKTOP STYLING */
    @media only screen and (min-width: 768px) {

      footer {
        height: 70px;
        flex-direction: row;
      }

      .social-row li a {
        margin: 0 10px;
      }

      #copyright {
        font-size: 16px;
      }

      #acelogo {
        display: inline;
      }

      #spotlightlogo {
        position: relative;
        height: 40px;
        bottom: 8px;
      }

    }


  </style>

  <div class="menubarup"></div>
  <div class="footerwrapper">
    <footer>
      <p id="copyright">&copy; 2024 Matthew Coulton</p>
      <ul class="social-row">
        <li class="socials"><a href="https://twitter.com/matthew_coulton" target=”_blank”><i class="fab fa-twitter"></i></a></li>
        <li class="socials"><a href="https://instagram.com/matthew_coulton" target=”_blank”><i class="fab fa-instagram"></i></a></li>
        <li class="socials"><a href="https://www.facebook.com/matthewcoultonactor" target=”_blank”><i class="fab fa-facebook"></i></a></li>
        <li><a href="https://app.spotlight.com/8615-4506-3434" target=”_blank”><img id="spotlightlogo" src="img/logos/spotlight-logo-.webp" /></a></li>
        <li id="acelogo"><a href="https://www.artscouncil.org.uk" target=”_blank”><img id="acefull" src="img/logos/acewhite.webp" alt="Sponsored by Arts Council England"></a></li>
      </ul>
    </footer>
  </div>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Query the main DOM for FA
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    // Conditionally load FA to the component
    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);