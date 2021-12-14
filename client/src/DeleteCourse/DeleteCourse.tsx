import React from 'react';
import './DeleteCourse.scss';
import { useParams, Link } from "react-router-dom";

import { ComponentProps, Course } from '../Tools/data.model';

const DeleteCourse = ( { courses }:ComponentProps ) => {

    const onDelete = (e:any) => {
        console.log(`Delete Course ID: ${id}`);
        fetch(`/course/delete/${id}`, {
            method: 'delete'
        })
        .then((res) => res.json())
    };
      
    let { id } = useParams<{id:string}>();
    let course:(Course | undefined) = courses.find(item => item._id === id);
    return (
        (course !== undefined)?
        <div className="content">
        <div className="content__title">
            <h2>
               Delete Course
            </h2>
            <div className="content__dTitle">
                Are you sure you want to delete the follow course?
            </div>
            <div className="content__delete">
                {course.code} {course.name}
            </div>
            <div className="content__button">
                <Link to = {`/`}>
                    <button type="submit" onClick={onDelete} id="btnOk">Ok</button>
                </Link>  
                <Link to = {`/`}> 
                    <button type="submit" id="btnCancel">Cancel</button>
                </Link>  
            </div>
        </div>
    </div>
     :
     <div className="content">
         <div className="content__errorBack">
             <Link to ={`/`}>
                 <i className="fas fa-arrow-left content__button"></i>    
             </Link>
             Error :(
         </div>
         <div className="content__error">
             The requested technology does not exist in the database
         </div>
     </div>
    );
}

export default DeleteCourse;