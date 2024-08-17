import React from "react";
import "./Home.css";
import backgroundImage from "../../assets/images/background.webp";

const Home: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-center text-black mb-8">
          Discover my background, skills, and projects. You can also view my
          resume in English or French.
        </p>
        <div className="flex justify-around">
          <a
            href="outpput/cv_fra.pdf"
            target="_blank"
            className="bg-blue-800 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            French CV
          </a>
          <a
            href="outpput/cv_en.pdf"
            target="_blank"
            className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300"
          >
            English CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
