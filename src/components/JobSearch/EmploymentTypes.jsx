/**
 * Checkbox control for Employment Types
 */

function EmploymentTypes({ value, onChange }) {

  const inputClass = "form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out";
  const spanClass = "ml-2 text-sm text-gray-700";
  const labelClass = "inline-flex items-center";

  const handleCheckboxChange = (e) => {

    const { checked, name } = e.target;
    let newValue = value || '';

    if (checked) {
      newValue += (newValue ? ',' : '') + name;
    } else {
      newValue = newValue.split(',').filter((item) => item !== name).join(',');
    }

    // Pass the updated value to the parent component
    onChange({ target: { name: 'employmentTypes', value: newValue } });
  };

  return (
    <div className="col-span-full">
      <label htmlFor="employmentTypes" className="block text-sm font-medium leading-6 text-gray-900 text-left">
        Employment Types
      </label>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <label className={labelClass}>
          <input
            type="checkbox"
            name="fulltime"
            value="fulltime"
            checked={value && value.includes('fulltime')}
            onChange={handleCheckboxChange}
            className={inputClass}
          />
          <span className={spanClass}>Full Time</span>
        </label>
        <label className={labelClass}>
          <input
            type="checkbox"
            name="parttime"
            value="parttime"
            checked={value && value.includes('parttime')}
            onChange={(e) => handleCheckboxChange(e)}
            className={inputClass}
          />
          <span className={spanClass}>Part Time</span>
        </label>
        <label className={labelClass}>
          <input
            type="checkbox"
            name="intern"
            value="intern"
            checked={value && value.includes('intern')}
            onChange={(e) => handleCheckboxChange(e)}
            className={inputClass}
          />
          <span className={spanClass}>Intern</span>
        </label>
        <label className={labelClass}>
          <input
            type="checkbox"
            name="contractor"
            value="contractor"
            checked={value && value.includes('contractor')}
            onChange={(e) => handleCheckboxChange(e)}
            className={inputClass}
          />
          <span className={spanClass}>Contract</span>
        </label>
      </div>
    </div>
  );
}

export default EmploymentTypes;
