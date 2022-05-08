const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 30px;
      padding: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  white;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    nav a {
      font-weight: 500;
      margin: 0 12px;
      color: #000;
      text-decoration: none;
      font-size: 12px;
      font-weight: 500;
    }
    
    nav a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
      background-colour: #ddd;
    }

    h1 {
      font-size: 2em;
      font-weight: 500;
      font-family: kepler-w03-light-scd-cp,serif;
      /*font: normal normal normal 2em 'eb garamond',serif;*/
      text-align: center;
      letter-spacing: 0.2em;
      margin-top: 0.67em;
      line-height: normal;
      overflow-wrap: break-word;
      min-height: 27px;
    }

    .titlesubtext {
      margin-top: -10px;
      margin-bottom: 10px;
      letter-spacing: 0.2em;
      font-family: kepler-w03-light-scd-cp,serif;
      font-size: 30px;
      font-weight: bold;
      line-height: normal;
      min-height: 27px;
      font: normal normal normal 17px/1.4em 'eb garamond',serif;
    }

    .titletext {
      text-align: center;
      width: 50%;
    }

    .leftlogos {
      width: 20%;
      position: relative;
      left: 8px;
    }

    #arlogo {
      position: relative;
      top: 17px;
      width: 60%;
    }

    #siglogo {
      position: relative;
      left: 25px;
    }

    .rightlogos {
      width: 20%;
      position: relative;
      top: 20px;
      right: -15px;
    }

    #mdalogo {
      width: 18%;
      position: relative;
      right: 20px;
      top: -15px;
    }

    #spotlightlogo {
      width: 28%;
      position: relative;
    }

    #acelogo {
      width: 25%;
      position: relative;
      top: -4px;
      left: 20px;
    }

    .headerbanner {
      display: flex;
      justify-content: center;
      align: center;
    }

    .menubar {
      background: url("img/banner.png") repeat-x 0 100%;
      min-height: 8px;
    }

    /*Dropdown Content - Hidden by default*/
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: white;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      align: center;
    }

    /*Links inside the dropdown*/
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    /*Same effect on dropdown hover as standard a links*/
    .dropdown:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
      background-colour: #ddd;
    }

    /*Show  dropdown menu  on hover*/
    .dropdown:hover .dropdown-content {
      display: block;
    }

  </style>
  <header>
    <div class="headerbanner">
      <div class="leftlogos">
        <a href="https://www.artisticrebellion.co.uk"><img class="logos" id="arlogo" src="img/logos/artisticrebellion.webp" alt="Artistic Rebellion Theatre Logo"></a>
        <a href="https://www.sotigoestheatre.com"><img class="logos" id="siglogo" src="img/logos/soitgoes.webp" alt="So It Goes Theatre Logo"></a>
      </div>

      <div class="titletext">
        <div class="titlename">
          <h1>MATTHEW COULTON</h1>
        </div>
        <div class ="titlesubtext">
          <p>Actor | Director | Movement Director</p>
        </div>
      </div>

      <div class="rightlogos">
      <a href="https://www.movementdirectorsassociation.com"><img class="logos" id="mdalogo" src="img/logos/mda.webp" alt="Movement Director's Association Logo"></a>
      <a href="https://www.spotlight.com/8615-4506-3434"><img class="logos" id="spotlightlogo" src="img/logos/spotlight.jpeg" alt="Spotlight Casting Directory Logo"></a>
      <a href="https://www.artscouncil.org.uk"><img class="logos" id="acelogo" src="img/logos/acesmall.png" alt="Arts Council England Logo"></a>
      </div>
    </div>

    <div class="menubar">
    </div>
    <nav class="navbar">
      <!--TODO: Create Drop Downs within the menu-->
      <a href="index.html">HOME</a>
      <a href="about.html">ABOUT</a>
      <div class="dropdown">
        <a href="performance/performance.html">PERFORMANCE</a>
          <div class="dropdown-content">
            <a href="performance/theatre/theatre.html">THEATRE</a>
            <a href="performance/screen/screen.html">SCREEN</a>
            <a href="performance/puppetry/puppetry.html">PUPPETRY</a>
            <a href="performance/voice/voice.html">VOICE</a>
          </div>
      </div>
      <div class="dropdown">
        <a href="creative/creative.html">CREATIVE</a>
          <div class="dropdown-content">
            <a href="creative/directing/directing.html">DIRECTING</a>
            <a href="creative/movement-directing/movement-directing.html">MOVEMENT DIRECTING</a>
            <a href="creative/producing/producing.html">PRODUCING</a>
            <a href="creative/facilitation/facilitation.html">FACILITATION</a>
          </div>
      </div>
      <div class="dropdown">
        <a href="teaching/teaching.html">TEACHING</a>
          <div class="dropdown-content">
            <!--TODO: Teaching Pages design-->
          </div>
      </div>
      <a href="contact.html">CONTACT</a>
    </nav>
    <div class="menubar">
    </div>


  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);