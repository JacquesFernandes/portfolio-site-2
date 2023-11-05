import {NextPage} from "next";
import Head from "next/head";
import {Resume} from '../components/resume';

{/* eslint-disable react/no-unescaped-entities */}
const ResumePage: NextPage = () => {
  return <>
    <Head>
      <title>The Resume of Jacques Fernandes</title>
    </Head>

    <main className="bg-amber-50 w-full min-h-screen p-4" >
      <div className="max-w-3xl mx-auto" >
        <Resume.H1 >Jacques Fernandes</Resume.H1>

        <ul className="my-4 list-disc list-inside" >
          <li>Quick learner</li>
          <li>Passionate about software design & development</li>
          <li>Language Agnostic - Focussed on using the right tool for the job</li>
          <li>Multilingual - Primary language is English, but very familiar with Portuguese (Brazil) and Spanish (Argentina)</li>
        </ul>

        <Resume.Section name="Skills">
          <ul className="list-disc list-inside" >
            <li>Languages: Typescript, Javascript, PHP, SQL, Dart, Python (3.x), Java</li>
            <li>Frameworks: NextJS, ReactJS, Flutter (app), Laravel (7.x+), Node</li>
            <li>Testing: Jest, React Testing Library</li>
          </ul>
        </Resume.Section>

        <Resume.Hr />

        <Resume.Section name="Experience">
          <Resume.CompanySection name="ScottishPower" subLine="2021 - Senior Software Engineer / Full Stack">
            <Resume.List >
              <li>Worked on the ScottishPower retail website</li>
              <li>Developed multiple components using <strong>Typescript</strong>, <strong>React</strong> and <strong>SCSS (modules)</strong></li>
              <li>Worked on a <em>greenfield</em> project to rebuilt the retail website from a <strong>React SPA</strong> to a <strong>full-stack NextJS</strong> app</li>
              <li>Wrote unit tests using <strong>Jest</strong> (and <code>react-testing-library</code> for React)</li>
              <li>Built a PoC for the component build process using <strong>Rollup</strong></li>
            </Resume.List>
          </Resume.CompanySection>

          <Resume.CompanySection name="BrightSignals" subLine="2018 - Software Developer / Full Stack">
            <Resume.List >
              <li>Gained immense experience in front-end development</li>
              <li>Built up strong CSS3 and SCSS skills</li>
              <li>Heavy focus on rapid/agile development of UI/front-end</li>
              <li>
                <span>Due to nature of job and clients, worked on a variety of technologies and frameworks:</span>
                <Resume.List>
                  <li><strong>Mobile:</strong> Used Flutter to build STV News app v5.0 from the ground-up</li>
                  <li><strong>Front-end:</strong> Primarily React, heavy focus on styling and CSS3/SCSS</li>
                  <li><strong>Back-end:</strong> NodeJS, PHP (vanilla, Symfony & Laravel)</li>
                  <li><strong>CMS:</strong> Craft 3, some Drupal</li>
                </Resume.List>
              </li>
              <li>Built 2 types of physical installation which involved a <strong>Raspberry Pi</strong>, <strong>Flask (Python 3.x)</strong> and <strong>ReactJS+(S)CSS</strong></li>
              <li>Built a web-app which uses React (along wth CSS, jQuery and Lodash) + PHP & python to handle recording, submitting and processing/modifying videos.</li>
            </Resume.List>
          </Resume.CompanySection>

          <Resume.CompanySection name={"Castiko"} subLine={"2018 - Chief Technology Officer (CTO)"}>
            <Resume.List>
              <li>Continued coding despite being appointed as the CTO, to ensure that I remained close to the implementation (and the fact that I enjoy coding).</li>
              <li>
                <span>Introduced modern development practices like:</span>
                <Resume.List >
                  <li><strong>Agile methodology</strong> for rapid development and release cycles</li>
                  <li><strong>Git flow</strong> branching to reduce merge times and conflicts during builds</li>
                  <li>Ensuring code was <strong>peer-reviewed</strong></li>
                </Resume.List>
              </li>
              <li>
                <span>Drove initiative to migrate Android apps from <strong>React Native</strong> to <strong>Flutter</strong>. This resulted in:</span>
                <Resume.List>
                  <li>Smaller app (from 30 to 6.7 MB)</li>
                  <li>Noticeably smoother and neater UI (using Material UI)</li>
                  <li>Much faster development cycles (a feature which would take over a week in React Native, took a day or two in Flutter).</li>
                </Resume.List>
              </li>
              <li>
                <span>Introduced <strong>Google Firebase</strong> components</span>
                <Resume.List>
                  <li><strong>Cloud messaging</strong> for push notifications</li>
                  <li><strong>Auth</strong> and <strong>Dynamic links</strong> to make user acquisition seamless</li>
                </Resume.List>
              </li>
            </Resume.List>
          </Resume.CompanySection>

          <Resume.CompanySection name={"Castiko"} subLine={"2017 - Full Stack (MERN) Developer & Team Lead"}>
            <Resume.List >
              <li>Migrated the stack from LAMP to MERN (Mongo / Express / React / Node) and <strong>GraphQL</strong></li>
              <li>Addressed query injection security issues and other vulnerabilities</li>
              <li>Standardised the UI across the entire site for a consistent look and feel using <strong>Semantic UI React</strong></li>
              <li>Implemented a <strong>websocket-based</strong>, real-time notification system using <strong>Socket.io</strong></li>
            </Resume.List>
          </Resume.CompanySection>
        </Resume.Section>

        <Resume.Hr />

        <Resume.Section name={"Noteworthy (Work) Projects"}>
          <Resume.ProjectSection name={"STV NewsApp (v5.0)"} company={"BrightSignals"}>
            <p>A complete rebuild of the STV News app for both Android and iOS. Built using Flutter. Now maintained by STV's in-house dev.</p>
          </Resume.ProjectSection>

          <Resume.ProjectSection name={"Openplans"} company={"BrightSignals"}>
            <p>A "virtual consultation / townhall" site built using ReactJS and Marzipano. Strikes a decent balance between a 3D presence and performance on lower-end devices.</p>
          </Resume.ProjectSection>

          <Resume.ProjectSection name={"Linn.co.uk"} company={"BrightSignals"}>
            <p>Didn't have a heavy hand in the software, but with architecting and deploying an AWS-ready, scalable prototype</p>
          </Resume.ProjectSection>

          <Resume.ProjectSection name={"Meantime Skeeball machine"} company={"BrightSignals"}>
            <p>Built a custom popular arcade machine ("Skeeball") from scratch (electronics, software and some design). Ask me to find out more - as well as show you some of the photos I took!</p>
          </Resume.ProjectSection>

          <Resume.ProjectSection name={"Fringe Marketplace"} company={"BrightSignals"}>
            <p>A project from Edinburgh's The Fringe shortly after the pandemic hit. Helped artists find scouts and showcase their work for said scouts to find and sponsor them.</p>
          </Resume.ProjectSection>
        </Resume.Section>
      </div>
    </main>
  </>;
}

export default ResumePage;