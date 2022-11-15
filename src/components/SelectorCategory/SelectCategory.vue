<template>
  <div class="select-category"> 
    <button :class="[isActive === 'all' ? 'active' : '', 'btn']" @click="setActiveMenu('all')">All</button>
    <button :class="[isActive === 'design' ? 'active' : '', 'btn']" @click="setActiveMenu('design')">Design</button>
    <button :class="[isActive === 'adobe' ? 'active' : '', 'btn']" @click="setActiveMenu('adobe')">Adobe</button>
    <button :class="[isActive === 'uiux' ? 'active' : '', 'btn']" @click="setActiveMenu('uiux')">UI/UX</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  data() {
    return {
      isActive: 'all',
    }
  },
  methods: {
    setActiveMenu(value: string) {
      this.isActive = value
      this.$emit('filterData', this.isActive)
    }
  }
})
</script>

<style>
.select-category {
    padding:  0 2em 2em 2em;
    display: flex;
    justify-content: center;
}
</style>