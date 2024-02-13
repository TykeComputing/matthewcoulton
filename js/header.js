const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>

  /* Mobile First */

  header {
    padding-right: 2vw;
    margin: 0;
    padding-top: 0;
  }
  
  .titlename {
    background-color: transparent;
    color: white;
    text-align: center;
    font-size: 25px;
    font-weight:normal;
    text-decoration:underline;
    font-family: kepler-w03-light-scd-cp,'Lato',serif;
    letter-spacing: 0.2em;
    padding-top: 0.8em;
    margin: 0;
    line-height: normal;
    overflow-wrap: break-word;
    min-height: 27px;
  }

  .titlelink {
    text-decoration: none;
    text-align: right;

  }

  /* Desktop Styling */
  @media only screen and (min-width: 768px) {

  .titlename {
    font-size: 40px;
    text-align: right;
  }

  }

  </style>

  <header>
    <div>
      <a href="index.html" class="titlelink"><h1 class="titlename">MATTHEW COULTON</h1></a>
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