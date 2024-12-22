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
            Hi, I'm Divyanshu Sharma, a dedicated and results-driven software developer skilled in C++, React.js, JavaScript, and modern front-end tools like Redux, Tailwind CSS. I love building user-friendly web applications and solving problems with clean, efficient code.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            My technical toolkit encompasses React.js, Redux, Tailwind CSS, C++, and MySQL, alongside proficiency in tools like Git and Visual Studio Code. I’m skilled in building scalable applications, testing techniques, and implementing agile methodologies (SDLC).
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
