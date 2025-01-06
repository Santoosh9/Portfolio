import React from 'react';
import { motion } from 'framer-motion';
import AboutCard from './AboutCard';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

        <AboutCard
            title="Information Technology Engineer"
            subTitle=" Nabil Bank  (Aprl 2024 - July 2024)"
            result="Kathmandu Durbarmarg"
            des="I am an experienced Information Technology Engineer at Nabil Bank with a strong foundation in software engineering and IT infrastructure management. I specialize in problem-solving, error analysis, DNS management, and IT service management, ensuring seamless and secure operations. My software engineering skills enable me to design, develop, and implement efficient solutions that align with business objectives. I am passionate about delivering innovative technical solutions, enhancing system reliability, and driving digital transformation to support organizational goals."
          />
          <AboutCard
            title="Web Developer"
            subTitle=" RR Shree School of Technology (October 5 2023 – March 15 2024)"
            result="Kathmandu Jamal"
            des="Work with senior developer to manage large, complex design projects for corporate clients and real clients. 
Developed responsive websites using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and 
optimal performance. 
Stayed up-to-date with emerging web development technologies and best practices through self-learning and 
professional development resources. "
          />
          <AboutCard
            title=" Junior React Associative"
            subTitle=" Softechpark (December 17 2022 – March 10 2023)"
            result="Kathmandu Tinkuney"
            des="Cooperate with designers create clean interfaces.
 Work with senior developer to manage large, complex 
design projects for corporate clients.
Learning opportunity of new technology and framework 
like Next JS 13, and Tailwind CSS.
Collaboration with team using Git and Jira for 
teamwork."
          />
          <AboutCard
            title="React JS Internship "
            subTitle="GrayCode Technology - (September 19 2021 – January 20 2022)"
            result="Pulchowk Lalitpur"
            des="Understanding the real time work environment.Cooperate and taking responsibility with team members.Making website responsive using media-quires.Learn different concept with technical term and 
condition and  Understanding the workflow of React JS"
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;
