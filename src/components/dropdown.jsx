/* eslint-disable react/prop-types */
const Dropdown = ({
    label,
    id,
    htmlFor,
    name,
    options,
    value,
    required,
    onChange,
    error,
}) => {
    return (
        <div className="border p-[10px]">
            <label
                htmlFor={htmlFor}
                className="block text-[#888888] text-[12px] font-bold mb-2"
            >
                {label} {required && <span className="text-[#E98181]">*</span>}
            </label>
            <select
                required={required}
                id={id}
                name={name}
                className="block w-full rounded-md text-[#888888] focus:outline-none italic placeholder:!italic"
                value={value}
                onChange={onChange}
            >
                <option className="">Select</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error && <div className="text-red-500 text-xs">{error}</div>}
        </div>
    );
};

export default Dropdown;
