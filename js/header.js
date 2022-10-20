const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    header {
      align-items: center;
      margin: auto;
      justify-content: center;
      max-height: 30%;
      z-index: 5;
      background-color:  transparent;
    }

    nav {
      height: 20px;
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
      font-family: kepler-w03-light-scd-cp,'Lato',serif;
      font-weight: 700;
      color: #fff;
      text-decoration: none;
      font-size: 14px;
    }
    
    nav a:hover {
      /*box-shadow: inset 0 -2px 0 0 #fff;
      background-color: #ddd;
      z-index:; -1;*/
      text-decoration: underline;
    }

    h1 {
      font-size: 34px;
      font-weight: 700;
      font-family: kepler-w03-light-scd-cp,'Lato',serif;
      text-align: center;
      letter-spacing: 0.2em;
      margin-top: 0.67em;
      line-height: normal;
      overflow-wrap: break-word;
      min-height: 27px;
    }

    .headerbg {
      background-color: white;
    }

    .headerbanner {
      display: flex;
      height: 85px;
      margin: auto;
      margin-bottom: 15px;
      width: 80vw;
      /*max-width: 960px;*/
      justify-content: space-around;
      align-items: center;
      position: relative;
      top: 10px;
      background-color: white;
      padding:  0;
      max-height: 125px;
    }

    .menubarwrapper {
      width: 100vw;
      background: black;
    }

    .titletext {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 50%;
      min-width: 500px;
      max-height: 125px;
      margin-top: -10px;
      margin-left: 20px;
      margin-right: 20px;
    }

    .titlesubtext {
      margin-top: -30px;
      margin-bottom: 5px;
      letter-spacing: 0.2em;
      font-family: kepler-w03-light-scd-cp,'Lato',serif;
      font-size: 14px;
      font-weight: 700;
      line-height: normal;
      min-height: 27px;
    }

    .leftlogos {
      display: flex;
      width: 30%;
      justify-content: space-between;
      align-items: center;
      margin: auto;
    }

    #arcontainer {
      width 25%;
      margin: auto;
    }

    #arlogo {
      width: 100%;
      margin: auto;
      display: flex;
    }

    #sigcontainer  {
      width 25%;
      margin: auto;
    }

    #siglogo {
      display: flex;
      margin: auto;
    }

    #smcontainer {
      width 25%;
      margin: auto;
      scale: 60%
    }

    #smlogo {
      display: flex;
      width: 100%;
    }

    .rightlogos {
      display: flex;
      width: 30%;
      justify-content: space-between;
      align-items: center;
    }

    #mdacontainer, #acecontainer, #spotlightcontainer {
      width: 30%;
    }

    #mdalogo {
      margin: auto;
      display: flex;
    }

    #acelogo {
      display: flex;
      margin: auto;
      width: 80%;
    }

    #spotlightlogo {
      margin: auto;
      display: flex;
      width: 100%;
    }

    .menubardown {
      background: url("img/banner.png") repeat-x 0 100%;
      background-color: transparent;
      min-height: 8px;
      z-index: 1;
    }

    .menubarup {
      background: url("img/banner.png") repeat-x 0 100%;
      background-position: top;
      background-color: white;
      min-height: 8px;
      z-index: 1;
    }

    .blackbar {
      width: 100vw;
      height: 10px;
      background: black;
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
  <div class="headerbg">
    <div class="blackbar"></div>
    <div class="menubardown"></div>

      <div class="headerbanner">
        <div class="leftlogos">
        <a id="arcontainer" href="https://www.artisticrebellion.co.uk"><img class="logos" id="arlogo" src="img/logos/artisticrebellion.webp" alt="Artistic Rebellion Theatre Logo"></a>
        <a id="smcontainer" href="https://www.slotmachinetheatre.com"><img class="logos" id="smlogo" src="img/logos/slotmachinetheatrelogo.png" alt="Slot Machine Theatre Logo"></a>
        <a id="sigcontainer" href="https://www.soitgoestheatre.com"><img class="logos" id="siglogo" src="img/logos/soitgoes.webp" alt="So It Goes Theatre Logo"></a>  
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
        <a id="mdacontainer" href="https://www.movementdirectorsassociation.com"><img class="logos" id="mdalogo" src="img/logos/mda.webp" alt="Movement Director's Association Logo"></a>
        <a id="acecontainer" href="https://www.artscouncil.org.uk"><img class="logos" id="acelogo" src="img/logos/acesmall.png" alt="Arts Council England Logo"></a>
        <a id="spotlightcontainer" href="https://www.spotlight.com/8615-4506-3434"><img class="logos" id="spotlightlogo" src="img/logos/spotlight.jpeg" alt="Spotlight Casting Directory Logo"></a>
        </div>
      </div>

      <div class="menubarup"></div>

      <div class="menubarwrapper">

        <nav class="navbar">
          <!--TODO: Create Drop Downs within the menu-->
          <a href="index.html"><div class="linkbox"><p class="linkp">HOME</p></div></a>
          <a href="about.html"><div class="linkbox"><p class="linkp">ABOUT</p></div></a>
          <div class="dropdown">
            <a href="performance.html"><div class="linkbox"><p class="linkp">PERFORMANCE</p></div></a>
              <div class="dropdown-content">
                <a href="theatre.html"><div class="sublinkbox"><p class="linkp">THEATRE</p></div></a>
                <a href="film.html"><div class="sublinkbox"><p class="linkp">FILM</p></div></a>
                <a href="puppetry.html"><div class="sublinkbox"><p class="linkp">PUPPETRY</p></div></a>
                <a href="storytelling.html"><div class="sublinkbox"><p class="linkp">STORYTELLING  &  POETRY</p></div></a>
                <a href="voice.html"><div class="sublinkbox"><p class="linkp">VOICE</p></div></a>
                <a href="corporate.html"><div class="sublinkbox"><p class="linkp">CORPORATE</p></div></a>
              </div>
          </div>
          <div class="dropdown">
            <a href="creative.html"><div class="linkbox"><p class="linkp">CREATIVE</p></div></a>
              <div class="dropdown-content">
                <a href="directing.html"><div class="sublinkbox"><p class="linkp">DIRECTING</p></div></a>
                <a href="movement-directing.html"><div class="sublinkbox"><p class="linkp">MOVEMENT DIRECTING</p></div></a>
                <a href="development.html"><div class="sublinkbox"><p class="linkp">IN DEVELOPMENT</p></div></a>
                <a href="producing.html"><div class="sublinkbox"><p class="linkp">PRODUCING</p></div></a>
                <a href="facilitation.html"><div class="sublinkbox"><p class="linkp">FACILITATION</p></div></a>
                <a href="dm.html"><div class="sublinkbox"><p class="linkp">DUNGEON MASTER</p></div></a>
              </div>
          </div>
          <div class="dropdown">
            <a href="teaching.html"><div class="linkbox"><p class="linkp">TEACHING</p></div></a>
              <div class="dropdown-content">
                <!--TODO: Teaching Pages design-->
              </div>
          </div>
          <a href="contact.html"><div class="linkbox"><p class="linkp">CONTACT</p></div></a>
        </nav>
        </div>
      
    </div>
      
    <div class="menubardown"></div>


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