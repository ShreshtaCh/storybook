import Navigation from "./index";

export default {
  title: "molecules/Navigation",
  component: Navigation,
};

const Template = (args) => <Navigation {...args} />;

export const Nav = Template.bind({});
Nav.args = {};
