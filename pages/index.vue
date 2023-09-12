<template>
  <div class="row items-center">
    <div class="col-12 q-px-md">
      <h1 class="text-uppercase text-center">{{ $t("title") }}</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-3 q-px-md">
      <LanguageSwitch />
    </div>
  </div>
</template>

<script setup lang="ts">
import LanguageSwitch from "~/components/LanguageSwitch.vue";
</script>
