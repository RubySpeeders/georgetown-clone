"use client";

import { useState } from "react";
import styles from "./page.module.css";
import CheckboxContainer from "@/components/CheckboxContainer";
import Searchbar from "@/components/Searchbar";
import Image from "next/legacy/image";
import Divider from "@/components/Divider";
import AttendeeCard from "@/components/AttendeeCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
      first_name: "William",
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
      <Header />
      <main className={styles.main}>
        <h1>Hoyas in August Event Attendees</h1>
        <div className={styles.flexContainer}>
          <div className={styles.filters}>
            <p
              style={{
                margin: 0,
                color: "#041E42",
                fontFamily: "adobe-caslon-pro, serif",
                fontSize: "1.5rem",
              }}
            >
              Filter Attendees
            </p>
            <Searchbar
              label="By Name"
              attendees={attendees}
              onSearch={handleSearch}
            />
            <Divider />
            <CheckboxContainer
              title="School"
              attendees={attendees}
              options={["College", "Law"]}
              onCheckboxChange={handleCheckboxChange}
            />
            <Divider />
            <CheckboxContainer
              title="Registration Status"
              attendees={attendees}
              options={["Registered", "Not Registered"]}
              onCheckboxChange={handleCheckboxChange}
            />
            <Divider />
            <CheckboxContainer
              title="Class"
              attendees={attendees}
              options={["'68", "'72", "'86", "'92"]}
              onCheckboxChange={handleCheckboxChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              alignContent: "flex-start",
            }}
            className={styles.attendees}
          >
            {filteredAttendees.map((attendee) => (
              <AttendeeCard attendee={attendee} key={attendee.first_name} />
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
              alt="Georgetown University Advancement"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              style={{}}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
