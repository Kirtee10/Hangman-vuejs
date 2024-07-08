<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="fa-regular fa-user" />
          Hangman Game
        </q-toolbar-title>
        <q-toggle v-model="darkMode" icon="fa-solid fa-moon" color="dark"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { ref, watch } from 'vue';

const $q = useQuasar();
const darkMode = ref($q.dark.isActive);

watch(darkMode, (newVal) => {
  $q.dark.set(newVal);
});

</script>
