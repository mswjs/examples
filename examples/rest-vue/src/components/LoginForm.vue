<template>
  <div class="form">
    <div v-if="userData">
      <h1>
        <span data-testid="firstName">{{ userData.firstName }}</span>
        <span data-testid="lastName">{{ userData.lastName }}</span>
      </h1>
      <p data-testid="userId">{{ userData.id }}</p>
    </div>

    <form @submit="checkForm" method="post">
      <div>
        <label for="username">Username:</label>
        <input id="username" name="username" v-model="username" />
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'loginForm',
  data: function() {
    return {
      username: '',
      userData: null,
    }
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault()
      fetch('/login', {
        method: 'POST',
        body: JSON.stringify({
          username: this.username,
        }),
      })
      .then((res) => res.json())
      .then((res) => (this.userData = res))
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
