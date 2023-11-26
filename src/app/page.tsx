"use client";

import { useState } from "react";
import styles from "./page.module.css";
import CheckboxContainer from "@/components/CheckboxContainer";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";

export type Attendee = {
  registered: string;
  incognito: string;
  first_name: string;
  last_name: string;
  school_year_code: string;
};

export default function Home() {
  const initialAttendees = [
    {
      registered: "Yes",
      incognito: "No",
      first_name: "Jane",
      last_name: "Hoya",
      school_year_code: "College '92",
    },
    {
      registered: "Yes",
      incognito: "No",
      first_name: "James",
      last_name: "Saxa",
      school_year_code: "College '72, Law '86",
    },
    {
      registered: "No",
      incognito: "Yes",
      first_name: "Wiliam",
      last_name: "Clinton",
      school_year_code: "College '68",
    },
    {
      registered: "No",
      incognito: "No",
      first_name: "George",
      last_name: "Town",
      school_year_code: "Law '86",
    },
  ];
  const [attendees, setAttendees] = useState<Attendee[]>(initialAttendees);
  const [filteredAttendees, setFilteredAttendees] = useState(attendees);

  const handleSearch = (filteredAttendees: Attendee[]) => {
    setFilteredAttendees(filteredAttendees);
  };

  const handleCheckboxChange = (filteredAttendees: Attendee[]) => {
    setFilteredAttendees(filteredAttendees);
  };

  return (
    <>
      <main>
        <div>
          <div
            style={{
              border: "1px red solid",
              width: "100%",
              height: "5rem",
              background: "#041E42",
            }}
          ></div>
          <div
            style={{
              border: "1px orange solid",
              width: "33%",
              height: "5rem",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          >
            <Image
              src="/georgetown-title.png"
              alt="georgetown-title"
              //TODO FIGURE OUT HEIGHT AND WIDTH
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              style={{}}
            />
          </div>
        </div>
        <h1>Hoyas in August Event Attendees</h1>
        <div className={styles.flexContainer}>
          <div className={styles.filtes}>
            <h5>Filter Attendees</h5>
            <Searchbar
              label="By Name"
              attendees={attendees}
              onSearch={handleSearch}
            />
            <CheckboxContainer
              label="School"
              attendees={attendees}
              options={["College", "Law"]}
              onCheckboxChange={handleCheckboxChange}
            />
            <CheckboxContainer
              label="Registration Status"
              attendees={attendees}
              options={["Registered", "Not Registered"]}
              onCheckboxChange={handleCheckboxChange}
            />
            <CheckboxContainer
              label="Class"
              attendees={attendees}
              options={["'68", "'72", "'86", "'92"]}
              onCheckboxChange={handleCheckboxChange}
            />
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
            className={styles.attendees}
          >
            {filteredAttendees.map((attendee) => (
              <div
                key={attendee.first_name}
                style={{
                  border: "2px solid #041E42",
                  padding: "10px",
                  flex: "0 0 calc(50% - 10px)",
                  boxSizing: "border-box",
                }}
              >
                <p>{attendee.school_year_code}</p>
                <p>
                  {attendee.first_name} {attendee.last_name}
                </p>
                <p>{attendee.registered}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div
            style={{
              position: "relative",
              border: "1px red solid",
              width: "100%",
              height: "5rem",
              background: "#041E42",
            }}
          ></div>
          <div
            style={{
              border: "1px orange solid",
              width: "33%",
              height: "5rem",
              position: "absolute",
              top: "65%",
              right: 0,
              zIndex: 1,
              transform: "translate(0, -50%)",
            }}
          >
            <Image
              src="/georgetown-advancement-title.png"
              alt="georgetown-advancement-title"
              //TODO FIGURE OUT HEIGHT AND WIDTH
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              style={{}}
            />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Contact</p>
        <p>Accessibility</p>
        <p>Copyright</p>
        <p>Privacy</p>
      </footer>
    </>
  );
}
