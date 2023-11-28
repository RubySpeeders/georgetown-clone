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
      <p
        style={{
          marginBottom: "5px",
          color: "#041E42",
          fontFamily: "futura, sans-serif",
          fontWeight: 400,
        }}
      >
        {label}
      </p>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder=""
          aria-label={`Search ${label}`}
          style={{
            border: "1px solid #63666A",
            width: "100%",
            height: "3.5rem",
            padding: "9px 9px 9px 9px",
            background: `transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23041E42' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
            no-repeat 13px center`,
            backgroundPosition: "right 16px center",
            outline: "none",
          }}
        />
      </div>
    </div>
  );
};

export default Searchbar;
