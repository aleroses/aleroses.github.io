import { LabLink } from "./LabLink";

export const LabCard = ({ title, description, url }) => {
  return (
    <div className="group rounded-2xl border border-[#8892b026] bg-[#0a0f1a99] p-5 backdrop-blur-md transition-all duration-300 hover:border-[#00ffd5]">
      {/* <h3 className="mb-2 text-sm font-medium text-white">{title}</h3> */}

      <p className="mb-4 text-xs leading-relaxed text-gray-400">
        {description}
      </p>

      <LabLink
        url={url}
        name={title}
        // className="inline-block text-xs text-[#00ffd5]"
        className="transition-colors duration-300 group-hover:text-[#00ffd5]"
      />
    </div>
  );
};
