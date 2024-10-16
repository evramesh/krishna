import ReactPlayer from "react-player";
import "./index.css";

const ProjectItems = (props) => {
  const { todos, removeTodo, removeStatus } = props;
  const movie = todos.filter((td) => td.category === "Movie");
  const graphics = todos.filter((td) => td.category === "Graphics");
  const threeD = todos.filter((td) => td.category === "threeD");

  const removeList = (indexValue) => {
    removeTodo(indexValue);
  };
  return (
    <div>
      {threeD.length >= 1 ? <h3 className="side side-1">3D Designs</h3> : null}
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
            {removeStatus ? (
              <button onClick={() => removeList(todo.id)}>Remove</button>
            ) : null}
          </li>
        ))}
      </ul>
      {graphics.length >= 1 ? <h3 className="side side-2">Graphics</h3> : null}
      <ul className="ul-box">
        {graphics.map((todo, index) => (
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
            {removeStatus ? (
              <button onClick={() => removeList(todo.id)}>Remove</button>
            ) : null}
          </li>
        ))}
      </ul>
      {movie.length >= 1 ? (
        <h3 className="side side-3">Video Editing</h3>
      ) : null}
      <ul className="ul-box">
        {movie.map((todo, index) => (
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
            {removeStatus ? (
              <button onClick={() => removeList(todo.id)}>Remove</button>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectItems;
