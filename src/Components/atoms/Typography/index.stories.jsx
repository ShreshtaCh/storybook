import React from "react";
import Typography from "./index";

import "./index.js";

export default {
  title: "atoms/Typography",
  component: Typography,
};

const Template = ({ children, ...args }) => (
  <Typography className={args.variant} {...args}>
    {children}
  </Typography>
);

export const Header = Template.bind({});
Header.args = {
  children: "This is Header",
  variant: "header",
};

export const Title = Template.bind({});
Title.args = {
  children: "This is Title",
  variant: "title",
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  children: "This is Subtitle",
  variant: "subtitle",
};

export const Body = Template.bind({});
Body.args = {
  children:
    "Next.js is an open-source React framework that is used to build web-based applications. This framework is based on Node.js and Babel, and it integrates with React to develop single-page applications. ",
  variant: "body",
};
