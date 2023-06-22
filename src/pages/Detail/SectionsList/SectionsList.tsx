import { Sections } from "..";
import { motion } from "framer-motion";

interface SectionsProps {
  isSelected: string
  handleSelectedClick: (section: string) => void
}

const lineVariants = {
  hidden: { width: '0' },
  visible: { width: "100%" },
};

const sections = ['overview', 'trailers', 'more like this', 'details'];

export const SectionsList = ({ isSelected, handleSelectedClick }: SectionsProps) => {
  return (
    <>
      <Sections>
        <ul>
          {sections.map((section) => {
            const isSelectedClass = isSelected === section ? "line" : "";
            return (
              <motion.li
                key={section}
                onClick={() => handleSelectedClick(section)}
                initial={{ opacity: 0 }}
                animate={{ opacity: isSelected === section ? 1.1 : 0.5 }}
                transition={{ duration: 0.4 }}
              >
                {section}
                <motion.div
                  className={isSelectedClass}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                />
              </motion.li>
            );
          })}
        </ul>
      </Sections>
    </>
  )
}