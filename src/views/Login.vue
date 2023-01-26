<template>
  <div>
    Login screen
    <Input :floatingLabel="'Login'" :inputType="'text'" v-model="form.login" :required="true"/>
    <Input :floatingLabel="'Password'" :inputType="'password'" v-model="form.password" :required="true"/>
  </div>
</template>

<script lang="ts">
import Input from '@/components/shared/Input.vue';
import {defineComponent} from 'vue';
export default defineComponent({
    name: 'login',
    components: {
        Input,
    },
    data() {
        return {
            form: {
                login: false,
                password: false,
            }      
        }
    },
})
</script>

<style>

</style>