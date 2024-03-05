import {CheckboxGroup} from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckbox";
import '../CandidateSkills/index.css'

export default function CandidateSkills({ groupSelected, setGroupSelected }) {
 
  return (
    <div className="flex flex-col gap-1 w-full">
      <h2 className="text-2xl mt-12 font-bold sm:text-3xl">Add your Skills</h2>
      <CheckboxGroup
        className="mt-12 gap-1 justify-center"
        orientation="horizontal"
        name="technology"
        value={groupSelected}
        onChange={setGroupSelected}
      >
        <CustomCheckbox value="Javascript">Javascript</CustomCheckbox>
        <CustomCheckbox value="HTML">HTML</CustomCheckbox>
        <CustomCheckbox value="CSS">CSS</CustomCheckbox>
        <CustomCheckbox value="Python">Python</CustomCheckbox>
        <CustomCheckbox value="React">React</CustomCheckbox>
        <CustomCheckbox value="Angular">Angular</CustomCheckbox>
        <CustomCheckbox value="Vue.js">Vue.js</CustomCheckbox>
        <CustomCheckbox value="Java">Java</CustomCheckbox>
        <CustomCheckbox value="C#">C#</CustomCheckbox>
        <CustomCheckbox value="PHP">PHP</CustomCheckbox>
        <CustomCheckbox value="Ruby">Ruby</CustomCheckbox>
        <CustomCheckbox value="Django">Django</CustomCheckbox>
        <CustomCheckbox value="Swift">Swift</CustomCheckbox>
        <CustomCheckbox value="C++">C++</CustomCheckbox>
        <CustomCheckbox value="SQL">SQL</CustomCheckbox>
        <CustomCheckbox value=".NET">.NET</CustomCheckbox>
        <CustomCheckbox value="ASP.NET">ASP.NET</CustomCheckbox>
        <CustomCheckbox value="Node.js">Node.js</CustomCheckbox>
        <CustomCheckbox value="Bootstrap">Bootstrap</CustomCheckbox>
        <CustomCheckbox value="Tailwind CSS">Tailwind CSS</CustomCheckbox>
      </CheckboxGroup>
      <p className="mt-4 ml-1 text-default-500">
        Selected Skills: {groupSelected.join(", ")}
      </p>
      <div className="border-b border-gray-900/10 pb-12"></div>
    </div>
  );
}
