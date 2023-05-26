class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
      <div class="logo">
      <a href="/"><h2>Rumah Makan</h2></a>
      </div>
      
      <button class="menu" aria-label="menu drop-down">
        <span ></span>
        <span ></span>
        <span ></span>
      </button>

      <ul>
          <li><a href="#/home">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="https://www.instagram.com/24hoursofsya/">About Us</a></li>
      </ul>
    </nav>
      `;
  }
}

customElements.define('app-bar', Appbar);
