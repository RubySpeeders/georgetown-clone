import { Attendee } from "@/app/page";
import React, { useState } from "react";

interface Props {
  label: string;
  options: string[];
  attendees: Attendee[];
  onCheckboxChange: (filteredAttendees: Attendee[]) => void;
}

const CheckboxContainer = ({
  label,
  options,
  attendees,
  onCheckboxChange,
}: Props) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    // Toggle the selected state of the checkbox option
    const updatedCheckboxes = selectedCheckboxes.includes(option)
      ? selectedCheckboxes.filter((checkbox) => checkbox !== option)
      : [...selectedCheckboxes, option];

    setSelectedCheckboxes(updatedCheckboxes);

    const filterAttendees = (
      attendees: Attendee[],
      label: string,
      targetStrings: string[]
    ) => {
      const filteredAttendees = attendees.filter((attendee) => {
        let propertyToCheck: String;
        if (label === "Class" || label === "School") {
          propertyToCheck = attendee.school_year_code;
        } else if (label === "Registration Status") {
          propertyToCheck = attendee.registered;
        }

        return targetStrings.every((target) =>
          String(propertyToCheck).toLowerCase().includes(target)
        );
      });

      console.log({ filteredAttendees });
      return filteredAttendees;
    };

    filterAttendees(attendees, label, updatedCheckboxes);

    // if (updatedCheckboxes.includes("Registered")) {
    //   const filteredAttendees = attendees.filter(
    //     (attendee) => attendee.registered === "Yes"
    //   );
    //   onCheckboxChange(filteredAttendees);
    // }
    // if (updatedCheckboxes.includes("Not Registered")) {
    //   const filteredAttendees = attendees.filter(
    //     (attendee) => attendee.registered === "No"
    //   );
    //   onCheckboxChange(filteredAttendees);
    // }

    // if (updatedCheckboxes.includes("College")) {
    //   const filteredAttendees = attendees.filter((attendee) =>
    //     attendee.school_year_code.includes("College")
    //   );
    //   onCheckboxChange(filteredAttendees);
    // }
    // if (updatedCheckboxes.includes("Law")) {
    //   const filteredAttendees = attendees.filter((attendee) =>
    //     attendee.school_year_code.includes("Law")
    //   );
    //   onCheckboxChange(filteredAttendees);
    // }
  };

  return (
    <div>
      <h5 style={{ marginBottom: "5px" }}>{label}</h5>
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
            key={option}
            style={{ flex: "0 0 calc(50% - 10px)", boxSizing: "border-box" }}
          >
            <input
              type="checkbox"
              id={option}
              style={{ borderRadius: 0 }}
              checked={selectedCheckboxes.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxContainer;
