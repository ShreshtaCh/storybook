import Search from "./index";

export default {
  title: "molecules/search",
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const search = Template.bind({});
search.args = {};
