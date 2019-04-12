import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import WorkIcon from '../icons/WorkIcon';
import SchoolIcon from '../icons/SchoolIcon';
import 'react-vertical-timeline-component/style.min.css';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button className="resume-download" href="../assets/YesseniaChaiuZhang_Resume.pdf" download>Download My Resume</Button>
                    </Col>
                </Row>
                <VerticalTimeline className="timeline-container">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="3/2019 - Present"
                        iconStyle={{ background: 'rgb(234, 140, 66)', color: '#fff' }}
                        position="left"
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">GreenInfo Network</h4>
                        <p>
                        Web Development of Interactive Maps
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="9/2018 - 2/2019"
                        iconStyle={{ background: 'rgb(239, 140, 62)', color: '#fff' }}
                        position="right"
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineering Fellow</h3>
                        <h4 className="vertical-timeline-element-subtitle">Hackbright Academy</h4>
                        <p>
                        Fullstack Software Engineering Fellowship for Women
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="11/2016 - Present"
                        iconStyle={{ background: 'rgb(211, 131, 88)', color: '#fff' }}
                        position="left"
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">GIS Analyst</h3>
                        <h4 className="vertical-timeline-element-subtitle">GreenInfo Network</h4>
                        <p>
                        Spatial Analysis, Database Management, Cartography, Geoprocessing Automation 
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="1/2016 - 11/2016"
                        iconStyle={{ background: 'rgb(174, 119, 120)', color: '#fff' }}
                        position="right"
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">GIS Certificaiton</h3>
                        <h4 className="vertical-timeline-element-subtitle">Penn State</h4>
                        <p>
                            GIS Fundamentals, Progamming and Automation, Database Development
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="8/2015 - 10/2016"
                        iconStyle={{ background: 'rgb(138, 106, 151)', color: '#fff' }}
                        position="left"
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Health Worker</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco Department of Public Health</h4>
                        <p>
                        Primary Care Coordination, Community Liaison, Preventative Screening Outreach
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="9/2013 - 6/2015"
                        iconStyle={{ background: 'rgb(96, 90, 185)', color: '#fff' }}
                        position="right"
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Environmental Health Sciences, MPH</h3>
                        <h4 className="vertical-timeline-element-subtitle">University of California, Los Angeles</h4>
                        <p>
                        GIS, Biostatistics, Program Evaluation, Toxicology, Epidemiology 
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="9/2008-6/2012"
                        iconStyle={{ background: 'rgb(47, 72, 222)', color: '#fff' }}
                        position="left"
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Environmental Science, BS</h3>
                        <h4 className="vertical-timeline-element-subtitle">University of California, Los Angeles</h4>
                        <p>
                        Public Policy, Biochemistry, Ecology, Geography, GIS, Chinese Minor
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
        </div>
        )
    }
}

export default About;