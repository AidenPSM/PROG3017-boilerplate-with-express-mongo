import React from 'react';
import './DeleteCourse.scss';
import { useParams, Link } from "react-router-dom";

import { ComponentProps, Technology, Course } from '../Tools/data.model';

const DeleteCourse = ( { technologies }:ComponentProps ) => {
    return (
        <div className="content">
        <div className="content__title">
            <h2>
               Delete Course
            </h2>
            <div className="content__dTitle">
                Are you sure you want to delete the follow course?
            </div>
            <div className="content__delete">
                Test
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

export default DeleteCourse;