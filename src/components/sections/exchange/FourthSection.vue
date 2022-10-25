<template>
  <section class="w-full flex bg-white dark:bg-[#161616] md:pt-96 pt-24 pb-24">
    <div class="m-auto w-full max-w-[1150px] relative p-6">
      <div class="w-full grid grid-cols-2 gap-10">
        <div
          class="
            col-span-2
            w-full
            
            bg-[#F5F6F7]
            dark:bg-[#1F1F1F]
            group
            rounded-3xl
            overflow-hidden
            cursor-pointer 
          "
        >
          <div
            class="
              w-full
              flex
              md:flex-row
              flex-col
              items-center
              md:justify-between md:px-10 pb-10 md:pb-20  pt-16
            "
          >
            <div
              class="
                md:pl-10 
                p-6
                md:p-0
                w-full
                max-w-[552px]
                space-y-5
              "
            >
              <span
                class="
                  font-Inter font-semibold
                  text-[#1B2C42]
                  dark:text-white
                  md:text-5xl
                  text-2xl
                "
                >{{$t('message.Trading') }}</span
              >
              <p
                class="
                  text-[#616C7C]
                  dark:text-[#C3C8CD]
                  md:text-lg
                  text-sm
                  font-medium font-Inter
                "
              >
              {{$t('message.JoinSecurePlatform') }}
              </p>
              
            </div>
            <div class=" max-h-[280px] max-w-[375px] flex w-full h-full">
              <img
                src="../../../assets/laptop1.png" 
                class="w-full h-full group-hover:scale-110  object-cover"
                alt=""
              />
             
            </div>
          </div>
        </div>
    
        <div
          class="
            lg:col-span-1 col-span-2
            w-full
            bg-[#D0F7FF]
            dark:bg-[#3D828F]
            rounded-3xl
            overflow-hidden group  cursor-pointer
          "
        >
          <div class="w-full">
            <div class="lg:pl-10 lg:pt-10 p-6 lg:p-0  lg:pr-5 w-full max-w-[532px] space-y-3 md:space-y-5">
              <span
                class="
                  font-Inter font-semibold
                  text-[#1B2C42]
                  dark:text-white
                  md:text-5xl text-2xl leading-[36px]
                "
                >Deep Liquidity & Fast Withdrawals</span
              >
              <p
                class="
                  text-[#616C7C]
                  dark:text-[#C3C8CD]
                  md:text-lg text-sm
                  font-medium font-Inter
                  max-w-[440px]
                "
              >
                Using multi-party computing we are able to offer fast
                withdrawals while maintaining our security standards. Deposit of
                major fiat currencies including USD, JPY, EUR, SGD, HKD, and AUD
              </p>
            </div>
            <div class="h-[366px] float-right ">
             <img
                src="../../../assets/mobile022.png"
                class="w-full h-full object-cover group-hover:scale-110"
                alt=""
              />
              
            </div>
          
          </div>
        </div>
        <div
          class="
            lg:col-span-1 col-span-2
            relative
            w-full
            bg-[#FFE2EF]
            dark:bg-[#8F3D60]
            rounded-3xl
            overflow-hidden group  cursor-pointer
          "
        >
          <div class="w-full ">
            <div class="lg:pl-10 lg:pt-10 p-6 lg:p-0 lg:pr-5 w-full max-w-[532px] space-y-3 md:space-y-5">
              <span
                class="
                  font-Inter font-semibold
                  text-[#1B2C42]
                  dark:text-white
                  md:text-5xl text-2xl
                "
                >{{$t('message.SecurityAndSafe') }}</span
              >
              <p
                class="
                  text-[#616C7C]
                  dark:text-[#C3C8CD]
                  md:text-lg text-base
                  font-medium font-Inter
                  max-w-[440px]
                "
              >
              {{$t('message.ManageDigitalAssets') }}
              </p>
            </div>
            <div class=" lg:absolute right-0 -bottom-4 max-w-[328px] lg:max-w-max float-right lg:float-none  ">
              <img
                src="../../../assets/shiled00.png"
                class="w-full h-full object-cover group-hover:scale-110"
                alt=""
              />
             
            </div>
          </div>
        </div>
       
        <div
          class="
            col-span-2
            w-full
            bg-[#F5F6F7]
            md:h-[388px]
            dark:bg-[#1F1F1F]
            group
            rounded-3xl
            overflow-hidden
            cursor-pointer 
          "
        >
          <div
            class="
              w-full
              flex
              md:flex-row
              flex-col
              items-start
              md:justify-between md:px-10 pb-10 md:pb-0
            "
          >
            <div
              class="
                md:pl-10 md:pt-10
                p-6
                md:p-0
                w-full
                max-w-[552px]
                space-y-5
              "
            >
              <span
                class="
                  font-Inter font-semibold
                  text-[#1B2C42]
                  dark:text-white
                  md:text-5xl
                  text-2xl
                "
                >{{$t('message.OTCDesk') }}</span
              >
              <p
                class="
                  text-[#616C7C]
                  dark:text-[#C3C8CD]
                  md:text-lg
                  text-sm
                  font-medium font-Inter
                "
              >
             {{$t('message.NeedHelp') }}
              </p>
              
            </div>
            <div class=" max-h-[350px] md:max-h-[280px] max-w-[375px] flex w-full h-full">
             <img
                src="../../../assets/phone001.png"
                class="w-full h-full group-hover:scale-110 object-cover"
                alt="" 
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



