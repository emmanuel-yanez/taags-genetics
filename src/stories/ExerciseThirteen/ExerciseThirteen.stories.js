import ExerciseThirteen from "./ExerciseThirteen.vue";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "ExerciseThirteen",
  component: ExerciseThirteen,
  argTypes: {
    onSubmit: {},
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    controls: { expanded: true },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ExerciseThirteen },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: "<ExerciseThirteen @submit='onSubmit' />",
});

export const Desktop = Template.bind({});

Desktop.parameters = {
  viewport: {
    defaultViewport: undefined,
  },
};

export const Mobile = Template.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
