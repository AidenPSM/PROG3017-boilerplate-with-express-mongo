import React, { useState } from 'react';
import './EditCourse.scss';
import { useParams, Link } from "react-router-dom";

import { ComponentProps, Course } from '../Tools/data.model';

const EditCourse = ( { courses }:ComponentProps ) => {

    const [code, setCode] = useState("");
    const [name, setName] = useState("");

    const onEdit = (e:any) => {

        console.log(`Edit Course: ${id}`);
        fetch(`/course/put/${id}`, {
            method: 'put',
            body: JSON.stringify({code: course?.code, name: course?.name})
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
                    Edit Course:
                </h2>
                <div className="content__area">
                    <div className="content__courseCode__edit">
                        Course Code:
                        <br></br>
                        <input id="courseCode__edit" value={course.code} onChange={(e) => setCode(e.target.value)} readOnly></input> 
                    </div>
                    <div className="content__courseName">
                        Name:
                        <br></br>
                        <input id="courseName" value={course.name} onChange={(e) => setCode(e.target.value)}></input>             
                    </div>
                </div>
                <div className="content__button">
                    <Link to = {`/`}>
                        <button type="submit" id="btnOk" onClick={onEdit}>Ok</button>
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

export default EditCourse;