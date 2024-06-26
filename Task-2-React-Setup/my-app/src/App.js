import "./App.css";
import Emotions from "./components/emotion";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(
    () => {
      gsap.from(".joy", {
        x: 100,
        y: 10,
        rotation: 360,
        duration: 2,
        yPercent: 20,
        yoyo: true,
        ease: "power1.in",
        stagger: 0.2,
      });
    },
    { scope: container }
  );
  return (
    <div className="App">
      <header className="App-header">
        <h1>Oh my emotions</h1>
        <div className="emotions" ref={container}>
          <div className="joy">
            <img src="/io_joy9.jpg" alt="joy" />
            <Emotions name = "Joy" description=" Joy is like a burst of confetti at a surprise party, always ready to turn even a rainy day into a spontaneous dance-off.

" />
          </div>
          <div className="joy">
            <img src="/io_sad11.jpg" alt="joy" /> 
            <Emotions  name="Sadness" description=" Sadness is like a raincloud with a quirky sense of humor, sprinkling gloominess over everything while accidentally tripping over her own shoelaces."/>
          </div>
          <div className="joy">
            <img src="/io_anger9.jpg" alt="joy" />
             <Emotions name="Anger" description="Anger is like a tiny volcano in a bowler hat, constantly simmering with indignation and ready to explode over the smallest inconveniences, like running out of pizza rolls.

"/>
          </div>
          <div className="joy">
            <img src="/io_disgust7.jpg" alt="joy" /> 
            <Emotions name="Fear" description="Fear is like a nervous hamster with a clipboard, constantly fretting about the worst-case scenarios and making elaborate escape plans from everyday situations, like meeting a new dog." />
          </div>
          <div className="joy">
            <img src="/io_fear7.jpg" alt="joy" />
             <Emotions name="Disgust" description="Disgust is like a sassy broccoli floret with impeccable taste, wrinkling her nose at anything remotely unpleasant and providing expert commentary on bad fashion choices and questionable food combinations." />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
