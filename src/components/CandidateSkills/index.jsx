import React from "react";
import {CheckboxGroup} from "@nextui-org/react";
import {CustomCheckbox} from "./CustomCheckbox";

export default function CandidateSkills () {
  const [groupSelected, setGroupSelected] = React.useState([]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <h2 class="text-3xl font-bold tracking-tight sm:text-3xl">Add your Skills</h2>
      <CheckboxGroup
        className="mt-5 gap-1"
        orientation="horizontal"
        value={groupSelected}
        onChange={setGroupSelected}
      >
        <CustomCheckbox value="Javascript ES5/ES6">Javascript</CustomCheckbox>
        <CustomCheckbox value="Python">Python</CustomCheckbox>
        <CustomCheckbox value="Java">Java</CustomCheckbox>
        <CustomCheckbox value="C#">C#</CustomCheckbox>
        <CustomCheckbox value="PHP">PHP</CustomCheckbox>
        <CustomCheckbox value="Ruby">Ruby</CustomCheckbox>
        <CustomCheckbox value="Swift">Swift</CustomCheckbox>
        <CustomCheckbox value="Swift">C++</CustomCheckbox>
        <CustomCheckbox value="HTML/CSS">HTML/CSS</CustomCheckbox>
        <CustomCheckbox value="SQL">SQL</CustomCheckbox>
        <CustomCheckbox value="React">React</CustomCheckbox>
        <CustomCheckbox value="Angular">React</CustomCheckbox>
        <CustomCheckbox value="Vue.js">Vue.js</CustomCheckbox>
        <CustomCheckbox value="Node.js">Node.js</CustomCheckbox>
        <CustomCheckbox value="Bootstrap">Bootstrap</CustomCheckbox>
        <CustomCheckbox value="Tailwind Css">Tailwind Css</CustomCheckbox>
      </CheckboxGroup>
      <p className="mt-4 mb-4 ml-1 text-default-500">
        Selected: {groupSelected.join(", ")}
      </p>
    </div>
  );
}
