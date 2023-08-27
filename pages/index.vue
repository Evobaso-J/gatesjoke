<template>
  <h1>{{ $t("title") }}</h1>
  <form>
    <label for="locale-select">{{ $t("language") }}: </label>
    <select id="locale-select" v-model="$i18n.locale">
      <option value="en-US">en</option>
      <option value="it-IT">it</option>
    </select>
  </form>
</template>

<script setup lang="ts"></script>
