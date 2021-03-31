import React from 'react';
import PPImage from '../assets/img/pp.jpeg';
import PasswordGenerate from '../assets/img/Password_generate.png';
import CodeQuiz from '../assets/img/code_quiz.png';
import WorkdayPlanner from '../assets/img/Workday_Planner.png';
import WeatherData from '../assets/img/weather_data.png';

export default function Main() {
  return (
    <div className="row">
      <div className="side">
        <section className="content">
          <article className="name">
            <img
              classNameName="rounded-circle"
              src={PPImage}
              width="150"
              height="150"
              alt="myImage"
            />
            <h2> Pritesh Patel</h2>
            <p className="intro">
              Hi There,I'm QA Engineeer. It's been 2 years, I’m working as QA
              Engineeer.i have worked on different domain in few years.I am
              excited to be working as Web Developer
            </p>
          </article>
          <article className="education">
            <h3> Education</h3>
            <h5>Bachelor in science</h5>
            <h5>Degree: Northern Illinois University</h5>
          </article>
          <article className="intrest">
            <h3> Interests </h3>
            <ul className="list-unstyled">
              <li> Music</li>
              <li> Education</li>
              <li> Hiking</li>
              <li> Entertainment</li>
            </ul>
          </article>
        </section>
      </div>
      {/* About Me   */}
      <div id="aboutme" className="main">
        <h3>About Me</h3>
        <p>
          In reasonable compliment favourable is connection dispatched in
          terminated. Do esteem object we called father excuse remove. So dear
          real on like more it. Laughing for two families addition expenses
          surprise the. If sincerity he to curiosity arranging. Learn taken
          terms be as. Scarcely mrs produced too removing new old.
        </p>
        <p>
          Sportsman do offending supported extremity breakfast by listening.
          Decisively advantages nor expression unpleasing she led met. Estate
          was tended ten boy nearer seemed. As so seeing latter he should thirty
          whence. Steepest speaking up attended it as. Made neat an on be gave
          show snug tore.
        </p>
        <p>
          Affronting discretion as do is announcing. Now months esteem oppose
          nearer enable too six. She numerous unlocked you perceive speedily.
          Affixed offence spirits or ye of offices between. Real on shot it were
          four an as. Absolute bachelor rendered six nay you juvenile. Vanity
          entire an chatty to.
        </p>
        <p>
          By so delight of showing neither believe he present. Deal sigh up in
          shew away when. Pursuit express no or prepare replied. Wholly formed
          old latter future but way she. Day her likewise smallest expenses
          judgment building man carriage gay. Considered introduced themselves
          mr to discretion at. Means among saw hopes for. Death mirth in oh
          learn he equal on.
        </p>
        <p>
          Performed suspicion in certainty so frankness by attention pretended.
          Newspaper or in tolerably education enjoyment. Extremity excellent
          certainty discourse sincerity no he so resembled. Joy house worse
          arise total boy but. Elderly up chicken do at feeling is. Like seen
          drew no make fond at on rent. Behaviour extremely her explained
          situation yet september gentleman are who. Is thought or pointed
          hearing he.
        </p>
        <p>
          Old there any widow law rooms. Agreed but expect repair she nay sir
          silent person. Direction can dependent one bed situation attempted.
          His she are man their spite avoid. Her pretended fulfilled extremely
          education yet. Satisfied did one admitting incommode tolerably how
          are.
        </p>
      </div>

      {/* My Work */}
      <div id="Project" className="work">
        <h3>My Work</h3>

        <div className="main_2">
          <a
            href="https://github.com/priteshpatel823/Password_Generator"
            target="_blank"
            rel="noreferrer"
          >
            <div className="Project_1">
              <img
                className="pro1"
                src={PasswordGenerate}
                alt="Info Widget"
                width="400"
                height="175"
              />
              <div className="desc_img">Password Generator</div>
            </div>
          </a>
          <a
            href="https://github.com/priteshpatel823/Code_quiz"
            target="_blank"
            rel="noreferrer"
          >
            <div className="Project_2">
              <img
                className="pro1"
                src={CodeQuiz}
                alt="Info Widget"
                width="400"
                height="175"
              />
              <div className="desc_img">Code quiz</div>
            </div>
          </a>
          <a
            href="https://github.com/priteshpatel823/Work-Day-Planner"
            target="_blank"
            rel="noreferrer"
          >
            <div className="Project_3">
              <img
                className="pro1"
                src={WorkdayPlanner}
                alt="Info Widget"
                width="400"
                height="175"
              />
              <div className="desc_img"> Work Day Planner</div>
            </div>
          </a>
          <a
            href="https://github.com/priteshpatel823/Weather_Data_Dashboard"
            target="_blank"
            rel="noreferrer"
          >
            <div className="Project_4">
              <img
                className="pro1"
                src={WeatherData}
                alt="Info Widget"
                width="400"
                height="175"
              />
              <div className="desc_img">Weather-Dashboard</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
