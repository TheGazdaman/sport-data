import React, { useState } from "react";
import BrandDetail from "../BrandDetail.jsx";

const BrandCard = props => {
    const { item } = props;

    const [detailOpen, setDetailOpen] = useState(false);

    return (
        <>
            <div className="col s12 m3">
                <div className="card content-card">
                    <div className="center-align col s2">
                        <img
                            className="image center-align"
                            src={`/images/${item.image_file}`}
                            alt={item.name}
                            style={{ width: "3rem" }}
                        />
                        
                    </div>
                    <div className="card-content center-align">{item.name}</div>
                    <div className="col s12">
                    <button
                        className="waves-effect waves-light btn light-blue darken-2 btn-block"
                        onClick={() => setDetailOpen(true)}
                    >
                        Edit
                    </button>
                    </div>
                </div>
            </div>
            {detailOpen && (
                <BrandDetail item={item} setDetailOpen={setDetailOpen} />
            )}
        </>
    );
};

export default BrandCard;
