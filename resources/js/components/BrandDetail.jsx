import React, { useState } from "react";
import EditBrand from "./EditBrand.jsx";

const BrandDetail = props => {
    const { item, setDetailOpen } = props;

    const [editOpen, setEditOpen] = useState(false);

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
        <div className="backPop"></div>
        
            <div id="add-brand"  style={{ height: '10rem'}}>
                <div className="card-image waves-effect waves-block waves-light">
                    <button
                        className="red darken-4 right up"
                        onClick={() => setDetailOpen(false)}
                    >
                        x
                    </button>
                    <img
                        className="image"
                        src={`/images/${item.image_file}`}
                        alt={item.name}
                        style={{ width: "3rem" }}
                    />
                    <div className="card-content">{item.name}</div>

                    <button
                        className="waves-effect waves-light btn light-blue darken-2 left down"
                        onClick={() => setEditOpen(true)}
                    >
                        Edit
                    </button>
                    <button
                        className="waves-effect waves-light btn light-blue darken-2 right down"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
            {editOpen && <EditBrand item={item} setEditOpen={setEditOpen} />}
       
        </>
    );
};

export default BrandDetail;
