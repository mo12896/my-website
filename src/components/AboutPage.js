function AboutPage() {
return (
<div className="about-page">
<h2>About me</h2>
<p>Hi there! My name is Moritz Müller and I am a passionate and driven software engineer based in Germany. I have 5+ years of experience working on a variety of projects ranging from robotics and AI to business innovation and data science. </p>
<p>I recently completed my Master's degree in Robotics, Cognition, and Intelligence from the Technische Universität München where I took courses such as Artificial Intelligence, Machine Learning, Computer Vision, and Robotics. In addition, I have completed various practical courses and seminars to further enhance my skills and knowledge.</p>
<p>During my time at BMW Group, I designed and implemented an application based on iterative RANSAC to enable fast detection and removal of plane geometries in 3D point cloud data. I also helped with other projects on CAD file conversion and Data Science related tasks.</p>
<p>As a Werkstudent at Agile Robots AG, I enabled small piece grasping on a 7-DoF industrial manipulator by designing and implementing pipelines for object detection and pose estimation using a combination of Classical & Deep Learning-based 3D Computer Vision techniques.</p>
<p>At E.ON, I worked as an Innovation Consultant where I developed two business models with an impactful potential to support the energy transition and digitalization of German cities. I also applied modern Design Thinking methods, communication tools, conducted over 60 expert interviews and held 2 workshops as part of a multidisciplinary student team.</p>
<p>Currently, I am a Visiting Student at the MIT Center for Collective Intelligence working on a topic related to visual tracking system for PERMA estimation using state-of-the-art deep neural networks and frameworks.</p>
<p>In my free time, I love to keep up with the latest technological advancements in the industry, work on personal projects and collaborate with like-minded individuals to tackle challenging problems.</p>
<p>Feel free to reach out to me via moritz1996.mueller@gmail.com or connect with me on LinkedIn to discuss potential opportunities, collaborations or just to chat.</p>
<br />
<br />
  <div>
    <h3>Education:</h3>
    <img src={process.env.PUBLIC_URL + '/images/schools.png'} alt="My School" />
      <br />
      <br />
    <h3>Work Experience:</h3>
    <img src={process.env.PUBLIC_URL + '/images/work.png'} alt="My Work Experience" />
  </div>
</div>
);
}

export default AboutPage;