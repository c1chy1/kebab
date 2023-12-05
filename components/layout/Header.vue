<template>
  <div class=" relative bg-[url('/bg.png')]  bg-no-repeat bg-center bg-cover w-full h-screen z-1">
    <ClientOnly >
      <carousel
          class="flex w-full md:block background-dark transition-all duration-500"
          :items-to-show="1"
          :autoplay="4000"
          :wrap-around="true"
          touchDrag
          mouseDrag
      >
        <slide
            v-for="(slide, index) in kebabs"
            :key="slide"
            class=" hero w-full  h-screen pt-36 md:px-12 "
        >
          <div
              class="   relative w-4/5 max-w-full md:w-full  flex flex-col items-center    lg:flex-row-reverse "
          >

            <img
                src="~/assets/images/slides/1.png"
                class="   logo-box  md:w-1/2 object-scale-down"
            />

            <div class=" absolute overflow-hidden flex items-center h-[104px] w-[104px] min-w-[104px]   md:h-[160px] md:min-w-[160px] top-[40px]  md:bottom-[80px] md:right-[90px]  p-2 md:p-2.5  bg-[#ff6d00] rounded-full  object-cover">

              <article class="relative flex flex-col items-center justify-center w-full h-full p-[10px] text-[30px]  md:text-[60px]  md:leading-[80px] border-2 border-dashed border-white  rounded-full text-white font-base font-bebas uppercase transform rotate-[20deg]">

                20% <span class="  text-[24px] md:text-[33px] leading-[20px]">Off</span></article>

            </div>
            <div class="   md:text-left  flex flex-col items-start">
<h3 class="px-1.5   py-1 text-[16px] text-primary border-primary font-500 font-bebas border-dashed border-2 inline-block rounded-[3px] mb-4 font-500 uppercase">
  It is a good time for the great taste of kebabs

</h3>

              <h1 class="  text-[48px]   md:text-[94px] text-primary font-alfa font-500 flex flex-col leading-none  drop-shadow-[4px_5px_#fee7ba] whitespace-pre-line overflow-hidden truncate text-ellipsis uppercase transition-all duration-500">Turkish

              <span class="text-[28px] md:text-[46px] pt-4">Kebab</span>
              </h1>

            </div>
          </div>

        </slide>
      </carousel>
<!--      <carousel
          class="carousel-mobile"
          :items-to-show="1"
          touchDrag
          mouseDrag
          v-model="currentSlide"
      >
        <slide
            v-for="(slide, index) in kebabs"
            :key="slide"
            class="card-carousel flex items-center"
        >

          <div
              v-if="index === 0"
              class="card-box flex flex-col justify-center items-center"
          >
            <img src="~/assets/img/cimb.svg" class="logo-box" />
            <div class="text-box">
              The integration of <span class="bold-text">VR Training</span> has
              injected a new <br />
              level of excitement into CIMB Niaga's training sessions.
            </div>
            <div
                class="btn-readmore flex items-center justify-center"
                @click="toCIMB()"
            >
              READ MORE
            </div>
          </div>
          <div
              v-if="index === 1"
              class="card-box flex flex-col justify-center items-center"
              style="
              border: 0.5px solid #858585;
              background: rgba(25, 48, 75, 0.63);
            "
          >
            <img src="~/assets/img/pcu.svg" class="logo-box" />
            <div class="text-box">
              Primeskills and Petra Digital Institute have joined <br />
              forces to create innovative learning using <br />
              Visual Novels and Virtual Reality.
            </div>
            <div
                class="btn-readmore flex items-center justify-center"
                style="background: #19304b"
                @click="toPCU()"
            >
              READ MORE
            </div>
          </div>
          <div
              v-if="index === 2"
              class="card-box flex flex-col justify-center items-center"
              style="
              border: 0.5px solid #858585;
              background: rgba(25, 48, 75, 0.63);
            "
          >
            <img
                src="~/assets/img/kementrian.svg"
                class="logo-box"
                style="height: 63px; margin-bottom: 21px; margin-top: 0px"
            />
            <div class="text-box">
              Primeskills and the Ministry of Home Affairs (Kemendagri) <br />
              have entered into a collaboration aimed at crafting an <br />
              advanced and captivating assessment framework.
            </div>
            <div
                class="btn-readmore flex items-center justify-center"
                style="background: #19304b"
                @click="toKementrian()"
            >
              READ MORE
            </div>
          </div>
        </slide>
      </carousel>-->
    </ClientOnly>

  </div>
</template>
<script setup lang="ts">




const kebabs = reactive([{

  img1: 'images/slides/1.png',
  img2: 'images/slides/2.png'

}])


</script>
<style lang="scss" scoped>
.portofolio-section {
  .carousel-dekstop {
    display: block;
  }
  .carousel-mobile {
    display: none;
  }
  .title-por {
    display: none;
  }
  .card-carousel {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .card-box {
      position: absolute;
      left: 17%;
      padding-left: 55px;
      width: 633px;
      height: 383px;
      border-radius: 21px;
      border: 0.5px solid #858585;
      background: rgba(120, 17, 20, 0.6);
      box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(9.5px);
      .logo-box {
        margin-bottom: 16px;
        height: 46px;
      }
      .text-box {
        text-align: left;
        color: #fff;
        font-family: "okta";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        .bold-text {
          color: #fff;
          font-family: "okta";
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
      .btn-readmore {
        position: absolute;
        bottom: 31px;
        right: 36px;
        width: 135px;
        height: 30px;
        border-radius: 6px;
        background: #ec1f27;
        color: #fff;
        text-align: center;
        font-family: "okta";
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 1.885px;
        cursor: pointer;
      }
      .btn-readmore:hover {
        opacity: 0.8;
      }
    }
  }
  .custom-page {
    cursor: pointer;
    position: absolute;
    bottom: 21px;
    .custom-dekstop {
      display: flex;
    }
    .custom-mobile {
      display: none;
    }
  }
  .btn-slide {
    position: absolute;
    bottom: 60px;
    .next-mobile {
      display: none;
    }
    .prev-mobile {
      display: none;
    }
  }
}

@media only screen and (max-width: 800px) {
  .portofolio-section {
    height: 770px;
    .title-por {
      position: absolute;
      top: 0px;
      color: #fff;
      text-align: center;
      text-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.72);
      font-family: "okta";
      font-size: 25px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
    }
    .carousel-dekstop {
      display: none;
    }
    .carousel-mobile {
      display: flex;
      .card-carousel {
        padding-left: 20px;
        padding-right: 20px;
        .card-box {
          width: 100%;
          height: 400px;
          padding: 20px;
          .logo-box {
            height: 40px;
            margin-top: 0px;
            object-fit: cover;
            margin-left: auto;
            margin-right: auto;
          }

          .btn-readmore {
            margin-left: auto;
            margin-right: auto;
            margin-top: 30px;
          }
        }
      }
    }
    .btn-slide {
      position: absolute;
      bottom: 100px;
      .next-mobile {
        position: absolute;
        display: flex;
        right: 20px;
        bottom: 11px;
        cursor: pointer;
      }
      .prev-mobile {
        position: absolute;
        display: flex;
        left: 20px;
        bottom: 11px;
        cursor: pointer;
      }
    }
    .custom-page {
      position: absolute;
      bottom: 0px;
      cursor: pointer;
      .custom-dekstop {
        display: none;
      }
      .custom-mobile {
        display: flex;
      }
    }
  }
}
</style>