import { Link } from 'react-router-dom';
import '../index.css';

function ProjectsPage() {
  const projects = [
    {
      title: 'Visual PERMA Tracking',
      text: 'This repository is dedicated to my master thesis, which focuses on predicting team performance from visual data. The objective of this research is to extract meaningful features such as emotions, engagement, and synchronization from individual team members using novel AI tools for Face Detection, Tracking, Re-Identification, Emotion Estimation and Body Pose Estimation for example. The generated features will then be used to calculate the PERMA score of the overall team and to determine if there is a correlation between the PERMA score and the team\'s performance. \n\nPERMA is a metric that measures subjective happiness, and it is an essential part of this research. The overall goal is to increase the happiness of individuals and teams by better understanding the factors that contribute to happiness in a team setting. \n\nFeel free to explore the repository and ask any questions or share ideas. Your feedback and collaboration are always welcome. I am looking forward to sharing my research with you and making a positive impact in the field of team dynamics. \n\nIf you have any questions or ideas, please don\'t hesitate to get in touch. I am always open to feedback and suggestions.',
      imageUrl: process.env.PUBLIC_URL + '/images/project_1.gif',
      link: 'https://github.com/mo12896/emotion-recognition',
    },
    {
      title: 'Plane Detection in Point Cloud Data',
      text: 'The goal of this repository is to provide a simple interface for plane removal in point cloud data.',
      imageUrl: process.env.PUBLIC_URL + '/images/project_2.png',
      link: 'https://github.com/mo12896/plane-detection-in-point-cloud-data',
    },
  ];

  return (
    <div>
    {projects.map((project) => (
        <div key={project.title} className="projects-page">
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <Link to={project.link}>
            <img src={project.imageUrl} style={{ display: 'block', margin: 'auto' }} />
        </Link>
        </div>
    ))}
    </div>
  );
}

export default ProjectsPage;