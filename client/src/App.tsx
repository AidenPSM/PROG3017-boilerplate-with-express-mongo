import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';
import "./../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "./../node_modules/@fortawesome/fontawesome-free/scss/solid.scss";
import { getJSONData } from "./Tools/Toolkit";
import { JSONData, Technology, Course } from "./Tools/data.model";

import Error from "./Error/Error";
import LoadingOverlay from "./LoadingOverlay/LoadingOverlay";
import List from "./List/List";
import AddTech from './AddTech/AddTech';
import AddCourse from "./AddCourse/AddCourse";
import EditTech from './EditTech/EditTech';
import EditCourse from './EditCourse/EditCourse';
import DeleteTech from './DeleteTech/DeleteTech';
import DeleteCourse from './DeleteCourse/DeleteCourse';



const RETRIEVE_SCRIPT:string = "http://localhost:8080/get";
// const RETRIEVE_SCRIPT:string = "/get";

function App() {
    // ---------------------------------------------- event handlers
    const onResponse = (result:JSONData):void => {
      setTechnologies(result.technologies);
      console.log(result.technologies);
      setCourses(result.courses);
      console.log(result.courses);
      setLoading(false);
    };

    const onError = () => console.log("*** Error has occured during AJAX data transmission");

    // ---------------------------------------------- lifecycle hooks
    React.useEffect(() => {
      getJSONData(RETRIEVE_SCRIPT, onResponse, onError);
    }, []);
  
    // --------------------------------------------- state setup
    const [technologies, setTechnologies] = React.useState<Technology[]>([]);
    const [courses, setCourses] = React.useState<Course[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);   


  return (
    <div className="main">
      <LoadingOverlay bgColor="#43e48b" spinnerColor="#FFFFFF" enabled={loading} />

      <div className="header"><h2>_Technology Roster : Course Admin</h2></div>

      {(technologies.length > 11, courses.length > 8) ?
      <Switch>
        <Route 
          path="/"
          render={() => <List technologies={technologies} courses={courses} />}
          exact />

        <Route 
          path="/list"
          render={() => <List technologies={technologies} courses={courses}/>}
          />

        <Route 
          path="/AddTech"
          render={() => <AddTech technologies={technologies} courses={courses}/>}
          />

        <Route 
          path="/AddCourse"
          render={() => <AddCourse technologies={technologies} courses={courses}/>}
          />

        <Route 
          path="/EditTech"
          render={() => <EditTech technologies={technologies} courses={courses}/>}
          />
          
        <Route 
          path="/EditCourse"
          render={() => <EditCourse technologies={technologies} courses={courses}/>}
          />

        <Route 
          path="/DeleteTech"
          render={() => <DeleteTech technologies={technologies} courses={courses}/>}
          />  

        <Route 
          path="/DeleteCourse"
          render={() => <DeleteCourse technologies={technologies} courses={courses}/>}
          />    

        <Route render={() => <Error />} />
      </Switch>
      :
      <div>There are currently no technologies in the database :(</div>}

      <div className="footer">Web App powered by by <a href="https://wikipedia.com" target="_blank" rel="noopener noreferrer">MERN Stack</a></div>
    </div>
  );
}

export default App;
