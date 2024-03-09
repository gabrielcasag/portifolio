import { AboutMe } from "./components/about-me";
import { Header } from "./components/header";
import { MySkills } from "./components/my-skills";

function App() {
  return (
    <div className="main__container">
      <Header />
      <AboutMe />
      <MySkills />
    </div>
  );
}

export default App;
