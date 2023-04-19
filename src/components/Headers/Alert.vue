<template>
    <div v-if="display" class="fixed w-full z-50 w-10/12 justify-center items-center flex">
        <div :class="color" class="text-white px-6 py-4 border-0 rounded">
            <span class="text-xl inline-block mr-5 align-middle">
                <i class="fas fa-bell"></i>
            </span>
            <span class="inline-block ml-2 align-middle mr-8">
                {{ text }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        display: Boolean,
        text: String,
        color: String
    }
}
</script>