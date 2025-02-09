import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="about.jpg"
              alt="Divyanshu Sharma"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-4xl font-extrabold text-center text-black-600 mb-16" variants={fadeInUp}>
              Divyanshu Sharma 👋🏼
            </motion.p>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              Hi, I'm Divyanshu Sharma, a passionate and results-driven software developer with expertise in full-stack development.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              I specialize in JavaScript, C++, and SQL, with hands-on experience in both front-end and back-end technologies. On the front-end, I work with React.js, Redux, Tailwind CSS, and HTML/CSS, crafting seamless and responsive user interfaces. On the back-end, I build scalable and efficient systems using Node.js, Express.js, MongoDB, and MySQL.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              I am proficient in tools and platforms like Visual Studio Code, GitHub, and Postman, enabling smooth development and debugging workflows. Additionally, I have a strong foundation in Data Structures & Algorithms, Agile methodologies (XP, SDLC), Scalability, and Testing Techniques, ensuring robust and maintainable software solutions.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              I thrive on solving complex problems and building high-performance applications that enhance user experience. Always eager to learn and innovate, I strive to stay updated with the latest industry trends.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >

            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
