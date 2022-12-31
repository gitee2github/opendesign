<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';

import img1 from '@/assets/img/resource/game/small-cloud.png';
import img2 from '@/assets/img/resource/game/purple-bird.png';
import img3 from '@/assets/img/resource/game/green-bird.png';
import img4 from '@/assets/img/resource/game/hero.png';
import img5 from '@/assets/img/resource/game/blue-bird.png';
import img6 from '@/assets/img/resource/game/half-cloud.png';
import img7 from '@/assets/img/resource/game/big-cloud.png';
import img8 from '@/assets/img/resource/game/gamemachine1.png';
import img9 from '@/assets/img/resource/game/gamemachine2.png';
import img10 from '@/assets/img/resource/game/machine1.png';
import img11 from '@/assets/img/resource/game/machine2.png';
import img12 from '@/assets/img/resource/game/cooperation.png';
import img13 from '@/assets/img/resource/game/assembly.gif';
import img14 from '@/assets/img/resource/game/arrows.png';
import img15 from '@/assets/img/resource/game/accomplish.png';
import img16 from '@/assets/img/resource/game/star1.png';
import img17 from '@/assets/img/resource/game/xbox1.png';
import img18 from '@/assets/img/resource/game/star2.png';
import img19 from '@/assets/img/resource/game/xbox2.png';
import img20 from '@/assets/img/resource/game/shadow1.png';
import img21 from '@/assets/img/resource/game/shadow2.png';
import img23 from '@/assets/img/resource/game/builtgame.png';
import img24 from '@/assets/img/resource/game/compilegame.png';
import img25 from '@/assets/img/resource/game/itsfun.png';
import img26 from '@/assets/img/resource/game/brick.png';
import img29 from '@/assets/img/resource/game/treasure.png';
import img27 from '@/assets/img/resource/game/critters.png';
import img28 from '@/assets/img/resource/game/mario.png';

// const elOffsetTop = ref<number>(0);
// const scrollTop = ref<number>(0);

// const handleScroll = (): void => {
//   window.addEventListener('scroll', () => {
//     scrollTop.value = window.pageYOffset;
//   });
// };

// onMounted(() => {
//   elOffsetTop.value = document.getElementById('mario')?.offsetTop!;
//   handleScroll();
// });
// watch(
//   () => scrollTop.value,
//   (data) => {
//     if (data >= 3800) {
//       document.getElementById('mario')!.className = 'marioMove';
//       document.getElementById('left-critters')!.className = 'left-crittersMove';
//     }
//   }
// );
</script>

<template>
  <div class="game-home">
    <div class="subject">
      <div class="subject-top">
        <div class="title">
          <p class="headline">GAME</p>
          <p class="describe">随时随地畅游的小游戏，开启趣味性体验</p>
        </div>
        <div class="ikons">
          <img :src="img1" class="small-cloud-f" />
          <img :src="img2" class="purple-bird" />
          <img :src="img3" class="green-bird" />
          <img :src="img4" class="hero" />
          <img :src="img1" class="small-cloud-s" />
          <img :src="img5" class="blue-bird" />
          <img :src="img6" class="half-cloud" />
          <img :src="img7" class="big-cloud" />
        </div>
      </div>
      <div class="subject-plank"></div>
      <div class="subject-middle">
        <div class="middle-title">
          <img :src="img8" class="gamemachine gamemachinef" />
          <img :src="img9" class="gamemachine" />
        </div>
        <div class="middle-machine">
          <img :src="img10" class="machine machinef" />
          <img :src="img11" class="machine" />
        </div>
        <img :src="img12" class="cooperation" />
        <img :src="img13" class="assembly" />
        <img :src="img14" class="arrows" />
        <img :src="img15" class="accomplish" />
        <div class="middle-xbox">
          <div class="middle-xbox-f">
            <img :src="img16" class="star" />
            <img :src="img17" class="xboxf" />
          </div>
          <div class="middle-xbox-s">
            <img :src="img18" class="star star-s" />
            <img :src="img19" class="xboxs" />
          </div>
        </div>
        <div class="middle-shadow">
          <img :src="img20" class="shadowf" />
          <img :src="img21" class="shadows" />
        </div>
        <img :src="img23" class="builtgame" />
        <img :src="img24" class="compilegame" />
        <img :src="img25" class="itsfun" />
      </div>
      <div class="subject-pillar"></div>
      <div class="subject-bottom">
        <img :src="img26" class="brick" />
        <img :src="img29" class="treasuref" />
        <img :src="img29" class="treasures" />
        <img :src="img29" class="treasuret" />
        <img
          :src="img27"
          class="left-critters left-crittersMove"
          id="left-critters"
        />
        <img :src="img28" id="mario" class="mario marioMove" />
        <img :src="img27" class="right-critters" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes scriekMoveLarge {
  0% {
    top: 442px;
    right: 886px;
  }
  25% {
    top: 438px;
    right: 895px;
  }
  50% {
    top: 445px;
    right: 892px;
  }
  75% {
    top: 445px;
    right: 886px;
  }
  100% {
    top: 442px;
    right: 886px;
  }
}
@keyframes scriekMoveSmall {
  0% {
    top: 280px;
    right: 600px;
  }
  25% {
    top: 276px;
    right: 609px;
  }
  50% {
    top: 283px;
    right: 606px;
  }
  75% {
    top: 283px;
    right: 600px;
  }
  100% {
    top: 280px;
    right: 600px;
  }
}
@keyframes pursueMoveLarge {
  0% {
    top: 62px;
    right: 225px;
  }
  50% {
    top: 52px;
    right: 235px;
  }
  100% {
    top: 62px;
    right: 225px;
  }
}
@keyframes pursueMoveSmall {
  0% {
    top: 50px;
    right: 150px;
  }
  50% {
    top: 40px;
    right: 160px;
  }
  100% {
    top: 50px;
    right: 150px;
  }
}
@keyframes followMoveLarge {
  0% {
    top: 225px;
    right: 61px;
  }
  50% {
    top: 215px;
    right: 71px;
  }
  100% {
    top: 225px;
    right: 61px;
  }
}
@keyframes followMoveSmall {
  0% {
    top: 130px;
    right: 50px;
  }
  50% {
    top: 120px;
    right: 60px;
  }
  100% {
    top: 130px;
    right: 50px;
  }
}
@keyframes loopMoveLarge {
  0% {
    left: 1300px;
  }
  50% {
    left: 1620px;
  }
  100% {
    left: 1300px;
  }
}
@keyframes loopMoveMiddle {
  0% {
    left: 1100px;
  }
  50% {
    left: 1430px;
  }
  100% {
    left: 1100px;
  }
}
@keyframes loopMoveSmall {
  0% {
    left: 840px;
  }
  50% {
    left: 670px;
  }
  100% {
    left: 840px;
  }
}
@keyframes jumpMoveLarge {
  0% {
    bottom: 73px;
  }
  25% {
    bottom: 145px;
  }
  50% {
    bottom: 73px;
  }
  75% {
    bottom: 145px;
  }
  100% {
    bottom: 73px;
  }
}
@keyframes jumpMoveSmall {
  0% {
    bottom: 50px;
  }
  25% {
    bottom: 110px;
  }
  50% {
    bottom: 50px;
  }
  75% {
    bottom: 110px;
  }
  100% {
    bottom: 50px;
  }
}
@keyframes outcropMoveLarge {
  0% {
    bottom: 300px;
    left: 440px;
  }
  100% {
    left: 440px;
    bottom: 385px;
  }
}
@keyframes outcropMoveMiddle {
  0% {
    bottom: 300px;
    left: 230px;
  }
  100% {
    left: 230px;
    bottom: 385px;
  }
}
@keyframes outcropMoveSmall {
  0% {
    bottom: 170px;
    left: 210px;
  }
  100% {
    bottom: 225px;
    left: 210px;
  }
}
@keyframes cycleMoveLarge {
  0% {
    left: 440px;
    bottom: 385px;
  }
  25% {
    left: 320px;
    bottom: 385px;
  }
  50% {
    left: 440px;
    bottom: 385px;
  }
  75% {
    left: 580px;
    bottom: 385px;
  }
  100% {
    left: 440px;
    bottom: 385px;
  }
}
@keyframes cycleMoveMiddle {
  0% {
    left: 230px;
    bottom: 385px;
  }
  25% {
    left: 100px;
    bottom: 385px;
  }
  50% {
    left: 230px;
    bottom: 385px;
  }
  75% {
    left: 365px;
    bottom: 385px;
  }
  100% {
    left: 230px;
    bottom: 385px;
  }
}
@keyframes cycleMoveSmall {
  0% {
    bottom: 225px;
    left: 210px;
  }
  25% {
    bottom: 225px;
    left: 150px;
  }
  50% {
    bottom: 225px;
    left: 210px;
  }
  75% {
    bottom: 225px;
    left: 280px;
  }
  100% {
    bottom: 225px;
    left: 210px;
  }
}
.game-home {
  background: var(--o-color-bg2);
  .subject {
    background-image: url('@/assets/img/resource/game/game-bg.jpg');
    height: 4600px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    @media (max-width: 1550px) {
      height: 3100px;
    }
    &-top {
      display: flex;
      .title {
        padding-top: 137px;
        padding-left: 240px;
        @media (max-width: 1550px) {
          padding-left: 117px;
          padding-top: 67px;
        }
        .headline {
          color: var(--o-color-text2);
          font-size: var(--e-font_size-display2);
          line-height: var(--e-line_height-display2);
          font-weight: 500;
        }
        .describe {
          color: var(--o-color-text2);
          font-size: var(--e-font_size-h2);
          line-height: var(--e-line_height-h2);
          font-weight: 400;
        }
      }
      .ikons {
        .small-cloud-f {
          width: 167px;
          height: 87px;
          position: absolute;
          top: 190px;
          right: 840px;
          @media (max-width: 1550px) {
            width: 112px;
            height: 58px;
            right: 672px;
            top: 70px;
            right: 580px;
          }
        }
        .purple-bird {
          height: 134px;
          width: 158px;
          position: absolute;
          top: 442px;
          right: 886px;
          animation: scriekMoveLarge 1.5s linear infinite;
          @media (max-width: 1550px) {
            width: 105px;
            height: 89px;
            top: 280px;
            right: 600px;
            animation: scriekMoveSmall 1.5s linear infinite;
          }
        }
        .green-bird {
          height: 99px;
          width: 158px;
          position: absolute;
          top: 134px;
          right: 761px;
          @media (max-width: 1550px) {
            width: 105px;
            height: 65px;
            top: 60px;
            right: 540px;
          }
        }
        .hero {
          height: 650px;
          width: 632px;
          position: absolute;
          top: 62px;
          right: 225px;
          z-index: 2;
          animation: pursueMoveLarge 3s linear infinite;
          @media (max-width: 1550px) {
            width: 424px;
            height: 439px;
            top: 50px;
            right: 150px;
            animation: pursueMoveSmall 3s linear infinite;
          }
        }
        .small-cloud-s {
          height: 87px;
          width: 167px;
          position: absolute;
          top: 94px;
          right: 250px;
          @media (max-width: 1550px) {
            width: 140px;
            height: 73px;
            top: 52px;
            right: 154px;
          }
        }
        .blue-bird {
          height: 129px;
          width: 183px;
          position: absolute;
          top: 225px;
          right: 61px;
          animation: followMoveLarge 3s linear infinite;
          @media (max-width: 1550px) {
            width: 122px;
            height: 86px;
            top: 130px;
            right: 50px;
            animation: followMoveSmall 3s linear infinite;
          }
        }
        .half-cloud {
          height: 87px;
          width: 77px;
          position: absolute;
          top: 282px;
          right: 0px;
          @media (max-width: 1550px) {
            width: 51px;
            height: 58px;
            top: 170px;
          }
        }
        .big-cloud {
          height: 314px;
          width: 360px;
          position: absolute;
          top: 555px;
          right: 0px;
          @media (max-width: 1550px) {
            width: 241px;
            height: 210px;
            top: 355px;
          }
        }
      }
    }
    &-plank {
      width: 1530px;
      height: 3190px;
      position: absolute;
      top: 670px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #9e6b20;
      border: 2px solid #000000;
      z-index: 2;
      @media (max-width: 1550px) {
        width: 944px;
        height: 2320px;
        top: 450px;
      }
    }
    &-middle {
      width: 1496px;
      height: 3150px;
      position: absolute;
      top: 690px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
      background-color: #cda364;
      border: 2px solid #000000;
      @media (max-width: 1550px) {
        width: 924px;
        height: 2300px;
        top: 460px;
      }
      .middle-title {
        display: flex;
        .gamemachine {
          height: 79px;
          width: 404px;
          margin-top: 100px;
          @media (max-width: 1550px) {
            width: 273px;
            height: 53px;
            margin-top: 50px;
          }
        }
        .gamemachinef {
          margin: 60px 293px 50px 198px;
          @media (max-width: 1550px) {
            margin: 50px 200px 30px 95px;
          }
        }
      }
      .middle-machine {
        display: flex;
        .machine {
          height: 515px;
          width: 424px;
          margin-top: 50px;
          @media (max-width: 1550px) {
            width: 287px;
            height: 350px;
            margin-top: 40px;
          }
        }
        .machinef {
          margin: 40px 293px 50px 180px;
          @media (max-width: 1550px) {
            margin-right: 210px;
            margin-left: 60px;
          }
        }
      }
      .cooperation {
        width: 1141px;
        height: 214px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 30px;
        @media (max-width: 1550px) {
          width: 774px;
          height: 145px;
        }
      }
      .assembly {
        width: 1362px;
        height: 86px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: 1550px) {
          width: 840px;
          height: 53px;
        }
      }
      .arrows {
        width: 802px;
        height: 48px;
        margin-top: 17px;
        margin-bottom: 62px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: 1550px) {
          width: 543px;
          height: 32px;
          margin-bottom: 42px;
        }
      }
      .accomplish {
        width: 755px;
        height: 26px;
        margin-bottom: 35px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: 1550px) {
          width: 512px;
          height: 18px;
        }
      }
      .middle-xbox {
        display: flex;
        position: relative;
        right: 30px;
        @media (max-width: 1550px) {
          right: 0px;
        }
        .star {
          width: 366px;
          height: 154px;
          position: relative;
          left: 270px;
          @media (max-width: 1550px) {
            width: 248px;
            left: 104px;
          }
        }
        .star-s {
          margin-top: 36px;
        }
        .xboxf {
          width: 151px;
          height: 234px;
          margin-right: 120px;
          @media (max-width: 1550px) {
            width: 101px;
            height: 156px;
            margin-right: 96px;
            position: relative;
            right: 70px;
          }
        }
        .xboxs {
          width: 197px;
          height: 197px;
          margin-top: 36px;
          @media (max-width: 1550px) {
            width: 132px;
            height: 132px;
            position: relative;
            right: 90px;
          }
        }
      }
      .middle-shadow {
        display: flex;
        margin-top: 17px;
        margin-left: 325px;
        @media (max-width: 1550px) {
          margin-left: 180px;
          margin-top: 0px;
        }
        .shadowf {
          height: 43px;
          width: 170px;
          margin-right: 479px;
          @media (max-width: 1550px) {
            margin-right: 310px;
            width: 95px;
            height: 24px;
          }
        }
        .shadows {
          width: 204px;
          height: 108px;
          position: relative;
          bottom: 50px;
          z-index: -1;
          @media (max-width: 1550px) {
            width: 150px;
            height: 70px;
            bottom: 40px;
          }
        }
      }
      .builtgame {
        width: 1273px;
        height: 469px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: 1550px) {
          width: 863px;
          height: 318px;
        }
      }
      .compilegame {
        height: 421px;
        width: 1134px;
        margin-top: 93px;
        margin-bottom: 112px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: 1550px) {
          width: 769px;
          height: 286px;
        }
      }
      .itsfun {
        width: 595px;
        height: 234px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: 1550px) {
          width: 403px;
          height: 158px;
        }
      }
    }
    &-pillar {
      height: 670px;
      width: 60px;
      background-color: #9e6b20;
      border: 1px solid #000000;
      position: absolute;
      bottom: 75px;
      left: 50%;
      @media (max-width: 1550px) {
        bottom: 50px;
        height: 280px;
        width: 50px;
      }
    }
    &-bottom {
      .brick {
        width: 1302px;
        height: 112px;
        position: absolute;
        bottom: 276px;
        left: 320px;
        @media (max-width: 1740px) {
          left: 100px;
        }
        @media (max-width: 1550px) {
          width: 672px;
          height: 58px;
          left: 150px;
          bottom: 170px;
        }
      }
      .treasuref {
        height: 112px;
        width: 112px;
        position: absolute;
        bottom: 276px;
        left: 428px;
        z-index: 2;
        @media (max-width: 1740px) {
          left: 208px;
        }
        @media (max-width: 1550px) {
          height: 58px;
          width: 58px;
          left: 205px;
          bottom: 170px;
        }
      }
      .treasures {
        height: 112px;
        width: 112px;
        position: absolute;
        bottom: 276px;
        left: 1402px;
        @media (max-width: 1740px) {
          left: 1182px;
        }
        @media (max-width: 1550px) {
          height: 58px;
          width: 58px;
          left: 710px;
          bottom: 170px;
        }
      }
      .treasuret {
        height: 112px;
        width: 112px;
        position: absolute;
        bottom: 276px;
        left: 1618px;
        @media (max-width: 1740px) {
          left: 1398px;
        }
        @media (max-width: 1550px) {
          height: 58px;
          width: 58px;
          left: 822px;
          bottom: 170px;
        }
      }
      .mario {
        width: 114px;
        height: 135px;
        position: absolute;
        bottom: 73px;
        left: 422px;
        @media (max-width: 1740px) {
          left: 200px;
        }
        @media (max-width: 1550px) {
          height: 66px;
          width: 56px;
          left: 208px;
          bottom: 50px;
        }
      }
      .marioMove {
        width: 114px;
        height: 135px;
        position: absolute;
        bottom: 73px;
        left: 422px;
        animation: jumpMoveLarge 1.5s linear;
        @media (max-width: 1740px) {
          left: 200px;
        }
        @media (max-width: 1550px) {
          height: 66px;
          width: 56px;
          left: 208px;
          bottom: 50px;
          animation: jumpMoveSmall 1.5s linear;
        }
      }
      .left-critters {
        width: 75px;
        height: 86px;
        position: absolute;
        bottom: 300px;
        left: 440px;
        @media (max-width: 1740px) {
          left: 230px;
        }
        @media (max-width: 1550px) {
          bottom: 170px;
          left: 210px;
          width: 46px;
          height: 53px;
        }
      }
      .left-crittersMove {
        width: 75px;
        height: 86px;
        position: absolute;
        bottom: 300px;
        left: 440px;
        animation: outcropMoveLarge 1.5s 1.5s,
          cycleMoveLarge 5s 3s linear infinite;
        @media (max-width: 1740px) {
          left: 230px;
          animation: outcropMoveMiddle 1.5s 1.5s,
            cycleMoveMiddle 5s 3s linear infinite;
        }
        @media (max-width: 1550px) {
          bottom: 170px;
          left: 210px;
          width: 46px;
          height: 53px;
          animation: outcropMoveSmall 1.5s 1.5s,
            cycleMoveSmall 5s 3s linear infinite;
        }
      }
      .right-critters {
        width: 75px;
        height: 86px;
        position: absolute;
        bottom: 73px;
        left: 1300px;
        animation: loopMoveLarge 5s linear infinite;
        @media (max-width: 1740px) {
          left: 1100px;
          animation: loopMoveMiddle 5s linear infinite;
        }
        @media (max-width: 1550px) {
          width: 46px;
          height: 53px;
          left: 840px;
          bottom: 50px;
          animation: loopMoveSmall 5s linear infinite;
        }
      }
    }
  }
}
</style>
