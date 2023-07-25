## hey nick! 

---

# Chakra UI project

---


npm run dev
npx json-server --watch ./data/db.json --port 8000

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


Day 3 - 40 mins spent finding as issue with name="a3", renamed to be header. Doh!

Form Fields
- Create an input form using following elements from ChakraUI:
<Box> grouping
<Form> used for the fetch request and data handling
<FormControl> used for input requirements: isRequired etc
<FormLabel> a simple title 
<Input> remember to specify input type
- needs 'name:' for data handling
<TextArea> gives a text box, placeHolder can be included
- needs 'name:' for data handling
<CheckBox> simple, gives a boolean statement
<Button> give this a type: 'submit' so the data in the form renders in the 'Header'
 
 - redirect from React-Router-DOM, used in return statemtnt for create 'Action' function

 Toast Component
 Like a pop-up used to give feedback to users after an action has taken place
 - apply a new funciton to an onClick event for 'Logout'
 - envoke the Chakra component useToast() inside this function
 - change the properties of the toast
 + color, icon, heater, body text 

Avatar components
For small photos with static or dynamic properties
- using tags: 
<Avatar> for image
<AvatarBadge> for alerts and updates. Should contain <text>

Chakra Themes
Breakpoints, colour shcemes, sizes etc
- 

---

# Deloying to Netlify

instead of using json-server, create a custom function file that returns static data in json form:
https://docs.netlify.com/functions/create/?fn-language=js


