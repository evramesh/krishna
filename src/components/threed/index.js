import ReactPlayer from "react-player";
import "./index.css";

const ThreeD = () => {
  const savedTodos = localStorage.getItem("todos");
  const change = JSON.parse(savedTodos);
  const threeD = change.filter((td) => td.category === "threeD");

  return (
    <div className="project-container">
      <h3 className="side side-3">3D Design</h3>

      <ul className="ul-box">
        {threeD.map((todo, index) => (
          <li className="li-box" key={index}>
            <strong className="title">{todo.title}</strong>
            <p className="description">{todo.description}</p>
            {todo.videoLink && (
              <ReactPlayer
                className="player"
                url={todo.videoLink}
                controls={true}
                height="10em"
                width="15em"
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                    },
                  },
                }}
              />
            )}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreeD;
