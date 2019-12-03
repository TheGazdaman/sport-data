import React, { useState } from "react";

const EditBrand = props => {
    const { item, setEditOpen } = props;
    const [updatedValues, setUpdatedValues] = useState({
        name: item.name
    });

    const handleUpdate = e => {
        console.log("handleupdate", handleUpdate);

        setUpdatedValues({
            ...updatedValues,
            [e.target.id]: e.target.value
        });
    };

    const handleUpdatedSave = () => {
        console.log("save", item.id);
        fetch(`/api/brand-update/${item.id}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name: updatedValues.name })
        });
    };

    return (
        <>
            <div className="backPop"></div>
            <div id="add-brand">
                <br />
                <button
                    className="red darken-4 red darken-4 right up"
                    onClick={() => setEditOpen(false)}
                >
                    x
                </button>
                <h3>Edit brand</h3>
                <label htmlFor="name"></label>
                <div className="input-field">
                    <input
                        type="text"
                        id="name"
                        value={updatedValues.name}
                        onChange={handleUpdate}
                    />
                </div>
                <button
                    className="waves-effect waves-light btn light-blue darken-2 btn-block"
                    onClick={handleUpdatedSave}
                >
                    save
                </button>
            </div>
        </>
    );
};

export default EditBrand;
