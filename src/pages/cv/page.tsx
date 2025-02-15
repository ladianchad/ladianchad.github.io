import {ReactNode} from "react";
import cn from "../../libs/cn";

const Section = ({
                     title,
                     children
                 }: {
    title: string,
    children?: ReactNode
}) => {
    return <div className="flex flex-col text-left">
        <h2 className="text-lg font-bold bg-gray-700 text-white px-2">{title}</h2>
        <div className={cn("px-2 flex flex-col gap-2 divide-y", typeof children != "string" ? null : "py-2")}>
            {children}
        </div>
    </div>
}

const Content = ({
                     children,
                     date
                 }: {
    children: ReactNode,
    date: string
}) => {
    return <div className="flex justify-between px-1 font-semibold py-2 gap-2">
        <span className="flex flex-col text-left">
         {children}
        </span>
        <span className="font-semibold min-w-44">{date}</span>
    </div>
}

const CVPage = () => {
    return <div className="flex flex-col gap-2 text-center pt-2">
        <h1 className="text-2xl font-bold flex flex-col pt-4font-serif">
            <span>Chan Hui Jung</span>
            <span className="text-xs">+82 1030008899</span>
            <span className="text-xs">qhrejddlvltm@gmail.com</span>
        </h1>
        <Section title="RESEARCH INTERESTS">
            Research and development of optimized autonomous driving capabilities for multi-agent systems in congested
            environments.
        </Section>
        <Section title="EDUCATION">
            <Content date="2016.03 ~ 2023.02">
                Bachelor of Science in Robot Engineering, Hanyang University ERICA
                <div>
                    <p className="text-xs font-normal">Cumulative GPA : 3.69 / 4.5, Major GPA : 3.92 / 4.5</p>
                </div>
            </Content>
        </Section>
        <Section title="Major Courses">
            <div className="flex flex-wrap py-2 text-sm">
                <span className="px-1">Kinematics,</span>
                <span className="px-1">Statics,</span>
                <span className="px-1">Circuit Theory,</span>
                <span className="px-1">Circuit Laboratory,</span>
                <span className="px-1">Introduction to Robotics Design,</span>
                <span className="px-1">Data Structures and Algorithms,</span>
                <span className="px-1">Operating Systems,</span>
                <span className="px-1">Embedded Operating Systems,</span>
                <span className="px-1">Computer Architecture,</span>
                <span className="px-1">System Analysis,</span>
                <span className="px-1">Automatic Control,</span>
                <span className="px-1">Machine Learning,</span>
                <span className="px-1">Deep Learning</span>
            </div>
        </Section>
        <Section title="HONOR AND AWARDS">
            <Content date="2021.11">
                2021 Creative Engineering Design Competition organized by the Center for Innovative
                Engineering Education, Silver Award, Sungkyunkwan University.
            </Content>
            <Content date="2021.02">
                CARE innovation idea Gig-Education Program, Grand prize, 4th Industrial Revolution In-
                novation Leading University Artificial Intelligence Cooperative Robot Project Group, Hanyang University
                ERICA
            </Content>
            <Content date="2016 ~ 2023">
                Hanyang Rainbow Scholarship, Hanyang University ERICA
            </Content>
        </Section>
        <Section title="EXPERIENCE">
            <Content date="2024.09 ~ ">
                Gogifarm Co.,Ltd
                <div className="text-xs">
                    <div className="font-semibold pt-0.5">Tech leader</div>
                    <dl className="font-normal">
                        <li>
                            Designing and implementing scalable system architectures to enhance performance and
                            reliability
                        </li>
                        <li>
                            Leading cross-functional teams in the successful delivery of multiple projects within budget
                            and ahead of schedule
                        </li>
                        <li>
                            Developing and maintained robust back-end services using Kotlin, Spring and Docker.
                        </li>
                        <li>
                            Implementing responsive front-end interfaces with Next.js, enhancing user engagement.
                        </li>
                    </dl>
                </div>
            </Content>
            <Content date="2022.06 ~ 2024.09">
                Floatic Co.
                <div className="text-xs">
                    <div className="font-semibold pt-0.5">Robotics software engineer (including platform, navigation)
                    </div>
                    <dl className="font-normal">
                        <li>
                            Designed and implemented overall system architecture of a warehouse robot.
                        </li>
                        <li>
                            Created and maintained robot sensor drivers.
                        </li>
                        <li>
                            Developing autonomous multi-robot navigation with software team.
                        </li>
                        <li>
                            Implementing communication system for interacting with back-end and front-end service.
                        </li>
                        <li>
                            Implementing infrastructures for developing robots.
                        </li>
                    </dl>
                </div>
            </Content>
            <Content date="2019.12 ~ 2021.07">
                Research Assistant, Hanyang University ERICA
                <div className="text-xs">
                    <div className="font-semibold pt-0.5">Research assistant and teaching assistant</div>
                    <dl className="font-normal">
                        <li>
                            Conducted research and development on national-industry collaboration projects and corporate
                            projects.
                        </li>
                        <li>
                            Prepared and delivered lectures for major courses.
                        </li>
                        <li>
                            Participated in and led study sessions on robotics theory within the laboratory.
                        </li>
                    </dl>
                </div>
            </Content>
        </Section>
        <span className="h-6"></span>
        <Section title="TEACHING AND MENTORING EXPERIENCE">
            <Content date="2020 ~ 2022">
                Mentor in the Departmental Academic Society of the Department of Robot Engineering at Hanyang
                University ERICA.
                <dl className="font-normal text-xs">
                    <li>
                        Conducted and managed large-scale lectures on C/C++ programming.
                    </li>
                    <li>Conducted a robot control system study</li>
                    <li>Conducted a robot sensor filtering study</li>
                </dl>
            </Content>
            <Content date="2020 Fall Semester">
                Teaching Assistant, Collaborative Robot Design lecture in Hanyang University ERICA
                <dl className="font-normal text-xs">
                    <li>
                        Introduction to Robotics Design is a course that provides comprehensive knowledge of
                        robotics, covering aspects from design to control. Including mechanical analysis,
                        design principles, motion planning, and control strategies.
                    </li>
                </dl>
            </Content>
            <Content date="2020 Spring Semester">
                Teaching Assistant, Introduction to Robotics Design in Hanyang University ERICA
                <dl className="font-normal text-xs">
                    <li>
                        Introduction to Robotics Design is a course that provides comprehensive knowledge of
                        robotics, covering aspects from design to control. Including mechanical analysis,
                        design principles, motion planning, and control strategies.
                    </li>
                </dl>
            </Content>
        </Section>
        <Section title="PROJECT">
            <Content date="2021 Fall">
                Churo 2 : Outsourcing of Dog Care Robot Development , ROBOI
                <dl className="font-normal text-xs">
                    <li>
                        Developed a vision-based AI system to assess canine health and emotional states.
                    </li>
                </dl>
            </Content>
            <Content date="2020 Spring ~ 2021 Fall">
                2020 Item Assembly AI Robot Challenge, Ministry of Science and Technology Information
                and Communication, Ministry of Trade, Industry and Energy Korea
                <dl className="font-normal text-xs">
                    <li>
                        Developed vision-based inspection software to detect holes for furniture assembly.
                    </li>
                </dl>
            </Content>
            <Content date="2020 Fall ~ 2021 Spring">
                Capston Design, Hanyang University ERICA : Automotive marine rescue robot
                <dl className="font-normal text-xs">
                    <li>
                        An autonomous maritime search and rescue robot equipped with thermal imaging, LoRa
                        communication, GPS, and a web server.
                    </li>
                </dl>
            </Content>
            <Content date="2020 Spring">
                Film Defect Inspection Software development, UNIEYE
                <dl className="font-normal text-xs">
                    <li>
                        Integrating a program that check film quality from Window to linux, improving its algorithms.
                    </li>
                </dl>
            </Content>
            <Content date="2020 Spring">
                Donation robot, Intelligent Robot Crash Lab lecture, Hanyang University ERICA
                <dl className="font-normal text-xs">
                    <li>
                        Developing a donation-accepting robot from scratch.
                    </li>
                </dl>
            </Content>
        </Section>
        <Section title="TECHNICAL SKILLS">
            <dl className="font-normal py-2">
                <li>
                    <strong>Programming languages</strong> : C, C++, Java, Javascript, Kotlin, Python, PHP, HTML
                </li>
                <li>
                    <strong>Programming Frameworks</strong> : Docker, AWS, Kubernetes, ROS, ROS2(contributor), ROS
                    navigation, ROS2
                    navigation(contributor), Spring, React, Next, Mysql, Matlab
                </li>
                <li>
                    <strong>Mechanical Design Program</strong> : Solidworks, Inventor
                </li>
                <li>
                    <strong>Used OS</strong> : Linux (Ubuntu, CentOS), Mac OS, Window OS
                </li>
            </dl>
        </Section>
        <Section title="LANGUAGES">
            TOEFL : 90 , Best Score TOEFL : 103
        </Section>
    </div>
}

export default CVPage
