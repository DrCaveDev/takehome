# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

<!-- Please document your code & design decisions here. -->
See comments for additional notes

For styling I used plain css.

For creating the grid I used flex. To me this was the most simple approach to ensure that the undefined screen sizes continued to perform in a responsive manner. This approach may be altered if we
wanted to have a set number of columns for each screen size.

Since flex was used the main thing that changed for mobile was title text size and various paddings. These changes were achieved with media queries in css. The size targeted in the query was the width in the figma for mobile.

For api retrieval I used plain fetch command. There are other ways that this could be achieved, but for the sake of time I am familiar with fetch.

Not all images were the same size. To keep grid consistent I set an explicit size. Depending on business requirements this could be altered to allow for size variation.

I noticed some inconsistencies in location for the heart icon in the figma. Some were ~23px from the edge and others were ~13px. I ended up choosing 13 because it looked a little better to me.

I decided to always load the properties from cache if they exist, but this is usually not how it would work in a real site. Some alternatives present in the property.service.js file comments

I would have liked to add some more tests (at the very least ensure each component renders), but I ran out of time. For responsiveness we could test the page at various viewport sizes (probably easier with cypress), and ensure that smaller screen sizes don't introduce horizontal scrolling