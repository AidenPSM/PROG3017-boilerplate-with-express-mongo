import React from 'react';
import { useParams, Link } from "react-router-dom";
import './List.scss';

import { ComponentProps, Technology, Course } from './/../Tools/data.model';

// find the technology object with the id route parameter

const List = ( { technologies, courses }:ComponentProps ) => {

    // ---------------------------------- render to the DOM
    return(
        <div className="content">
            <div className="content__section">
                <div className="content__caption__tech">
                    <h2>
                        Technologies:
                    </h2>
                    <Link to = {`/AddTech`}>  
                        <i className="fas fa-plus content__button" >
                        </i>
                    </Link>
                </div>
                <div>
                </div>
                {/* <div> below to be rendered For each technology */}
                {technologies.map((data:Technology, n:number) => 
                    <div key={n} className="content__list__tech">
                        <Link to = {`/EditTech/${data._id}`}>  
                            <i className="fas fa-pencil-alt content__button" >
                            </i>
                        </Link>
                        <Link to = {`/DeleteTech/${data._id}`}>  
                            <i className="fas fa-trash-alt content__button" >
                            </i>
                        </Link>
                        {data.name}
                    </div>
                )}
            </div>

            <div className="content__section">
                <div className="content__caption__course">
                    <h2>
                        Course:
                    </h2>
                    <Link to = {`/AddCourse`}>  
                        <i className="fas fa-plus content__button" >
                        </i>
                    </Link>
                </div>
                <div>
                </div>
                {/* <div> below to be rendered For each technology */}
                {courses.map((courses:Course, n:number) =>
                    <div key={n} className="content__list__course">
                        <Link to = {`/EditCourse/${courses._id}`}>  
                            <i className="fas fa-pencil-alt content__button" >
                            </i>
                        </Link>
                        <Link to = {`/DeleteCourse/${courses._id}`}>  
                            <i className="fas fa-trash-alt content__button" >
                            </i>
                        </Link>
                        {courses.code} {courses.name}
                    </div>
                )}
            </div>
        </div>
    );
}

export default List;