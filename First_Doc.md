hey nick! 

npm run dev

// Quickstart for components
rfc = React Functional Component

Day 1 - slowing taking on board the ways to change in-line styles and native components to chakra
Day 2 - spent 1 hour finding a rednering error... Forgot to import <Text /> into chakra components. Doh!

GridLayouts
- minChildWidth="250px", all children of element will not go below a certain size
- SimpleGrid, for building simple grids with inline styles with spacing and no of culumns
- Grid, can contain <GridItems> inside fro more control of render. Eg the RootLayout file

Responsive styles
- Base: md: lg: xl:
- each can be changed to add dynamic styling based on Chakra UI
- Used for grid / box / fonts size ...

Lists & List Icons
- import iconList from ChakraUI
    + npm i @chakra-ui/icons
- learn how to import th icons using <ListIcon /> JSX
- don't forget spacing between each item
- Add custom links to a list item using <NavLink /> 

Card component
- run a local server for the JSON data to be collected by the app
    + npx json-server --watch ./data/db.json --port 8000
    + I already have JSON server installed an updated
    + npx -v json-server
- port: 8000/tasks {object: tasks} 
- 1hr spent on Error: had http:// twice on fetch. Doh!
- 20 mins spent locating '/' on the right side of a closing <card> tag. Doh!
- imported data from fetch into the JSX components using MAP
- Chakra components: Card ; CardHeader ; CardBody ; CardFooter
- Add icons to existing JSX components <button> as a JSX object {<ViewIcon>}
- increase the responsive nature of the buttons by adding a variant:'ghost'