import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar image="selfieCROP_XS.jpg" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img src={props.image} style={{ width: "100%" }} alt="Suryakant Borad" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Suryakant Borad</h1>
      <p>
        Full stack (MERN) web developer and technology enthusiast. When I'm not
        coding, you'll often find me indulging in my love for food, both as an
        avid eater and an amateur chef. I also enjoy spending quality time with
        my wonderful kids, engaging in fun-filled board games that challenge our
        strategic thinking.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" color="blue" emoji="💪" />
      <Skill skill="JavaScript" color="yellow" emoji="✌" />
      <Skill skill="React" color="red" emoji="👶" />
      <Skill skill="SEO" color="cyan" emoji="✌" />
      <Skill skill="Node.js + mongoDB" color="#f9c0d2" emoji="✌" />
      <Skill skill="Git & GitHub" color="lightgreen" emoji="👍" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span> <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
