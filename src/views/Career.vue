<template>
    <div class=" w-full">
        <FirstSection />
         <ThirdSection class=" dark:hidden md:hidden" />
        <SecondSection />
        <ThirdSection class=" dark:block hidden  md:block" />
         <FourthSection />
         <FifthSection />
      
    </div>
</template>
<script>
import FirstSection from '../components/sections/career/FirstSection.vue'
import SecondSection from '../components/sections/career/SecondSection.vue'
import ThirdSection from '../components/sections/career/ThirdSection.vue'
import FourthSection from '../components/sections/career/FourthSection.vue'
import FifthSection from '../components/sections/career/FifthSection.vue'
export default {
    components: {
        FirstSection,
        SecondSection,
        ThirdSection,
        FourthSection,
        FifthSection
    },
}
</script>