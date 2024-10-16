import "./index.css";

const Home = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="content">
          <h1 className="head">
            Hello! I'M <span className="span-1">Krishna Prasad</span>
          </h1>
          <ul className="list-item">
            <li>Video Editing</li>
            <li>3D Artist</li>
            <li>Graphic Designer</li>
          </ul>
          <p className="para">
            I'm a <span className="span-1">graphics designer</span> specializing
            in<span className="span-1">3D arts and video editing,</span>
            <br />
            using tools like Adobe Creative Suite, Blender, and Premiere Pro.{" "}
            <br />
            I'm create 3D models, animations, and high-quality video content
            <br /> for various projects, including games, films, and marketing.
          </p>
        </div>
        <div className="photos">
          <img
            className="img"
            alt="pho"
            src="https://res.cloudinary.com/dcr2fwzyk/image/upload/a_hflip/v1727330354/IMG_20240926_111012_oyctlg.jpg"
          />
        </div>
      </div>
      <div>
        <h1 className="skills-head">SKILLS</h1>
        <div className="cards-items">
          <a href="/video">
            <div className="card-1">
              <img
                src="https://res.cloudinary.com/dcr2fwzyk/image/upload/v1723084584/_Pngtree_monitor_vector_illustration_with_filled_5228521-removebg-preview_jn7dur.png"
                alt="card"
                className="card-img"
              />

              <h3>Video Editing</h3>
              <p className="card-para">
                2 years of video editing experience, I excel in creating
                polished videos, utilizing advanced editing software for
                cutting, trimming, effects, and audio integration.
              </p>
            </div>
          </a>
          <a href="/threed">
            <div className="card-1">
              <img
                src="https://res.cloudinary.com/dcr2fwzyk/image/upload/v1723084583/_Pngtree_3d_triangle_vector_with_six_5336914-removebg-preview_obd9fe.png"
                alt="card"
                className="card-img-2"
              />
              <h3>3D Arts Design</h3>
              <p className="card-para">
                3D art design, I create detailed 3D models and visualizations,
                proficient in texturing, rendering, and animation using advanced
                3D software.
              </p>
            </div>
          </a>
          <a href="/graphics">
            <div className="card-1">
              <img
                src="https://res.cloudinary.com/dcr2fwzyk/image/upload/v1723084584/pngwing.com__3_-removebg-preview_ubqbj6.png"
                alt="card"
                className="card-img-3"
              />

              <h3>Graphics Design</h3>

              <p className="card-para">
                Graphic Design, I create impactful visuals for various media,
                specializing in logos, posters, and digital content using
                advanced design software.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
