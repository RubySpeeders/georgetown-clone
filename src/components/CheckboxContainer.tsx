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

    console.log({ option });

    if (updatedCheckboxes.includes("Registered")) {
      const filteredAttendees = attendees.filter(
        (attendee) => attendee.registered === "Yes"
      );
      onCheckboxChange(filteredAttendees);
    }
    if (updatedCheckboxes.includes("Not Registered")) {
      const filteredAttendees = attendees.filter(
        (attendee) => attendee.registered === "No"
      );
      onCheckboxChange(filteredAttendees);
    }
    if (updatedCheckboxes.length === 2 || updatedCheckboxes.length === 0) {
      console.log("hi 2", attendees);
      onCheckboxChange(attendees);
    }
    if (updatedCheckboxes.includes("College")) {
      const filteredAttendees = attendees.filter((attendee) =>
        attendee.school_year_code.includes("College")
      );
      onCheckboxChange(filteredAttendees);
    }
    if (updatedCheckboxes.includes("Law")) {
      const filteredAttendees = attendees.filter((attendee) =>
        attendee.school_year_code.includes("Law")
      );
      onCheckboxChange(filteredAttendees);
    }

    // if (label === "Registration Status") {
    //   // Filter attendees based on selected checkboxes
    //   console.log({ selectedCheckboxes });
    //   const filteredAttendees = attendees.filter(
    //     (attendee) =>
    //       selectedCheckboxes.length === 0 ||
    //       selectedCheckboxes.includes(attendee.registered)
    //   );
    //   console.log({ filteredAttendees });
    //   // Update the parent component with the filtered list
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
