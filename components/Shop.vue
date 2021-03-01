<template>
  <div class="shop-card">
    <div><img class="shop-image" :src="$props.image" alt="" /></div>
    <div class="shop-info">
      <div class="shop-name">{{ $props.shopName }}</div>
      <dic class="shop-score">{{ $props.score }}</dic>
      <div class="shop-description">{{ $props.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    image: {
      type: String,
      required: true,
    },
    shopName: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
})
</script>
