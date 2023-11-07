<template>
  <div>
    Home Content
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAllOilPriceStore } from '@/stores/oilPrice';

const allOilPriceStore = useAllOilPriceStore();

onMounted(() => {
  allOilPriceStore.getAllOilPrice();
});
</script>