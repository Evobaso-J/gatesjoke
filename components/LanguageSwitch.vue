<template>
  <q-select
    v-model="$i18n.locale"
    :options="$i18n.availableLocales"
    :label="$t('language')"
    rounded
    outlined
  />
</template>

<script lang="ts" setup></script>
