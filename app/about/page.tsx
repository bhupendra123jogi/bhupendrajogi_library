'use client'

import { BackButton } from "../components/BackButton";

export default function About() {
  return (
    <>
      <div className="p-10">
        <h1 className="text-4xl font-bold hover:underline hover:cursor-pointer">About this site</h1>
        <span className="flex flex-col space-y-4 text-xl mt-5">
          <div>
            KodingBooks is an online library dedicated to providing a vast
            collection of books on programming, scripting, operating systems, and
            more. Our platform aims to support the mission of SDG 4 - Quality
            Education by offering accessible and comprehensive resources to
            individuals seeking to enhance their knowledge and skills in the field
            of technology.
          </div>
          <div>
            In today's digital era, where the virtual world has
            revolutionized the way we access and consume information, KodingBooks
            brings together a diverse range of digital products. Unlike
            traditional physical books, our digital library offers the convenience
            of instant access to a wealth of knowledge without the need for a
            physical form or substance.
          </div>
          At KodingBooks, we understand the
          importance of human-centered problem-solving. We believe that
          technology plays a crucial role in addressing various challenges faced
          by individuals and communities. By providing a platform that hosts a
          wide array of programming and technical resources, we empower learners
          and professionals to develop innovative solutions that contribute to
          the betterment of society.
          <div>
            Whether you are a student, an aspiring
            developer, or a seasoned professional, KodingBooks is here to support
            your learning journey. Our curated collection of books covers a wide
            range of topics, including programming languages, web development,
            mobile app development, data science, and more. Each book is carefully
            selected to ensure high-quality content and relevance to the
            ever-evolving technology landscape.
          </div>
          <div>
            Join us at KodingBooks and unlock
            a world of knowledge and possibilities. Together, let's harness the
            power of digital education to foster a community of lifelong learners
            and drive positive change in line with SDG 4 - Quality Education.
          </div>
        </span>
      </div>

      <BackButton position="top-5 right-5" tooltipPos={'tooltip-left'} />
    </>
  );
}
