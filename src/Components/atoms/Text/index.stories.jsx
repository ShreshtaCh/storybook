import Text from "./index";

export default {
  title: "atoms/Text",
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const plaintext = Template.bind({});
plaintext.args = {
  label: "Write Something!",
};

export const customtext = Template.bind({});
customtext.args = {
  label: "Write Something!",
  color: "black",
  backgroundColor: "blue",
  fontSize: 20,
};
