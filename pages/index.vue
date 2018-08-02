<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Fardel
          </h1>
          <h2 class="subtitle">
            Another but complete CMS
          </h2>
        </div>
      </div>
    </section>

    <section class="container section">
      <h2 class="title">Our team</h2>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child notification is-dark">
            <div class="content">
              <p class="title">Mehdi Makhdoumi</p>
              <p class="subtitle">Swift/C# Developer</p>
              <div class="content">
                <img class="image" src="/images/mehdi.jpeg">
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-link">
            <div class="content">
              <p class="title" style="font-size:30px">Sepehr Hamzehlouy</p>
              <p class="subtitle">Python/Javascript/Golang Developer</p>
              <div class="content">
                <img class="image" src="/images/sepehr.jpeg">
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <div class="content">
              <p class="title">Reza Saberi</p>
              <p class="subtitle">Python Developer</p>
              <div class="content">
                <img class="image" src="/images/reza.jpg">
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: "Home"
  }
}
</script>