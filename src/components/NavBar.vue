<template>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
</template>

<style scoped>
nav {
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: center;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
}

nav a:hover {
  text-decoration: underline;
}
</style>
