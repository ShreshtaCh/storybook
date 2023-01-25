import Button from "./index";

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: { onClick: { action: "Button Pressed" } },
  parameters: {
    actions: {
      handles: ["mouseover", "click .btn"],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Signin = Template.bind({});
Signin.args = {
  backgroundColor: "blue",
  label: "Signin",
  size: "medium",
  color: "white",
  borderRadius: 10,
};

export const Signup = Template.bind({});
Signup.args = {
  backgroundColor: "red",
  label: "Signup",
  size: "medium",
  color: "white",
  borderRadius: 10,
};

export const Signout = Template.bind({});
Signout.args = {
  backgroundColor: "green",
  label: "Signout",
  size: "medium",
  color: "white",
  borderRadius: 10,
};

export const Submit = Template.bind({});
Submit.args = {
  backgroundColor: "orange",
  label: "Submit",
  size: "medium",
  color: "white",
  borderRadius: 10,
};
