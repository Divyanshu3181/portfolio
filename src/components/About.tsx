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
              src="https://media-bom2-3.cdn.whatsapp.net/v/t61.24694-24/460903083_592607993427368_8158769960066249694_n.jpg?ccb=11-4&oh=01_Q5AaIMgNtsxHwowLWIAgy5cKL5iDsOnQ--VmQTyjFJZGkpJc&oe=675D66E4&_nc_sid=5e03e0&_nc_cat=104"
              alt="Divyanshu Sharma"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            Hi, I'm Divyanshu Sharma, a passionate web developer skilled in React.js, JavaScript, and modern front-end tools like Tailwind CSS. I love building user-friendly web applications and solving problems with clean, efficient code.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            With a strong foundation in both front-end and back-end technologies, I’m eager to contribute to innovative projects and collaborate with teams to create impactful solutions.Let’s connect and build something amazing together!
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
