<template>
  <div class="w-full dark:bg-[#161616]">
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
  </div>
</template>


<script>
import FirstSection from "../components/sections/about/FirstSection.vue";
import SecondSection from "../components/sections/about/SecondSection.vue";
import ThirdSection from "../components/sections/about/ThirdSection.vue";
import FourthSection from "../components/sections/about/FourthSection.vue";
export default {
  components: {
    ThirdSection,
    FirstSection,
    SecondSection,
    FourthSection,
  },
};
</script>