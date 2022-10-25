<template>
  <section
    class="w-full flex font-Inter bg-white relative dark:bg-[#161616] pb-10 md:pb-28   md:pt-10"
  >
    <div class="m-auto w-full max-w-[1150px] p-6">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
        <div class="flex flex-col items-start space-y-2 md:space-y-8 max-w-[539px] ">
          <div class="flex flex-col items-start space-y-4">
            <h1 class="font-semibold md:text-5xl text-[32px] text-[#1B2C42] dark:text-white">
             {{$t('message.AboutWallex') }}
            </h1>
          </div>
          <p class="font-medium text-[#616C7C] dark:text-[#A9AFB7] text-sm leading-[24px] md:leading-[30px] md:text-lg">
          {{$t('message.AboutP1') }}<br> <br> {{$t('message.AboutP2') }} <br> <br> {{$t('message.AboutP3') }}
          </p>
         
        </div>

        <div class="w-full h-full">
          <div
            class="
              rounded-3xl
              m-auto
              overflow-hidden
              group
              max-w-[515px]
              md:h-[561px] h-[200px]
            "
          >
            <img
              class="object-cover w-full h-full group-hover:scale-125 md:block hidden"
              src="../../../assets/coinlock.png"
              alt=""
            />
             <img
              class=" w-full h-full group-hover:scale-125 md:hidden"
              src="../../../assets/coinlock11.png"
              alt=""
            />
          </div>
        </div>
       
      </div>
    </div>
  </section>
</template>



