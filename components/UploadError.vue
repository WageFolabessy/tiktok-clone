<template>
    <div class="w-[100%] relative flex justify-center">
        <div 
            class="
                absolute 
                top-6 
                z-50 
                mx-auto 
                bg-black 
                bg-opacity-70 
                text-white 
                px-14 
                py-3 
                rounded-sm 
            "
            :class="errorType ? 'visible' : 'invisible'"
        >
            {{ error }}
        </div>
    </div>
</template>
<script setup>
    const props = defineProps(['errorType']);
    const {errorType} = toRefs(props);

    let error = ref('');

    watch(() => errorType.value, () => {
        if(errorType.value === 'caption'){
            error.value = "Maksimal 150 karakter.";
        }
        else if (errorType.value === 'bio'){
            error.value = "Maksimal 80 karakter.";
        }
        else if (errorType.value === 'file'){
            error.value = "File tidak didukung. Gunakan mp4.";
        }
        else{
            error.value = '';
        }
    });

</script>