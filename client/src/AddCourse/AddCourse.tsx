import React from 'react';
import './AddCourse.scss';
import { useParams, Link } from "react-router-dom";

import { ComponentProps, Technology, Course } from '../Tools/data.model';

const AddCourse = ( { technologies }:ComponentProps ) => {
    return (
            <div className="content">
                <div className="content__title">
                    <h2>
                        Add New Course:
                    </h2>
                    <div className="content__area">
                        <div className="content__courseCode">
                            Course Code:
                            <br></br>
                            <input id="courseCode"></input> 
                        </div>
                        <div className="content__courseName">
                            Name:
                            <br></br>
                            <input id="courseName"></input>             
                        </div>
                    </div>
                    <div className="content__button">
                        <Link to = {`/`}>
                            <button type="submit" id="btnOk">Ok</button>
                        </Link>  
                        <Link to = {`/`}> 
                            <button type="submit" id="btnCancel">Cancel</button>
                        </Link>  
                    </div>
                </div>
            </div>
    );
}

export default AddCourse;