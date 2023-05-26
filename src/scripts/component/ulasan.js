class UlasanWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="Ulasan">
      <div>
        <h1>Ulasan Web</h1>
        <div class="row">
          <div class="col">
            <div class="testimoni" tabindex="0">
              <img src="./images/orang1.jpeg" alt="orang 1">
              <div class="nama">
                <p>Marsya Farras<p>
              </div>
              
              <div class="bintang">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, explicabo hic, aperiam quidem, quo officiis iusto repellat repellendus sed non incidunt blanditiis repudiandae sequi iste voluptatem numquam .
              </p>
            </div>
          </div>
          
          <div class="col">
            <div class="testimoni" tabindex="0">
              <img src="./images/orang2.jpeg" alt="orang 2">
              <div class="nama">
                <p>Muhammad Syarul</p> 
                </div>
              
              <div class="bintang">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>

              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus commodi ab unde repellat minima illum, ea praesentium excepturi, quis asperiores pariatur voluptate in sint, nihil sunt. Adipisci, consequuntur delectus.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimoni" tabindex="0">
              <img src="./images/orang3.jpeg" alt="orang 3">
              <div class="nama">
                <p>Syifa Ningsih</p>
              </div>
              
              <div class="bintang">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, iusto. Quo ex dignissimos illum. Magnam ipsam blanditiis commodi qui nulla? Laudantium, atque quo. Atque nisi aliquam odit. Voluptates, corporis nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
  }
}

customElements.define('ulasan-web', UlasanWeb);
