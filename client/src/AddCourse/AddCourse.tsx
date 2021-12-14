import React, { useState } from 'react';
import './AddCourse.scss';
import { useParams, Link } from "react-router-dom";

import { ComponentProps, Course } from '../Tools/data.model';

const AddCourse = ( { courses }:ComponentProps ) => {

    const [code, setCode] = useState("");
    const [name, setName] = useState("");

    const onAdd = (e:any) => {
        console.log(`Add Test`);
        console.log({code});
        console.log({name});
        fetch(`/course/post`, {
            method: 'post',
            body: JSON.stringify({code: code, name: name})
        })
        .then((res) => res.text())
    };

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
                            <input id="courseCode" value={code} onChange={(e) => setCode(e.target.value)}></input> 
                        </div>
                        <div className="content__courseName">
                            Name:
                            <br></br>
                            <input id="courseName" value={name} onChange={(e) => setName(e.target.value)}></input>             
                        </div>
                    </div>
                    <div className="content__button">
                        <Link to = {`/`}>
                            <button type="submit" id="btnOk" onClick={onAdd}>Ok</button>
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