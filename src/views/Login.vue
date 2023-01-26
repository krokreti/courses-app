<template>
  <div>
    <div class="login-container" >
        <Input :floatingLabel="'Login'" :inputType="'text'" v-model="form.login" :required="true"/>
        <Input :floatingLabel="'Password'" :inputType="'password'" v-model="form.password" :required="true"/>
        <button type="button" class="btn btn-primary btn-lg">Login</button>
        <span>Don't have an account yet?</span>
        <span>Register now!</span>
    </div>
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
.login-container {
    display: flex;
    flex-direction: column;
    padding: 2em;
    margin: 2em;
    gap: 10px;
    border:1px solid #969494;
    border-radius: 5px;
}

.login-container span {
    text-align: center;
}
</style>