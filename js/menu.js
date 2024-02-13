const menuTemplate = document.createElement('template');

menuTemplate.innerHTML = `
  <style>
    nav {
        margin: 0;
        background-color: transparent;
        color: white;
        text-align: right;
        font-size: 25px;
        font-weight:norml;
        font-family: kepler-w03-light-scd-cp,'Lato',serif;
        letter-spacing: 0.1em;
        padding-top: 0;
        padding-right: 0;
        line-height: normal;
        overflow-wrap: break-word;
        min-height: 27px;
        display: block;
        position: fixed;
        right:3vw;
        top: 50%;
        transform: translate(0%, -50%);
        z-index: 20;
    }

    input#creativecheck, input#performancecheck {
      display: none;
    }

    .topmenu a, .submenu a {
      display:block;
      text-decoration: none;
      color: white;
    }

    .collapsible-menu label {
      display: block;
      cursor: pointer;
      background-color: transparent;
      transition: transform .5s;
    }


    /* Change color of link when hovered over or clicked on */
    a:hover, h3:hover, .menuactive {
      color:#b3d4fc;
      /* text-decoration:underline; */
    }

    .submenu {
      font-family: kepler-w03-light-scd-cp,'Lato',serif;
      font-size: 24px;
      font-weight: normal;
      padding: 0 140 0 0px;
      background-color: transparent;
    }

    .topmenutitle {
      font-weight: normal;
    }

    .submenu ul {
      list-style-type: none;
      padding: 0;
    }

    .submenu a {
      transition: 0.25s;
    }

    /* Toggle effect */

    #creativemenu {
      max-height: 0;
      overflow: hidden;
    }

    #performancemenu {
      max-height: 0;
      overflow: hidden;
    }

    input#creativecheck:checked ~ * #creativemenu {
      max-height: 100%;
    }

    input#performancecheck:checked ~ * #performancemenu {
      max-height: 100%;
    }

  </style>


  <nav class="navbar">

    <div class="topmenu">
      
      <div class="collapsible-menu">
        <input type="checkbox" id="creativecheck">
        <h3 class="topmenutitle" id="creative">
          <label for="creativecheck">CREATIVE</label>
            <div class="submenu" id="creativemenu">
              <ul>
                <li><a href="directing.html">Directing</a></li>
                <li><a href="movement-directing.html">Movement Directing</a></li>
                <!-- <li><a href="dramaturgy.html">Dramaturgy</a></li> -->
                <!-- <li><a href="underconstruction.html">Devising & Writing</a></li> -->
              </ul>
            </div>
        </h3>
      </div>

      <div class="collapsible-menu">
        <input type="checkbox" id="performancecheck">
        <h3 class="topmenutitle collapsible" id="performance">
          <label for="performancecheck">PERFORMANCE</label>
          <div class="submenu" id="performancemenu">
            <ul>
              <li><a href="stage.html">Stage</a></li>
              <li><a href="screen.html">Screen</a></li>
              <!-- <li><a href="underconstruction.html">Voice</a></li> -->
              <li><a href="puppetry.html">Puppetry</a></li>
              <!-- <li><a href="mime-movement.html">Mime & Movement</a></li> -->
              <!-- <li><a href="storytelling-poetry.html">Storytelling & Poetry</a></li> -->
            </ul>
          </div>
        </h3>
      </div>
      
      <!-- <a class="topmenulink" href="underconstruction.html"><h3 class="topmenutitle" id="commercial">COMMERCIAL</h3></a> -->

      <!-- <a class="topmenulink" href="teaching.html"><h3 class="topmenutitle" id="teaching">TEACHING</h3></a> -->

      <a class="topmenulink" href="about.html"><h3 class="topmenutitle" id="about">ABOUT</h3></a>

      <a class="topmenulink" href="contact.html"><h3 class="topmenutitle" id="contact">CONTACT</h3></a>

      <!-- <a class="topmenulink" href="photography.html"><h3 class="topmenutitle" id="photography">PHOTOGRAPHY</h3></a> -->
    </div>
  </nav>
`;

class Menu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(menuTemplate.content);
  }
}

customElements.define('menu-component', Menu);