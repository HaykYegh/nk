import React from 'react';

import styles from './CareerDetails.module.scss';
import { careerDetailsImg1 } from '../../constants';

const CareerDetails = () => {
  return (
    <div className={styles.CareerDetails}>
      <img src={careerDetailsImg1} alt="" />
      <div className={styles.titleDescription}>
        <h4>Senior Data Engineer</h4>
        <p>
          Are you someone who gets excited about working with data? Do you enjoy
          taking raw information and turning it into valuable insights? Well,
          guess what? We`re on the hunt for a Data Engineer, and we`d love for
          you to join our team.This role will cover a diverse array of domain
          areas such as data management and data operations, and analytics
          solutions requiring a combination of batch or streaming data
          pipelines, data lakes. The Data Engineer role requires strong
          technical skills on Cloud environments as well as flexibility,
          collaboration and great teamwork abilities.
        </p>
      </div>
      <h4>JOB RESPONSIBILITIES</h4>
      <ul>
        <li>Lead the gathering and processing of data at scale.</li>
        <li>
          Influence technical direction, choosing the best tools and approaches
          for the job at hand.
        </li>
        <li>
          Design and deliver high-quality features that are testable,
          maintainable, scalable, monitorable, reusable, and efficient.
        </li>
        <li>
          Design, develop and maintain data solutions that will enable the BI
          and analytics solutions, inclusive of ETL, data aggregation, and
          custom calculations following data governance best practices.
        </li>
        <li>
          Provide technical expertise, guidance, advice and knowledge transfer
          on aspects of code management, automated release builds, and code
          deployment.
        </li>
        <li>Develop end-to-end cloud-based data production pipelines.</li>
        <li>
          Influence successful delivery by discussing scope trade-offs, doing
          design and code reviews, planning, and delegating.
        </li>
        <li>
          Translate complex functional and technical requirements into detailed
          architecture, design, and high-performing solutions and applications.
        </li>
        <li>
          Work with peer developers to make sure that all data solutions are
          consistent, upholding data integrity and following data integration
          best practices.
        </li>
      </ul>
      <h4>REQUIRED QUALIFICATIONS</h4>
      <ul>
        <li>
          5+ years of experience in development and cloud Data Processing
          applications.
        </li>
        <li>3+ years of strong Analytics/ETL experience.</li>
        <li>
          Hands-on experience on Cloud-based services such as Google Cloud
          Platform (GCP), Amazon Web Services (AWS) or Microsoft Azure.
        </li>
        <li>
          Experience in building highly scalable distributed data pipelines
          using open source tools and big data technologies such as Spark, Kafka
          or Beam.
        </li>
        <li>Development experience with Python, Java or Scala.</li>
        <li>Experience with UNIX tools and shell scripting.</li>
        <li>
          Solid SQL skills for querying databases and data-lakes (e.g.,
          BigQuery, Hive, SQL Server, DB2, MySQL, etc).
        </li>
        <li>
          Proven ability to work independently, be self-motivated with a high
          degree of intellectual curiosity.
        </li>
        <li>
          Understanding of Machine Learning, Data Processing, Fundamental Data
          Structures, and Algorithms.
        </li>
        <li>Good level of spoken and written English</li>
      </ul>
      <h4>WHAT SKILLS ARE IMPORTANT TO US?</h4>
      <ul>
        <li>
          Strong communication and collaboration skills working
          cross-functionally with other engineers, project managers, and QA`s
        </li>
        <li>
          Be a role model for everyone, and demonstrate a high level of ethics
          and integrity with cultures and values.
        </li>
        <li>
          Passionate about building high-impact, high-performing user
          experiences
        </li>
        <li>Be a mentor for the team and gives effective feedback </li>
        <li>
          Always willing to help with advice and solutions to people outside the
          team
        </li>
        <li>
          Independent, proactive, and able to deliver production-ready code with
          minimal guidance
        </li>
        <li>Knowledge sharing with other team members</li>
        <li>Be a positive and friendly team member</li>
      </ul>
      <h4>HOW TO APPLY</h4>
      <p>
        Send your CV to <b>careers@simplytechnologies.net</b>
      </p>
      <p>Location: Yerevan, Armenia, Deadline: September 12</p>
      <div className={styles.applyBtn}>
        <button>APPLY NOW</button>
      </div>
    </div>
  );
};

export default CareerDetails;
