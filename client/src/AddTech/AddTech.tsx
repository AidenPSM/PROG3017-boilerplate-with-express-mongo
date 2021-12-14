import React from 'react';
import './AddTech.scss';
import { useParams, Link } from "react-router-dom";

import { ComponentProps, Technology, Course} from './/../Tools/data.model';

const AddTech = ( { technologies, courses }:ComponentProps ) => {

    let { id } = useParams<{id:string}>();
    let technology:(Technology | undefined) = technologies.find(item => item._id === id);

    const onAdd = (e:any) => {
        console.log(`Add Test`);
        fetch(`/tech/post`, {
            method: 'post',
            body: JSON.stringify({name: "", description: "HELLO", difficulty: ""})
        })
        .then((res) => res.json())
    };
         
    
    return (
        <div className="content">
            <div className="content__title">
                <h3>
                    Add New Technology:
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
                        {courses.map((courses:Course, n:number) =>
                            <div key={n}>
                                <input type="checkbox" id="checkbox"></input>
                                {courses.code} {courses.name}
                            </div>
                        )}
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
        </div>
    );
}

export default AddTech;