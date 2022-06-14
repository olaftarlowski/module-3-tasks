import Card from "../components/Card/Card";
import Form from "../components/Form";
import { Menu, MenuLink } from "../components/Menu";
import Employees from "../components/Employees/Employees";
import HrLine from "../components/HrLine";
import { ContentWrapper, ElementsWrapper } from "./Content.styled";

const Content = () => {
  return (
    <ContentWrapper>
      <Employees />
      <HrLine />
      <ElementsWrapper>
        <Menu>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to="/contact" isActive>
            Contact
          </MenuLink>
          <MenuLink to="/posts">Posts</MenuLink>
        </Menu>
        <Card
          title="Shrim and Chorizo Paella"
          intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
          showMore
          content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...."
        />
        <Form />
      </ElementsWrapper>
      <HrLine />
    </ContentWrapper>
  );
};

export default Content;
