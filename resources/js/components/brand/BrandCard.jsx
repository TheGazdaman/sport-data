import React, { useState } from "react";
import BrandDetail from "../BrandDetail.jsx";

const BrandCard = props => {
    const { item } = props;

    const [detailOpen, setDetailOpen] = useState(false);

    return (
        <>
            <div className="col s2">
                <div className="card-image">
                    <img
                        className="image"
                        src={`/images/${item.image_file}`}
                        alt={item.name}
                    />
                    <div className="card-content">{item.name}</div>

                    <button
                        className="waves-effect waves-light btn"
                        onClick={() => setDetailOpen(true)}
                    >
                        Edit
                    </button>
                </div>
            </div>
            {detailOpen && (
                <BrandDetail item={item} setDetailOpen={setDetailOpen} />
            )}
        </>
    );
};

export default BrandCard;
