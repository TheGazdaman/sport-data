import React, { useState, useEffect } from "react";
import EditBrand from "./EditBrand.jsx";

const BrandDetail = props => {
    const { item, setDetailOpen } = props;

    const [editOpen, setEditOpen] = useState(false);
    const [updateValues, setUpdateValues] = useState({
        name: item.name
    });

    const handleUpdate = e => {
        console.log("i was clicked");
        setUpdateValues({
            ...updateValues,
            [e.target.id]: e.target.value
        });
    };
    /* 
    const handleUpdateSave = () => {
        fetch(`/api/brand-update/${item.id}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updateValues)
        });
    }; */

    const handleDelete = () => {
        fetch(`/api/brand-delete/${item.id}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }
        });
        setDetailOpen(false);
    };

    return (
        <>
            <div id="edit" className="card col s2">
                <div className="card-image">
                    <button onClick={() => setDetailOpen(false)}>Close</button>
                    <img
                        className="image"
                        src={`/images/${item.image_file}`}
                        alt={item.name}
                    />
                    <div className="card-content">{item.name}</div>

                    <button
                        className="waves-effect waves-light btn"
                        onClick={() => setEditOpen(true)}
                    >
                        Edit
                    </button>
                    <button
                        className="waves-effect waves-light btn"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
            {editOpen && (
                <EditBrand item={item} setEditOpen={setEditOpen} />
            )}
        </>
    );
};

export default BrandDetail;
