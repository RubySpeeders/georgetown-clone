import { Attendee } from "@/app/page";
import React from "react";

interface Props {
  attendee: Attendee;
}

const AttendeeCard = ({ attendee }: Props) => {
  return (
    <div
      className="attendeeCard"
      style={{
        border: "1px solid #041E42",
        padding: "10px 20px",
        height: "8rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center vertically
        alignItems: "flex-start",
        width: "600px",
        maxWidth: "600px",
        flex: "0 0 calc(50% - 10px)",
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          fontFamily: "futura, sans-serif",
          fontSize: ".75rem",
        }}
      >
        {attendee.school_year_code}
      </p>
      <p
        style={{
          color: "#041E42",
          fontFamily: "adobe-caslon-pro, serif",
          fontSize: "1.2rem",
          margin: 0,
        }}
      >
        {attendee.first_name} {attendee.last_name}
      </p>
      <p
        style={{
          color: "#041E42",
          fontFamily: "futura, sans-serif",
          fontWeight: 400,
          margin: 0,
          fontSize: ".85rem",
        }}
      >
        {attendee.registered === "Yes" ? "Registered" : "Not Registered"}
      </p>
    </div>
  );
};

export default AttendeeCard;
