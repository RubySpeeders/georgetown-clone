"use client";

import { useState } from "react";
import styles from "./page.module.css";
import CheckboxContainer from "@/components/CheckboxContainer";
import Searchbar from "@/components/Searchbar";
import Image from "next/legacy/image";
import Divider from "@/components/Divider";

export type Attendee = {
  registered: string;
  incognito: string;
  first_name: string;
  last_name: string;
  school_year_code: string;
  [key: string]: string; // Index signature for dynamic properties
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
      <header>
        <div>
          <div
            style={{
              width: "100%",
              height: "4rem",
              background: "#041E42",
            }}
          ></div>
          <div
            style={{
              width: "18rem",
              height: "4rem",
              position: "absolute",
              top: 0,
              left: "25px",
              zIndex: 1,
            }}
          >
            <Image
              src="/georgetown-title.png"
              alt="georgetown-title"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "adobe-caslon-pro, serif",
            fontStyle: "italic",
            fontWeight: "lighter",
            fontSize: "4rem",
            color: "#041E42",
          }}
        >
          Hoyas in August Event Attendees
        </h1>
        <div className={styles.flexContainer}>
          <div className={styles.filters}>
            <h3
              style={{
                margin: 0,
                color: "#041E42",
                fontFamily: "adobe-caslon-pro, serif",
              }}
            >
              Filter Attendees
            </h3>
            <Searchbar
              label="By Name"
              attendees={attendees}
              onSearch={handleSearch}
            />
            <Divider />
            <CheckboxContainer
              label="School"
              attendees={attendees}
              options={["College", "Law"]}
              onCheckboxChange={handleCheckboxChange}
            />
            <Divider />
            <CheckboxContainer
              label="Registration Status"
              attendees={attendees}
              options={["Registered", "Not Registered"]}
              onCheckboxChange={handleCheckboxChange}
            />
            <Divider />
            <CheckboxContainer
              label="Class"
              attendees={attendees}
              options={["'68", "'72", "'86", "'92"]}
              onCheckboxChange={handleCheckboxChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "4.5rem",
            }}
            className={styles.attendees}
          >
            {filteredAttendees.map((attendee) => (
              <div
                key={attendee.first_name}
                style={{
                  border: "1px solid #041E42",
                  padding: "10px 20px",
                  flex: "0 0 calc(50% - 10px)",
                  boxSizing: "border-box",
                  height: "8rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // Center vertically
                  alignItems: "flex-start",
                  width: "600px",
                  maxWidth: "600px",
                }}
              >
                <p
                  style={{
                    fontFamily: "futura, sans-serif",
                  }}
                >
                  {attendee.school_year_code}
                </p>
                <p
                  style={{
                    color: "#041E42",
                    fontFamily: "adobe-caslon-pro, serif",
                  }}
                >
                  {attendee.first_name} {attendee.last_name}
                </p>
                <p
                  style={{
                    color: "#041E42",
                    fontFamily: "futura, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {attendee.registered === "Yes"
                    ? "Registered"
                    : "Not Registered"}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footerBar}>
          <div
            className="box1"
            style={{
              position: "absolute",
              width: "100%",
              height: "3rem",
              background: "#041E42",
              zIndex: 1,
            }}
          ></div>
          <div
            className="box2"
            style={{
              width: "18rem",
              height: "3rem",
              position: "absolute",
              right: "25px",
              zIndex: 2,
            }}
          >
            <Image
              src="/georgetown-advancement-title.png"
              alt="georgetown-advancement-title"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              style={{}}
            />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p className="tkFuturaPt">Contact</p>
        <p className="tkFuturaPt">Accessibility</p>
        <p className="tkFuturaPt">Copyright</p>
        <p className="tkFuturaPt">Privacy</p>
      </footer>
    </>
  );
}
