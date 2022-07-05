const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      height: 60px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      position: relative;
      bottom: 5px;
      max-width: 960px;
      margin: auto;
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
      margin: 0 10px;
    }

    .socials  {
      position: relative;
      bottom: 20px;
      align: center;
    }

    .menubarup {
      background: url("img/banner.png") repeat-x 0 100%;
      background-position: top;
      background-color: white;
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
    }

    #copyright {
      font-family: kepler-w03-light-scd-cp,serif;
      font-size: 8px;
      line-height: normal;
      font: normal normal normal 17px/1.4em 'eb garamond',serif;
    }


  </style>

  <div class="menubarup"></div>
  <div class="footerwrapper">
    <footer>
      <p id="copyright">&copy; 2022 Matthew Coulton</p>
      <ul class="social-row">
        <li class="socials"><a href="https://twitter.com/matthew_coulton"><i class="fab fa-twitter"></i></a></li>
        <li class="socials"><a href="https://instagram.com/matthew_coulton"><i class="fab fa-instagram"></i></a></li>
        <li class="socials"><a href="https://www.facebook.com/matthewcoultonactor"><i class="fab fa-facebook"></i></a></li>
        <li><a href="https://www.artscouncil.org.uk"><img id="acefull" src="img/logos/acewhite.webp" alt="Sponsored by Arts Council England"></a></li>
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