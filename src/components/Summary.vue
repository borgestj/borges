<template>
  <div class="main">
    <h1>Summary</h1>
    <h2>Personal Info</h2>
    <hr class="line" />
    <img class="cv-pic" src="@/assets/image/foto.jpg" alt="Foto Roberto" />

    <h3>Name:</h3>

    <p>Roberto Borges da Silva</p>

    <h3>Birth Date:</h3>

    <p>Oct 15th, 1984</p>

    <h3>Residence:</h3>

    <p>São João Batista, Santa Catarina - Brasil</p>

    <h3 style="clear: left;">Languages:</h3>

    <p>Portuguese (Native)</p>
    <p>English - Basic Level</p>

    <h2>About me</h2>
    <hr class="line" />
    <p>
      Analyzing, understanding the problem, and prioritizing what is most important when developing quality code provides
      efficiency and agility in creating a project. So my focus is to promote practices that influence other developers to
      create ever better projects.
    </p>

    <p>Currently Working as Front-End Developer at Uatt? Company.</p>

    <p>Graduated from Fael College in Systems Analysis and Development.</p>

    <h2>EDUCATION</h2>
    <hr class="line" />

    <h3>2016-2019</h3>

    <p>Information Systems - Fael University Tijucas/SC</p>

    <h3>2007-2009</h3>

    <p>Programming of computers in Java - SENAI São José/SC</p>

    <h2>SKILLS</h2>
    <hr class="line" />

    <h3>WEB DEVELOPMENT & PROGRAMMING</h3>

    <p>HTML / CSS / Bootstrap / LESS / SASS / Javascript / PHP / SQL / MAGENTO2 / VUE</p>

    <h2>Work Experiences</h2>
    <hr class="line" />

    <h3>2020-PRESENT</h3>

    <p>Front-end Developer Vue at Uatt? - SÃO JOSÉ - SANTA CATARINA</p>

    <h3>2019-2020</h3>

    <p>Front-end Developer at Híbrido - BRUSQUE - SANTA CATARINA</p>

    <h3>2015-2019</h3>

    <p>Helpdesk at ASSEINFO - TIJUCAS - SANTA CATARINA</p>

    <h3>2010-2015</h3>

    <p>Partner and Technical at Ihnove Telecom - SÃO JOÃO BATISTA - SANTA CATARINA</p>

    <h3>2005-2010</h3>

    <p>Technical at OI Telecom - FLORIANÓPOLIS - SANTA CATARINA</p>

    <h2>Contacts</h2>
    <hr class="line" />

    <p>E-mail: <a href="mailto:borges.tj@gmail.com">borges.tj@gmail.com</a></p>
    <p>Phone: <a href="tel:+48991768501">(48) 99176-8501</a></p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main {
  padding: 10px 5% 40px 5%;
  margin-bottom: 70px;
  
  .line {
    border-top: 1px solid #e5e5e5;
  }

  .cv-pic {
      float: none;
      width: 100%;
      margin-right: 0px;
      margin-top: 5px;
      margin-bottom: 20px;
      border-radius: 8px;
  }

  h1 {
      color: #fff;
      font-size: 21px;
      text-transform: uppercase;
      font-weight: 700;
  }

  h2 {
      color: #FD468B;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: normal;
      margin-top: 40px;
  }

  h3 {
      color: #FD468B;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
  }

  p {
      color: #fff;
      font-size: 20px;
      font-weight: 600; 
      text-align: justify;
      text-decoration: none;
  }
}

@media (min-width: 1024px) {
  .main {
    padding: 80px 180px 80px 100px;

    .cv-pic {
      float: left;
      width: 200px;
      margin-right: 20px;
      margin-bottom: 20px;
      border-radius: 20px;
    }
  }
}


</style>