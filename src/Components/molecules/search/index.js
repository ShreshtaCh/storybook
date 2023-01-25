// import PropTypes from "prop-types";
import Input from "../../atoms/input/index";
import Button from "../../atoms/Button/index";

export default function Search() {
  return (
    <>
      <Input type={"search"} placeholder={"Search here"} />
      <Button label={"Search"} size="small" borderRadius={50}></Button>
    </>
  );
}
