import React from 'react';
import './EditTech.scss';
import { useParams, Link } from "react-router-dom";

import { ComponentProps, Technology, Course } from './/../Tools/data.model';

const EditTech = ( { technologies }:ComponentProps ) => {
    return (
            <div className="content">
                <div className="content__title">
                    <h3>
                        Edit Technology:
                    </h3>
                    <div className="content__area">
                        <div className="content__name">
                            Name:
                            <br></br>
                            <input id="name"></input> 
                        </div>
                        <div className="content__description">
                            Description:
                            <br></br>
                            <textarea id="description"></textarea>             
                        </div>
                        <div className="content__difficulty">
                            Difficulty:
                            <br></br>
                            <select id="difficulty">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="content__checkbox">
                            Used in courses:
                            <br></br>
                            <input type="checkbox" id="checkbox"></input> Test
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
    );
}

export default EditTech;