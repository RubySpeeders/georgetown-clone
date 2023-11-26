import { Attendee } from "@/app/page";
import React, { useState } from "react";

interface Props {
  label: string;
  attendees: Attendee[];
  onSearch: (filteredAttendees: Attendee[]) => void;
}

const Searchbar = ({ label, attendees, onSearch }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchValue(searchTerm);

    // Filter attendees based on the search term
    const filteredAttendees = attendees.filter((attendee) =>
      `${attendee.first_name} ${attendee.last_name}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    // Update the parent component with the filtered list
    onSearch(filteredAttendees);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label>{label}</label>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder=""
          style={{
            border: "1px solid #63666A",
            width: "100%",
            height: "50px",
            // background: `transparent url("../images/icons/icon-search-blue.svg") no-repeat`,
          }}
        />
      </div>
    </div>
  );
};

export default Searchbar;
