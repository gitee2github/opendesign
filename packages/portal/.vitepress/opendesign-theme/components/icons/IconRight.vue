<script lang="ts" setup>
import Icon from './Icon.vue';
defineProps({
  size: {
    validator(value: string) {
      return ['large', 'medium', 'small', 'mini', ''].includes(value);
    },
    default: '',
  },
});
</script>

<template>
  <Icon :class="size">
    <svg
      width="15px"
      height="15px"
      viewBox="0 0 15 15"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>切片</title>
      <defs>
        <filter id="filter-1">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="0 0 0 0 0.000000 0 0 0 0 0.184314 0 0 0 0 0.654902 0 0 0 1.000000 0"
          ></feColorMatrix>
        </filter>
        <path
          d="M5.88548469,0.0593560764 L5.93188077,0.0981192283 L8.61188077,2.77811923 C8.74270641,2.90894487 8.74270641,3.12105513 8.61188077,3.25188077 L8.61188077,3.25188077 L5.93188077,5.93188077 L5.88548469,5.97064392 C5.75492303,6.06109128 5.57440868,6.04817023 5.45811923,5.93188077 C5.32729359,5.80105513 5.32729359,5.58894487 5.45811923,5.45811923 L5.45811923,5.45811923 L7.567,3.35 L0.335,3.35 C0.149984609,3.35 0,3.20001539 0,3.015 C0,2.85054187 0.118506358,2.71376239 0.274783326,2.6853973 L0.335,2.68 L7.567,2.68 L5.45811923,0.571880772 C5.32729359,0.441055134 5.32729359,0.228944866 5.45811923,0.0981192283 C5.57440868,-0.0181702275 5.75492303,-0.0310912781 5.88548469,0.0593560764 Z"
          id="path-2"
        ></path>
      </defs>
      <g
        id="330上线基础组件"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="规范/组件/卡片" transform="translate(-569.000000, -4262.000000)">
          <g id="编组-10" transform="translate(510.000000, 2360.000000)">
            <g id="编组-13备份" transform="translate(0.000000, 1709.000000)">
              <g
                id="icon/24/箭头"
                transform="translate(16.105263, 193.136471)"
                filter="url(#filter-1)"
              >
                <g transform="translate(42.972632, 0.000000)">
                  <rect id="矩形" x="0" y="0" width="22" height="22"></rect>
                  <g
                    id="颜色/#CB0007"
                    transform="translate(4.020000, 5.360000)"
                  >
                    <mask id="mask-3" fill="white">
                      <use xlink:href="#path-2"></use>
                    </mask>
                    <use
                      id="蒙版"
                      fill="#CB0007"
                      fill-rule="nonzero"
                      xlink:href="#path-2"
                    ></use>
                    <g id="编组" mask="url(#mask-3)">
                      <g
                        transform="translate(-4.020000, -5.360000)"
                        id="颜色/#CB0007"
                      >
                        <rect
                          id="矩形"
                          fill="#C7000B"
                          x="-2"
                          y="-2"
                          width="20"
                          height="20"
                        ></rect>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </Icon>
</template>
