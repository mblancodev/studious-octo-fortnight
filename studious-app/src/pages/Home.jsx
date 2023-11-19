import ListDisplay from "../components/ListDisplay";
import Button from "../components/Button";
import PalindromeChecker from "../components/PalindromeChecker";

const Home = () => {
  return (
    <div className="App">
      <ListDisplay />

      <h1>Button Styles with Sass</h1>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <PalindromeChecker></PalindromeChecker>
    </div>
  );
};
export default Home;
