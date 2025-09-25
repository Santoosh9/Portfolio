import React from 'react';
import Title from '../layout/Titel';
import {
  ecommerce,
  recipes,
  shoes,
  libary,
  travel1,
  ai,

} from '../../assets/index';
import ProjectsCard, { ProjectsCard2 } from './ProjectsCard';

const Project = () => {
  return (
    <section
      id="project"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PROJECTS AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="AI-Enhanced E-Commerce for Local Business Growth"
          des="This is my MSc dissertation project where I developed an AI-powered e-commerce platform. 
  It integrates machine learning models for personalization, recommendations, and stock predictions. 
  The frontend is built with React.js and Tailwind CSS, and the backend is powered by .NET. 
  The system follows Agile methodology and aims to support local business scalability and growth. "
          src={ai}
          githubLink="https://github.com/Santoosh9/ai-ecommerse"
          published="https://smartlocal.vercel.app/"
        />
        <ProjectsCard
          title="Travel Website"
          des="Pilgrims Travels is a lightweight and interactive travel website built using React.js and styled with SCSS for a clean and modern user interface.
           Smooth animations are integrated using CSS transitions and animation libraries to enhance user experience across pages like destinations, bookings, and contact. "
          src={travel1}
          githubLink="https://github.com/Santoosh9/Pligrims-holidays"
          published="https://pligrims.vercel.app/"
        />
        <ProjectsCard
          title="Recipe Finder App"
          des="By using React JS and SASS I build this web application. In application there are three main page and 
        some other page. I used react usestate hook for fetching data from custom API and css annimation. User can search 
      food ítems from serchbox"
          src={recipes}
          githubLink="https://github.com/Santoosh9/Recipes_finder.git"
          published="https://master--recipe-finder-apps.netlify.app/"
        />


         <ProjectsCard
          title="Online Shoes Store"
          des="This is my ongoing project. I use React JS and Tailwind CSS for this web application. This is fully 
          responsive website. I use some CSS annimation on this project."
          src={shoes}
          githubLink="https://github.com/Santoosh9/shoes-store.git"
          published="https://master--rainbow-gingersnap-69956a.netlify.app/"
        />

<ProjectsCard
          title=" E-learning Website"
          des="E-learning is  E-commerce website where user can view all types of TU qustions Tuition and LockSewa qustions. In the frontend part I use react and tailwind Css for making this website. I use Redux for state management and there is lot of frontend feature I used."
          src={ecommerce}
          githubLink="https://github.com/Santoosh9/ecommerce-project.git"
          published="https://smartgk-webapp.vercel.app/"
        />
        <ProjectsCard2
          title="Library management system"
          des="By using java programming language, I developed library management system.Library management system which helps to maintaining book in a 
          library and it helps to searching books in library"
          src={libary}
          githubLink="https://github.com/Santoosh9/libarymanagement.git"
        />
      </div>
    </section>
  );
};

export default Project;
