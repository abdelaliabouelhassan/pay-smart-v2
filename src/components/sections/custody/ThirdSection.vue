<template>
  <section class="w-full flex bg-white dark:bg-[#1C1C1C] py-24">
    <div class="m-auto w-full max-w-[1150px] relative p-6">
      <div class="w-full grid grid-cols-2 gap-10">
         <div
          class="
            col-span-2
            w-full
            
             bg-[#F5F6F7]
            dark:bg-[#272727]
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
              md:justify-between md:px-10 pb-20 md:pb-20  pt-5
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
                  md:text-5xl text-2xl
                "
                >Wallex <br  class=" hidden lg:block"/>
                {{$t('message.CustodyPro') }}</span
              >
              <p
                class="
                  text-[#616C7C]
                  dark:md:text-[#C3C8CD] dark:text-[#A9AFB7]
                  md:text-lg text-sm
                  font-medium font-Inter  leading-[24px] md:leading-[30px]
                "
              >
              {{$t('message.CustodyPro2') }}
              </p>
              
            </div>
            <div class=" max-h-[280px] max-w-[275px] flex w-full h-full">
              <img
                src="../../../assets/cardphone001.png" 
                class="w-full h-full group-hover:scale-110  object-cover"
                alt=""
              />
             
            </div>
          </div>
        </div>
      
        <div
          class="
            md:col-span-1 col-span-2
            w-full
            bg-[#2B71C4]
            rounded-3xl
            overflow-hidden
            group  cursor-pointer 
          "
        >
          <div class="w-full">
            <div class="lg:pl-10 lg:pt-10 p-6 lg:p-0  w-full md:max-w-[532px] space-y-4 md:space-y-5">
              <span class="font-Inter font-semibold text-[#FFFFFF] text-2xl md:text-5xl"
                >{{$t('message.Escrow') }}</span
              >
              <p
                class="
                  text-[#FAFBFB] text-sm md:text-lg leading-[24px] md:leading-[30px]
                  font-medium font-Inter md:text-[#C3C8CD] 
                  md:max-w-[440px] max-w-[303px]
                "
              >
              {{$t('message.Escrow2') }}
              </p>
              <button
                class="
                  z-50
                  flex
                  items-center
                  space-x-5
                  md:py-3 py-2
                  px-6
                  bg-[#FFFFFF]
                  hover:bg-opacity-80
                  rounded-full
                "
              >
                <span class="font-semibold text-base font-Inter text-[#0054B8]"
                  >{{$t('message.GetStarted') }}</span
                >
                <div>
                  <svg
                    class="fill-current text-[#0054B8]"
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711L1.70711 17.7071C1.31658 18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                      class="fill-current"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          class="
             md:col-span-1 col-span-2
            relative
            w-full
            bg-[#F5F6F7]
            dark:bg-[#272727]
            rounded-3xl
            overflow-hidden
            group  cursor-pointer
          "
        >
          <div class="w-full">
            <div class="lg:pl-10 lg:pt-10 p-6 lg:p-0 w-full max-w-[532px] space-y-4 md:space-y-5">
              <span
                class="
                  font-Inter font-semibold
                  text-[#1B2C42]
                  dark:text-white
                  md:text-5xl text-2xl
                "
                >{{$t('message.Vault') }}</span
              >
              <p
                class="
                  text-[#616C7C]
                  dark:md:text-[#C3C8CD] dark:text-[#A9AFB7]
                  md:text-lg text-sm
                  font-medium font-Inter
                  max-w-[440px] leading-[24px] md:leading-[30px]
                "
              >
              {{$t('message.Vault2') }}
              </p>
              <button
                class="
                  z-50
                  flex
                  items-center
                  space-x-5
                  md:py-3 py-2
                  px-6
                  bg-[#0054B8]
                  dark:bg-[#2B71C4]
                  hover:bg-opacity-80
                  rounded-full
                "
              >
                <span class="font-semibold text-base font-Inter text-white"
                  >{{$t('message.GetStarted') }}</span
                >
                <div>
                  <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711L1.70711 17.7071C1.31658 18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div class="float-right mt-4 pb-5 mr-6 md:mr-10">
              <img
                src="../../../assets/bigsafe001.png"
                class=" w-[290px]  h-full object-cover group-hover:scale-110"
                alt=""
              />
            </div>
          </div>
        </div>
       

         <div
          class="
            col-span-2
            w-full
            md:h-[400px]
            h-[640px]
            bg-[#F5F6F7]
            dark:bg-[#272727]
            group
            rounded-3xl
            overflow-hidden
            cursor-pointer  relative
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
                  md:text-5xl text-2xl
                "
                >Open <br  class=" hidden md:block"/>
                API Custody</span
              >
              <p
                class="
                  text-[#616C7C]
                  
                  dark:md:text-[#C3C8CD] dark:text-[#A9AFB7]
                  md:text-lg text-sm
                  font-medium font-Inter leading-[24px] md:leading-[30px]
                "
              >{{$t('message.OpenAPI2') }}
              </p>
              <button
                class="
                  z-50
                  flex
                  items-center
                  space-x-5
                  md:py-3 py-2
                  px-6
                  bg-[#0054B8]
                  dark:bg-[#2B71C4]
                  hover:bg-opacity-80
                  rounded-full
                "
              >
                <span class="font-semibold text-base font-Inter text-white"
                  >{{$t('message.EarnNow') }}</span
                >
                <div>
                  <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711L1.70711 17.7071C1.31658 18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </button>
              
            </div>
            <div class=" max-w-[390px] max-h-[300px] md:max-h-[310px] md:p-2 md:max-w-[390px] flex w-full  h-full  absolute right-0 -bottom-2">
             <img
                src="../../../assets/laptop_mobile001.png"
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



