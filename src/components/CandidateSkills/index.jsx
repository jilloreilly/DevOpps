import React from "react";
import {CheckboxGroup} from "@nextui-org/react";
import {CustomCheckbox} from "./CustomCheckbox";

export default function CandidateSkills () {
  const [groupSelected, setGroupSelected] = React.useState([]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <CheckboxGroup
        className="gap-1"
        label="Select amenities"
        orientation="horizontal"
        value={groupSelected}
        onChange={setGroupSelected}
      >
        <CustomCheckbox value="wifi">HTML5</CustomCheckbox>
        <CustomCheckbox value="tv">CSS3</CustomCheckbox>
        <CustomCheckbox value="kitchen">Javascript ES5/ES6</CustomCheckbox>
        <CustomCheckbox value="parking">React</CustomCheckbox>
        <CustomCheckbox value="pool">Bootstrap</CustomCheckbox>
        <CustomCheckbox value="gym">Tailwindcss</CustomCheckbox>
      </CheckboxGroup>
      <p className="mt-4 ml-1 text-default-500">
        Selected: {groupSelected.join(", ")}
      </p>
    </div>
  );
}
