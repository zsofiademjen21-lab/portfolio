import {
  Avatar,
  Card,
  Flex,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import photo from "../assets/my_photo.jpg";
import { DiGit, DiPython, DiReact } from "react-icons/di";
import { FaLaptopCode } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { TbSchoolFilled, TbSchool } from "react-icons/tb";
import { MdPsychology } from "react-icons/md";
import PageWrapper from "../components/PageWrapper";
import PageCard from "../components/PageCard";

const skills = [
  {
    icon: <MdPsychology size={32} />,
    label: "Artificial Intelligence / Machine Learning Models",
  },
  { icon: <DiPython size={32} />, label: "Python" },
  { icon: <DiReact size={32} />, label: "React" },
  { icon: <DiGit size={32} />, label: "Git" },
  { icon: <DiPostgresql size={32} />, label: "PostgreSQL" },
];

function About() {
  return (
    <PageWrapper>
        <PageCard>
          <Card.Body gap="6">
            <Flex gap={6} align="center">
              <Avatar.Root size="2xl" shape="full" flexShrink={0}>
                <Avatar.Image src={photo} />
                <Avatar.Fallback name="Zsófia Demjén-Nagy" />
              </Avatar.Root>
              <Card.Title fontSize="2xl">About me</Card.Title>
            </Flex>

            <Flex direction="column" gap={2}>
              <Flex align={{ base: "flex-start", md: "center" }} direction={{ base: "column", md: "row" }} gap={{ base: 2, md: 0 }}>
                <Flex gap={2} align="center" width={{ base: "auto", md: "360px" }}>
                  <TbSchoolFilled size={20} />
                  <Text fontSize="medium">Biochemical Engineering BSc</Text>
                </Flex>
                <Flex gap={2} align="center">
                  <FaLaptopCode size={20} />
                  <Text fontSize="medium">IBM Q&A Test Developer Intern</Text>
                </Flex>
              </Flex>
              <Flex align="center">
                <Flex gap={2} align="center">
                  <TbSchool size={20} />
                  <Text fontSize="medium">
                    Artificial Intelligence MSc - In progress
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Card.Description
              fontSize="medium"
              color="white"
              textAlign="justify"
            >
              I am Zsófia Demjén-Nagy, I am pursuing a Master's degree in
              Artificial Intelligence at Johannes Kepler University Linz. I have
              a BSc degree in Biochemical Engineering from Budapest University
              of Technology and Economics. Currently I am working at IBM as a QA
              Test Developer Intern, where I focus on software quality assurance
              and I also contribute to application development. My background
              spans both the natural sciences and software engineering, giving
              me a unique perspective on problem-solving. I enjoy working at the
              intersection of technology and science, and I am passionate about
              applying AI techniques to solve real-world problems. Outside of
              work and studies, I love exploring new tools, building personal
              projects, and continuously expanding my skill set.
            </Card.Description>
          </Card.Body>
          <Card.Footer>
            Skills:
            {skills.map(({ icon, label }) => (
              <Tooltip.Root key={label}>
                <Tooltip.Trigger asChild>{icon}</Tooltip.Trigger>
                <Tooltip.Positioner>
                  <Tooltip.Content>{label}</Tooltip.Content>
                </Tooltip.Positioner>
              </Tooltip.Root>
            ))}
          </Card.Footer>
        </PageCard>
    </PageWrapper>
  );
}

export default About;
