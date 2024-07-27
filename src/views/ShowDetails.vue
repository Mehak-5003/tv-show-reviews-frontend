<template>
  <div><NavBar /></div> 
  <div v-if="loading">Loading...</div>
  <div v-if="error">{{ error }}</div>
  <div v-if="!loading && !error">
    <h1>{{ show.title }}</h1>
    <p>{{ show.description }}</p>
    <p><strong>Rating:</strong> {{ show.rating }}</p>
    <p><strong>Release Date:</strong> {{ new Date(show.released).toLocaleDateString() }}</p>
    <p><strong>Genre:</strong> {{ show.genre }}</p>
  </div>
</template>

<script>
import api from '@/services/api';
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar
  },
  data() {
    return {
      show: null,
      loading: true,
      error: null,
    };
  },
  created() {
    this.fetchShowDetails();
  },
  methods: {
    async fetchShowDetails() {
      try {
        const response = await api.getTVShow(this.$route.params.id);
        const item = response.data.data;
        this.show = {
          id: item.id,
          title: item.attributes.Title,
          description: item.attributes.Description[0].children[0].text,
          rating: item.attributes.Rating,
          genre: item.attributes.Genre,
          released: item.attributes.Released,
          image: item.attributes.Image ? item.attributes.Image.url : '',
        };
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  display: block;
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 20px;
}

p {
  margin: 5px 0;
}
</style>

