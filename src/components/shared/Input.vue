<template>
  <div class="form-floating">
    <input 
        :type="inputType" 
        class="form-control" 
        id="idFloatingLabel" 
        :value="modelValue"
        :placeholder="inputPlaceholder" 
        @input="$emit('update:modelValue', $event.target.value)"
        :required="required"
        >
    <label :for="id">{{ floatingLabel }}</label>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
    props: {
        inputType: {
            type: [String],
            default: 'text',
        },
        inputPlaceholder: {
            type: [String],
            default: ' '
        },
        floatingLabel: {
            type: [String],
            required: true,
            default: ''
        },
        inputValue: {
            type: [String, Number],
        },
        required: {
            type: [Boolean],
            default: false,
        },
        modelValue: {
            type: [String, Number],
            default: "",
        },
    },
})
</script>

<style>

</style>