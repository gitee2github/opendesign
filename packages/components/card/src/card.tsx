import { computed, defineComponent } from 'vue';
import { cardProps, CardProps } from './card-types';
import './card.scss';

export default defineComponent({
  name: 'OCard',
  props: cardProps,
  setup(props: CardProps, { slots }) {
    const getHeader = () => {
      if (props.title) {
        return <div class="o-card-header">{props.title}</div>;
      } else {
        return '';
      }
    };

    const classNames = computed(() => ({
      'o-card': true,
      'is-bordered': props.bordered,
      'is-hoverable': props.hoverable,
    }));
    return () => {
      return (
        <div class={classNames.value}>
          {getHeader()}
          {slots.cover && <div class="o-card-cover">{slots.cover?.()}</div>}
          <div class="o-card-body">{slots.default?.()}</div>
        </div>
      );
    };
  },
});
