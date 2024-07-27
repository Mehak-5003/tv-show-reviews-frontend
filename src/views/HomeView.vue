<template>
  <div>
    <NavBar />
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search TV Shows"
    />
    <TVShowList :shows="filteredShows" />
  </div>
</template>

<script>
import TVShowList from '@/components/TVShowList.vue';
import NavBar from '@/components/NavBar.vue';
import api from '@/services/api';

export default {
  components: {
    TVShowList,
    NavBar,
  },
  data() {
    return {
      searchQuery: '',
      allShows: [],
    };
  },
  computed: {
    filteredShows() {
      return this.allShows.filter(show =>
        show.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  created() {
    this.fetchTVShows();
  },
  methods: {
    async fetchTVShows() {
      try {
        const response = await api.getTVShows();
        this.allShows = response.data.data.map(item => {
          return {
            id: item.id,
            title: item.attributes.Title,
            description: item.attributes.Description[0].children[0].text,
          };
        });
      } catch (error) {
        console.error(error.message);
      }
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
