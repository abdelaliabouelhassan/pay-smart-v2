<template>
    <div class=" w-full dark:bg-[#161616]">
        <FirstSection />
       <SecondSection />
    </div>
</template>


<script>
import FirstSection from '../components/sections/faq/FirstSection.vue'
import SecondSection from '../components/sections/faq/SecondSection.vue'
export default {
    components: {
        FirstSection,
        SecondSection
    },
}
</script>