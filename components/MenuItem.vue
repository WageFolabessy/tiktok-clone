<template>
    <div class="w-full items-center hover:bg-gray-100 p-2.5 rounded-md">
        <div class="flex items-center lg:mx-0 mx-auto cursor-pointer">
            <Icon :name="icon" :color="colorString" :size="sizeString" />
            <span
                :class="`text-[${colorString}]`"
                class="lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px]"
            >
                {{ iconString }}
            </span>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps(['iconString', 'colorString', 'sizeString']);
    const {iconString, colorString, sizeString} = toRefs(props);

    let icon = ref('');
    if(iconString.value === 'Untuk Anda') icon.value = 'mdi:home';
    if(iconString.value === 'Mengikuti') icon.value = 'line-md:account-add';
    if(iconString.value === 'Teman') icon.value = 'ci:group';
    if(iconString.value === 'Jelajahi') icon.value = 'ri:search-line';
    if(iconString.value === 'LIVE') icon.value = 'ri:live-line';
    if(iconString.value === 'Profil') icon.value = 'line-md:account';
</script>
