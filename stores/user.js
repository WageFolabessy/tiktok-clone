import {defineStore} from 'pinia';
import axios from '~/plugins/axios';

const $axios = axios().provide.axios;

export const useUserStore = defineStore('user', {
    state: () => ({
        id: '',
        name: '',
        bio: '',
        image: ''
    }),
    actions: {
        async getTokens(){
            await $axios.get('/sanctum/csrf-cookie');
        },
        async login(email, password){
            await $axios.post('/login', {
                email: email,
                password: password
            });
        },
        async register(name, email, password, confirmPassword) {
            await $axios.post('/register', {
              name: name,
              email: email,
              password: password,
              password_confirmation: confirmPassword
            })
        },
        async getUser(){
            let result = await $axios.get('/api/logged-in-user');

            this.$state.id = result.data[0].id;
            this.$state.name = result.data[0].name;
            this.$state.bio = result.data[0].bio;
            this.$state.image = result.data[0].image;
        },
        async logout(){
            await $axios.post('/logout');
            this.resetUser();
        },

        resetUser(){
            this.$state.id = '';
            this.$state.name = '';
            this.$state.email = '';
            this.$state.bio = '';
            this.$state.image = '';
        }
    },
    persist: true,
  })