# Georgetown Event Page Clone

Visit [here](https://georgetown-clone.vercel.app/) to see the deployed page.

## Running Locally

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Install dependencies

npm install

# Run the development server

npm run dev

## Decisions

1. I chose to use Next.js powered by React to leverage state for handling search and checkbox logic. Additionally, I aimed to create reusable components, anticipating the potential reuse of this event page for other occasions, beyond the Hoyas in August event. Components like the checkbox component, searchbar component, and the header and footer can be easily utilized for building other pages.

## Considerations

1. The prompt mentions potential use cases for event attendees and internal staff. For user privacy, I considered implementing authentication. If the user is an "admin," they can view attendees who wish to remain "incognito." Alternatively, a separate API call could be made for admins to access all attendees, while regular users would only see those where `attendee.incognito === "no"`.

2. The prompt states that school and registration status filters should be generated dynamically based on values present. If given more time, I would loop through the attendees and create an array of `options` for each unique school, year, and registration status.

3. I made some styling and color decisions, but I'm open to adjustments based on more detailed instructions.

## Future Improvements

1. Organizing styling: Given more time, I would enhance the organization of styling. Currently, it's spread across inline styles, the module.css file, and the global.css file. Better organization would improve code understanding for future collaborators.

2. Checkbox/Searchbar logic: While the checkboxes mostly work, there are some unaccounted edge cases. For example, filtering with one checkbox and then using the search bar searches all attendees, not just the current filtered ones.

## Conclusion

Thank you for your time! I am eager to discuss my project and hear any feedback from the team.
