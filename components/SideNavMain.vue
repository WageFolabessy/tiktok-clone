<template>
    <div
        id="SideNavMain"
        :class="route.fullPath === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'"
        class="fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto"
    >
        <div class="lg:w-full w-[55px] mx-auto">
            <NuxtLink to="/">
                <MenuItem iconString="Untuk Anda" colorString="#F02C56" sizeString="30"/>
            </NuxtLink>
            <MenuItem iconString="Mengikuti" colorString="#000000" sizeString="27"/>
            <MenuItem iconString="Teman" colorString="#000000" sizeString="27"/>
            <MenuItem iconString="Jelajahi" colorString="#000000" sizeString="27"/>
            <MenuItem iconString="LIVE" colorString="#000000" sizeString="27"/>
            <MenuItem iconString="Profil" colorString="#000000" sizeString="27"/>

            <div class="border-b lg:ml-2 mt-2"></div>
            <div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                Pengguna yang disarankan
            </div>
            <div class="lg:hidden block pt-3"></div>
            <div class="cursor-pointer">
                <MenuItemFollow/>
            </div>
            <button class="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">Lihat semua</button>
            <div class="border-b lg:ml-2 mt-2"></div>
            <div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                Ikuti pengguna
            </div>
            <div class="lg:hidden block pt-3"></div>
            <div class="cursor-pointer">
                <MenuItemFollow/>
            </div>
            <button class="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">Lihat semua</button>
            <div class="lg:block hidden text-[11px] text-gray-500">
                <div class="px-2 text-sm text-gray-400 font-bold pt-4">
                    Perusahaan
                </div>
                <div class="flex flex-wrap items-center w-[200px] px-2">
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Tentang</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Ruang Berita</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Kontak</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Karier</div>
                </div>
                <div class="px-2 text-sm text-gray-400 font-bold pt-4">
                    Program
                </div>
                <div class="flex flex-wrap items-center w-[200px] px-2">
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">TikTok for good</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Iklan</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">TikTok LIVE</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Creator Networks</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Developers</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Transparansi</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Reward TikTok</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">TikTok Embeds</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">TikTok Music</div>
                </div>
                <div class="px-2 text-sm text-gray-400 font-bold pt-4">
                    Ketentuan & Kebijakan
                </div>
                <div class="flex flex-wrap items-center w-[200px] px-2">
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Bantuan</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Keamanan</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Ketentuan</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Kebijakan</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Privasi</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Pusat Privasi</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Portal Kreator</div>
                    <div class="mr-2 mt-2 text-xs text-gray-400 font-semibold hover:underline cursor-pointer">Halaman Kebijakan</div>
                </div>
                <div class="px-2 text-sm text-gray-400 font-semibold pt-4">
                    © 2024 TikTok
                </div>
            </div>
            <div class="pb-14"></div>
        </div>
    </div>
</template>
<script setup>
    const route = useRoute();
</script>