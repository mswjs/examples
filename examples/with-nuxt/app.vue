<script setup lang="ts">

interface User {
  firstName: string
  lastName: string
}

const {data: user, pending} = useFetch<User>('https://api.example.com/user')

</script>
<template>
  <div>
    <p v-if="user" id="greeting">Hello, {{ user.firstName }}!</p>
    <p v-if="pending">Loading...</p>
  </div>
</template>
