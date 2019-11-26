import React from "react";

const BrandDetail = props => {
    const { item, setDetailOpen } = props;

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

                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </>
    );
};

export default BrandDetail;
