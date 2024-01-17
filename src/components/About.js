import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/profileImg.jpg";
import { IoMdDownload } from "react-icons/io";
import resume from "../assets/ChrisBlake_Resume.pdf";
import { SiPython, SiAmazonaws, SiTypescript, SiPostgresql, SiJavascript, SiCsharp, SiMicrosoftsqlserver } from "react-icons/si";
import { FaNodeJs, FaCss3Alt, FaReact, FaVuejs} from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";

function About() {
	return (
		<Container className="aboutPageWrapper">
			<Row className="aboutMeTitleWrapper">
				<Col className="aboutMeTitle">
					<h1>
						About<span> Me</span>
					</h1>
				</Col>
			</Row>
			<Row className="aboutMainWrapper">
				<Col md={6} className="aboutMeImg">
					<img src={profileImg} alt="Im Chris" />
				</Col>
				<Col md={6} className="aboutMeInfo">
					<div className="aboutMeInfoWrapper">
						<h2>Personal Info</h2>
						<p>
							Hi I'm Chris! I'm a Software Engineer with a passion for all things tech. I thrive on solving problems and creating unique solutions
							that make a positive impact. My ultimate goal is to make a meaningful impact in the world by leveraging the latest technologies and 
                            tools to create innovative solutions that inspire and assist others.
						</p>
						<a href={resume} download>
							<span className="resumeDownload">Download Resume</span>
							<span className="resumeSvg">
								<IoMdDownload />
							</span>
						</a>
					</div>
				</Col>
			</Row>

			<hr className="separator" />

			<Row className="skillsTitleWrapper">
				<Col className="skillsTitle">
					<h2>Skills</h2>
				</Col>
			</Row>
			<Row className="skillsListWrapper">
				<Col xs={6} sm={4} md={3} className="skillsList">
					<SiCsharp />
					<h5>C#</h5>
				</Col>
				<Col xs={6} sm={4} md={3} className="skillsList">
					<SiJavascript />
					<h5>JavaScript</h5>
				</Col>
				<Col xs={6} sm={4} md={3} className="skillsList">
					<SiPython />
					<h5>Python</h5>
				</Col>
				<Col xs={6} sm={4} md={3} className="skillsList">
					<FaVuejs />
					<h5>Vue</h5>
				</Col>
				<Col xs={6} sm={4} md={3} className="skillsList">
					<FaReact />
					<h5>React</h5>
				</Col>
				<Col xs={6} sm={4} md={3} className="skillsList">
					<AiFillHtml5 />
					<h5>HTML</h5>
				</Col>
				<Col xs={6} sm={4} md={3} className="skillsList">
					<FaCss3Alt />
					<h5>CSS</h5>
				</Col>
				<Col xs={6} sm={4} md={3} className="skillsList">
					<FaNodeJs />
					<h5>Node.js</h5>
				</Col>
				<Col xs={6} sm={4} md={3} className="skillsList">
					<SiTypescript />
					<h5>TypeScript</h5>
				</Col>
				<Col xs={6} sm={4} md={3} className="skillsList">
					<SiMicrosoftsqlserver />
					<h5>SQL Server</h5>
				</Col>
				<Col xs={6} sm={4} md={3} className="skillsList">
					<SiPostgresql />
					<h5>Postgres</h5>
				</Col>
				<Col xs={6} sm={4} md={3} className="skillsList">
					<SiAmazonaws />
					<h5>AWS</h5>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
