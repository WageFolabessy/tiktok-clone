<template>
    <div class="text-center text-[28px] mb-4 font-bold">Masuk</div>

    <div class="px-6 pb-1.5 text-[15px]">Email</div>

    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Email"
            v-model:input="email"
            inputType="email"
            :autoFocus="true"
            error=""
        />
    </div>

    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Password"
            v-model:input="password"
            inputType="password"
        />
    </div>
    <div class="px-6 text-[12px] text-gray-600">Lupa password?</div>

    <div class="px-6 pb-2 mt-6">
        <button 
            :disabled="(!email || !password)"
            :class="(!email || !password) ? 'bg-gray-200' : 'bg-[#F02C56]'"
            @click="$event => login()" 
            class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
        >
            Masuk
        </button>
    </div>
</template>
<script setup>
    let email = ref(null);
    let password = ref(null);
    let errors = ref(null);
</script>