import Input from "./index";

export default {
  title: "atoms/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const dateinput = Template.bind({});
dateinput.args = {
  type: "date",
  placeholder: `Enter Data`,
  required: true,
};

export const emailinput = Template.bind({});
emailinput.args = {
  type: "email",
  placeholder: `Enter Data`,
  required: true,
};

export const passwordinput = Template.bind({});
passwordinput.args = {
  type: "password",
  placeholder: `Enter Data`,
  required: true,
};

export const timeinput = Template.bind({});
timeinput.args = {
  type: "time",
  placeholder: `Enter Data`,
  required: true,
};

export const textinput = Template.bind({});
textinput.args = {
  type: "text",
  placeholder: `Enter Data`,
  required: true,
};
