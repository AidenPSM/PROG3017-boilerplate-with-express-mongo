import React from 'react';
import './EditTech.scss';
import { useParams, Link } from "react-router-dom";

import { ComponentProps, Technology, Course } from './/../Tools/data.model';

const EditTech = ( { technologies, courses }:ComponentProps ) => {
    let { id } = useParams<{id:string}>();
    let technology:(Technology | undefined) = technologies.find(item => item._id === id);
    
    return (
        (technology !== undefined)?
            <div className="content">
                <div className="content__title">
                    <h3>
                        Edit Technology:
                    </h3>
                    <div className="content__area">
                        <div className="content__name">
                            Name:
                            <br></br>
                            <input id="name" value={technology.name}></input> 
                        </div>
                        <div className="content__description">
                            Description:
                            <br></br>
                            <textarea id="description" value={technology.description}></textarea>             
                        </div>
                        <div className="content__difficulty">
                            Difficulty:
                            <br></br>
                            <select id="difficulty">
                                <option>{technology.difficulty}</option>
                            </select>
                        </div>
                        <div className="content__checkbox">
                            Used in courses:
                            <br></br>                        
                            {courses.map((courses:Course, n:number) =>
                                <div key={n}>
                                    <input type="checkbox" id="checkbox"></input>
                                    {courses.code} {courses.name}
                                </div>
                        )}
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

export default EditTech;