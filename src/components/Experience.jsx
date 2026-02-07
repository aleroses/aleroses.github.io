export const Experience = ({ newLang }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {newLang.content.aboutMeContent.experience.items.map((job, index) => (
        <div
          key={index}
          className="group space-y-2 rounded-2xl border border-[#8892b026] bg-[#0a0f1a99] p-5 backdrop-blur-md transition-all duration-250 ease-in-out hover:border-[#00ffd5]"
        >
          <h3 className="font-medium transition-colors duration-250 ease-in-out group-hover:text-[#00ffd5]">
            {job.role}
          </h3>

          <p className="text-xs text-gray-400">
            {job.company} — {job.location}
          </p>
          <p className="text-xs italic">{job.period}</p>

          <ul className="list-disc pl-4">
            {job.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
