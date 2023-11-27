import { Attendee } from "@/app/page";
import React, { useState } from "react";

interface Props {
  label: string;
  options: string[];
  attendees: Attendee[];
  onCheckboxChange: (filteredAttendees: Attendee[]) => void;
}

const labelStyle = {
  fontFamily: "futura, sans-serif",
};

const CheckboxContainer = ({
  label,
  options,
  attendees,
  onCheckboxChange,
}: Props) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const filterAttendees = (
    attendees: Attendee[],
    label: string,
    targetStrings: string[]
  ) => {
    const filteredAttendees = attendees.filter((attendee) => {
      let propertyToCheck: String;
      if (label === "Class" || label === "School") {
        propertyToCheck = attendee.school_year_code;
        return targetStrings.every((target) =>
          //for every one of the target strings, check to see if the propertyToCheck has a target
          propertyToCheck.includes(target)
        );
      } else if (label === "Registration Status") {
        //TODO FIGURE OUT THSI LOGIC
        propertyToCheck = attendee.registered;
        console.log("registry", propertyToCheck, targetStrings);
        return targetStrings.every(() =>
          //for every one of the target strings, check to see if the propertyToCheck has a target
          propertyToCheck.includes("Yes")
        );
      }
    });

    return filteredAttendees;
  };

  const handleCheckboxChange = (option: string) => {
    // Toggle the selected state of the checkbox option
    const updatedCheckboxes = selectedCheckboxes.includes(option)
      ? selectedCheckboxes.filter((checkbox) => checkbox !== option)
      : [...selectedCheckboxes, option];

    setSelectedCheckboxes(updatedCheckboxes);

    const filtered = filterAttendees(attendees, label, updatedCheckboxes);
    //this will call setState to change what is rendered on the page
    onCheckboxChange(filtered);
  };

  return (
    <div>
      <h5
        style={{
          marginBottom: "5px",
          color: "#041E42",
          fontFamily: "futura, sans-serif",
          fontWeight: 400,
        }}
      >
        {label}
      </h5>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {options.map((option) => (
          <div
            className="checkboxWrapper"
            key={option}
            style={{ flex: "0 0 calc(50% - 10px)", boxSizing: "border-box" }}
          >
            <input
              type="checkbox"
              id={option}
              style={{ borderRadius: 0 }}
              checked={selectedCheckboxes.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className={selectedCheckboxes.includes(option) ? "checked" : ""}
            />
            <label htmlFor={option} style={labelStyle}>
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxContainer;
