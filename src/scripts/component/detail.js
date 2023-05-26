class ItemDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1 class="title-content" id="content-web" tabindex="0"> Detail Rumah Makan</h1>
    <div id="rumahmakan-detail" class="row"></div>
    <div id="Review-detail"></div>
    <div id="favoriteButtonContainer"></div>
      `;
  }
}

customElements.define('item-detail', ItemDetail);
