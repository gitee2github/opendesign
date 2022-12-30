import { ExtractDefaultPropTypes } from 'vue';

export const cardProps = {
  title: {
    type: String,
    default: undefined,
  },
  bordered: {
    type: Boolean,
    default: true,
  },
  hoverable: {
    type: Boolean,
    default: false,
  },
};

export type CardProps = ExtractDefaultPropTypes<typeof cardProps>;
