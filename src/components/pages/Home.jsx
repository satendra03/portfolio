import FontDraggableText from "../ui/FontDraggableText";
import { Link } from "react-router-dom";

function Home() {
  const name = ["SATENDRA", "KUMAR", "PARTETI"];

  return (
    <div className="app h-screen w-screen flex items-center justify-center flex-col">
      <div className="main-txt p-2 flex items-center justify-center flex-col">
        <p className="mb-2">
          Hi, My <span className="bg-red-400 px-1 text-white">Name</span> is
        </p>
        <FontDraggableText className="" words={name} />
        <p className="mt-2">
          and I create{" "}
          <span className="px-1 bg-red-400 text-white">differently</span>
        </p>
      </div>
      <div className="more-text flex-col flex items-center justify-center px-5 mt-10 text-center text-black/40 text-sm md:text-lg">
        <p className="tracking-tighter">
          {" "}
          <span className="underline">software developer</span> focused on
          building intuitive and efficient web applications. <br />
          specialize in both front-end and back-end development, <br />
          aiming to create seamless digital experiences. <br /> <br />
          <Link
            to={
              "https://drive.google.com/drive/folders/1MuNCvuz_vp1ERAiHpFDaHWz8DiHOp1Nq?usp=sharing"
            }
          >
            <span className="underline">RESUME</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
