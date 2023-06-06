<script setup>
const props = defineProps({
    txt: String,
});
</script>

<template>
    <button
        class="px-6 py-3 bg-red text-white rounded-2xl text-sm font-bold hover:bg-darkred"
    >
        {{ txt }}
    </button>
</template>
