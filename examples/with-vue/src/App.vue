<script lang="ts">
import { defineComponent } from 'vue'

interface User {
  firstName: string
  lastName: string
}

interface Movie {
  title: string
}

export default defineComponent({
  data() {
    return {
      user: null as User | null,
      movies: [] as Array<Movie>
    }
  },
  methods: {
    getUser() {
      fetch('https://api.example.com/user')
        .then((response) => response.json())
        .then((user) => this.user = user)
    },
    listMovies() {
      fetch(new URL('/graphql', location.href), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `
            query ListMovies {
              movies {
                title
              }
            }
          `
        })
      })
        .then((response) => response.json())
        .then((response) => this.movies = response.data.movies)
    }
  },
  mounted() {
    this.getUser()
  }
})
</script>

<template>
  <div>
    <p v-if="user" id="greeting">Hello, {{ user.firstName }}!</p>
    <div>
      <ul v-if="movies" id="movies">
        <li v-for="movie in movies" :key="movie.title">{{ movie.title }}</li>
      </ul>
      <button @click="listMovies">Fetch movies</button>
    </div>
  </div>
</template>

