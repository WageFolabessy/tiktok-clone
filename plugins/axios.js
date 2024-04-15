import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "";
    return {
        provide: {
            axios: axios
        }
    }
});

// Sampai menit 1.31