import { Button, Input, Textarea } from "./";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
};

const Form = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler} style={styles}>
      <Button bgColor="alizarin" color="clouds" icon="user">
        Click me
      </Button>
      <Input
        bgColor="alizarin"
        color="clouds"
        borderRadius="18px"
        borderColor="#fff"
        borderSize="2px"
      />
      <Textarea
        bgColor="alizarin"
        color="clouds"
        borderRadius="28px"
        borderColor="#fff"
        borderSize="2px"
      />
    </form>
  );
};

export default Form;
