import React from "react";

const BrandCard = props => {
    const { item } = props;

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
                </div>
            </div>
        </>
    );
};

export default BrandCard;
