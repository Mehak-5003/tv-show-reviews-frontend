<template>
  <div>
    <h1>Popular TV Shows</h1>
    <ul v-if="shows.length">
      <router-link
        v-for="show in shows"
        :key="show.id"
        :to="{ name: 'ShowDetails', params: { id: show.id } }"
        custom
        v-slot="{ href, navigate, isActive, isExactActive }"
      >
        <li
          :class="{ 'router-link-active': isActive, 'router-link-exact-active': isExactActive }"
        >
          <a :href="href" @click="navigate">
            <h2>{{ show.title }}</h2>
          </a>
          <p>{{ show.description }}</p>
        </li>
      </router-link>
    </ul>
    <div v-else>No TV shows found.</div>
  </div>
</template>

<script>
export default {
  props: {
    shows: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

h2 {
  margin: 0;
}

p {
  margin: 5px 0;
}
</style>
