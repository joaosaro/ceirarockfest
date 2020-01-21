<template>
  <footer class="footer">
    <ul class="partners">
      <li v-for="(partner, index) in partners" :key="index">
        <a :href="partner.link">
          <img 
            :src="imageSource(partner.logo)"
            :alt="partner.name"
            :title="partner.name" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'MainNav',

  data () {
    return {
      partners: [
        {
          name: 'ARMC',
          logo: 'armc.png',
          link: 'http://www.armceira.pt/'
        },
        {
          name: 'Junta de Freguesia de Ceira',
          logo: 'viladeceira.png',
          link: 'http://www.freguesiadeceira.pt'
        },
        {
          name: 'Alves Bandeira',
          logo: 'alves_p.png',
          link: 'http://www.alvesbandeira.pt/'
        },
        {
          name: 'Restaurante O Carola',
          logo: 'carola.svg',
          link: 'https://cafecarola.wixsite.com/o-carola/'
        },
        {
          name: 'Gang of Four',
          logo: 'gang_c.png',
          link: 'http://gangoffour-coimbra.blogspot.pt/'
        },
        {
          name: 'CPTSC - Centro Popular de Trabalhadores de Sobral de Ceira',
          logo: 'cpt_p.png',
          link: 'https://www.facebook.com/pages/Centro-Popular-de-Trabalhadores-de-Sobral-de-Ceira/286467644744687'
        },
      ]
    }
  },

  computed: {
    imageSource (image) {
      console.log(image)
      return require("@/assets/images/partners/" + image)
    }
  }
}
</script>

<style scoped lang="scss">
.main-nav__list {
  display: flex;
  align-items: center;
}

.main-nav__link:not(:first-child) {
  margin-left: $spacing-l;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: white;
  }
}
</style>
