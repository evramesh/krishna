import React from "react";
import "./index.css";

const Profile = () => {
  return (
    <div className="pro-container">
      <div>
        <h1 className="head-profile">Name : Krishna Prasad Kokkirala</h1>
        <ul>
          <li>
            Gender : <span>Male</span>{" "}
          </li>
          <li>
            Date Of Birth : <span>30th march,2001</span>
          </li>
          <li>
            Father's Name : <span>K Ram Babu</span>{" "}
          </li>
          <li>
            Hobbies : <span> Editing,Podcast,Watching Movie</span>
          </li>
          <li>
            Language : <span>English, Telugu</span>{" "}
          </li>
          <li>
            Address :{" "}
            <span>
              k kannapuram, vegiwada post, pedavegi mandal, Eluru distric,
              Andhra Pradesh. PIN-534452.
            </span>
          </li>
          <li>
            Gmail : <span>krishnaprasadkokkirala@gmail.com</span>{" "}
          </li>
          <li>
            Contact : <span>9347057599</span>{" "}
          </li>
        </ul>
        <hr />
        <div className="vision">
          <h1 className="pro-vision">VISION & OBJECTIVE</h1>
          <p>
            {" "}
            Aim to associate with an organisation that provides me an
            opportunity to utilize my Skills,
            <br /> to improve my knowledge with the latest technologies and
            having a desire to grow intellectually
            <br />
            within the organisation.
          </p>
        </div>
        <hr />
        <div className="ex">
          <h1 className="pro-vision">PROFESSIONAL EXPERIENCE</h1>
          <ul>
            <li>
              Worked As a Video Editor And Motion Graphics Artist With 1 Year Of
              Experience at iactivesocial
            </li>
            <li>
              Worked As a Motion Graphics Artist And Video Editor With 1 Year Of
              Experience at YOYO TV
            </li>
            <li>
              {" "}
              Worked As a Motion Graphics And Animator With 1 Year Of Experience
              at RAAJNEETHI STRATEGIE
            </li>
          </ul>
        </div>
        <hr />

        <div>
          <h1 className="pro-vision">TECHNICAL / SOFTWARE SKILLS</h1>
          <ul>
            <li>Adobe Photoshop</li>
            <li>After Effects</li>
            <li>Premier Pro</li>
            <li>Blender</li>
            <li>Adobe Illustrator</li>
          </ul>
        </div>
        <hr />
        <div>
          <h1 className="pro-vision">PERSONAL ATTRIBUTES</h1>
          <li>Fluency in ENGLISH & TELUGU Languages.</li>
          <li>Ability to learn new technologies</li>
          <li>Ability to work independently as well as a part of a team.</li>
          <li>Able to handle multiple tasks simultaneously</li>
          <li>Adaptability to work environment</li>
        </div>
        <hr />
        <div>
          <h1 className="pro-vision">EDUCATION QUALIFICATIONS</h1>
          <div>
            <table border="1" style={{ width: "100%", textAlign: "left" }}>
              <thead>
                <tr>
                  <th>Qualification</th>
                  <th>University/Board</th>
                  <th>Year of Completion</th>
                  <th> Grade in %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DEGREE</td>
                  <td>SIR C.R.REDDY DEGREE COLLEGE, ELURU</td>
                  <td>2019-2022 </td>
                  <td>66%</td>
                </tr>
                <tr>
                  <td>INTERMEDIATE</td>
                  <td>NARAYANA JUNIOR COLLEGE,ELURU</td>
                  <td>2017-2019</td>
                  <td>69%</td>
                </tr>
                <tr>
                  <td>SSC</td>
                  <td>R.C.M HIGH SCHOOL, VEGIWADA</td>
                  <td>2017</td>
                  <td>77%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h1 className="thankyou">Thank You!!😊</h1>
      </div>
    </div>
  );
};

export default Profile;
