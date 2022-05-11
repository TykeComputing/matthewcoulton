const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    header {
      align-items: center;
      justify-content: center;
      max-height: 30%;
      z-index: 5;
      background-color:  white;
    }

    nav {
      height: 30px;
      padding: 1px;
      display: flex;
      margin: auto;
      max-width: 650px;
      align-items: center;
      justify-content: space-between;
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
      color: #000;
      text-decoration: none;
      font-size: 12px;
      font-weight: 500;
    }
    
    nav a:hover {
      /*box-shadow: inset 0 -2px 0 0 #fff;
      background-color: #ddd;
      z-index:; -1;*/
      text-decoration: underline;
    }

    h1 {
      font-size: 34px;
      font-weight: bold;
      font-family: kepler-w03-light-scd-cp,serif;
      font: normal normal normal 2em 'eb garamond',serif;
      text-align: center;
      letter-spacing: 0.2em;
      margin-top: 0.67em;
      line-height: normal;
      overflow-wrap: break-word;
      min-height: 27px;
    }

    .headerbanner {
      display: flex;
      margin: auto;
      margin-bottom: 15px;
      width: 80%;
      max-width: 960px;
      justify-content: space-around;
      align-items: center;
      position: relative;
      top: 15px;
      background-color: white;
    }

    .titletext {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 50%;
      min-width: 500px;
      max-height: 125px;margin-top: -10px;
      margin-left: 20px;
      margin-right: 20px;
    }

    .titlesubtext {
      margin-top: -30px;
      margin-bottom: 5px;
      letter-spacing: 0.2em;
      font-family: kepler-w03-light-scd-cp,serif;
      font: normal normal normal 14px/1.4em 'eb garamond',serif;
      font-weight: bold;
      line-height: normal;
      min-height: 27px;
    }

    .leftlogos {
      display: flex;
      width: 30%;
      justify-content: space-between;
      align-items: center;
    }

    #arlogo {
      width: 90%;
      display: flex;
    }

    #siglogo {
      display: flex;
    }

    .rightlogos {
      display: flex;
      width: 30%;
      justify-content: space-between;
      align-items: center;
    }

    #mdalogo {
      margin: auto;
      display: flex;
    }

    #acelogo {
      display: flex;
      margin: auto;
      width: 65%;
    }

    #spotlightlogo {
      display: flex;
      width: 55%;
    }

    .menubar {
      background: url("img/banner.png") repeat-x 0 100%;
      background-color: transparent;
      min-height: 8px;
      z-index: 1;
    }

    /*Dropdown Content - Hidden by default*/
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: white;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 2;
      align: center;
    }

    /*Links inside the dropdown*/
    .dropdown-content a {
      color: black;
      padding: 1px 16px;
      display: block;
    }

    /*Same effect on dropdown hover as standard a links*/
    .dropdown:hover {
      /*box-shadow: inset 0 -2px 0 0 #fff;
      background-color: #ddd;*/
      text-decoration: underline;
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
      <a href="https://www.artscouncil.org.uk"><img class="logos" id="acelogo" src="img/logos/acesmall.png" alt="Arts Council England Logo"></a>
      <a href="https://www.spotlight.com/8615-4506-3434"><img class="logos" id="spotlightlogo" src="img/logos/spotlight.jpeg" alt="Spotlight Casting Directory Logo"></a>
      </div>
    </div>

    <div class="menubar">
    </div>
    <nav class="navbar">
      <!--TODO: Create Drop Downs within the menu-->
      <a href="index.html"><div class="linkbox"><p class="linkp">HOME</p></div></a>
      <a href="about.html"><div class="linkbox"><p class="linkp">ABOUT</p></div></a>
      <div class="dropdown">
        <a href="performance/performance.html"><div class="linkbox"><p class="linkp">PERFORMANCE</p></div></a>
          <div class="dropdown-content">
            <a href="performance/theatre/theatre.html"><div class="sublinkbox"><p class="linkp">THEATRE</p></div></a>
            <a href="performance/screen/screen.html"><div class="sublinkbox"><p class="linkp">SCREEN</p></div></a>
            <a href="performance/puppetry/puppetry.html"><div class="sublinkbox"><p class="linkp">PUPPETRY</p></div></a>
            <a href="performance/voice/voice.html"><div class="sublinkbox"><p class="linkp">VOICE</p></div></a>
          </div>
      </div>
      <div class="dropdown">
        <a href="creative/creative.html"><div class="linkbox"><p class="linkp">CREATIVE</p></div></a>
          <div class="dropdown-content">
            <a href="creative/directing/directing.html"><div class="sublinkbox"><p class="linkp">DIRECTING</p></div></a>
            <a href="creative/movement-directing/movement-directing.html"><div class="sublinkbox"><p class="linkp">MOVEMENT DIRECTING</p></div></a>
            <a href="creative/producing/producing.html"><div class="sublinkbox"><p class="linkp">PRODUCING</p></div></a>
            <a href="creative/facilitation/facilitation.html"><div class="sublinkbox"><p class="linkp">FACILITATION</p></div></a>
          </div>
      </div>
      <div class="dropdown">
        <a href="teaching/teaching.html"><div class="linkbox"><p class="linkp">TEACHING</p></div></a>
          <div class="dropdown-content">
            <!--TODO: Teaching Pages design-->
          </div>
      </div>
      <div class="dropdown">
      <a href="storytelling/storytelling.html"><div class="linkbox"><p class="linkp">STORYTELLING</p></div></a>
        <div class="dropdown-content">
          <!--TODO: Storytelling Pages design-->
        </div>
    </div>
      <a href="contact.html"><div class="linkbox"><p class="linkp">CONTACT</p></div></a>
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