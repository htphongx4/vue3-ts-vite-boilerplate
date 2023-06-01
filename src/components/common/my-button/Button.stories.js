import MyButton from "./index.vue";

export default {
  title: "Components/Button",
  component: MyButton,
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "white"],
    },
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<MyButton v-bind="args">{{ args.default }}</MyButton>',
});

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  default: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  default: "Secondary button",
};
