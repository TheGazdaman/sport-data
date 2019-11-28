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
            <div id="add-brand">
                <br />
                <button onClick={() => setEditOpen(false)}>Close</button>
                <h2>Edit brand</h2>

                <div className="input-field">
                    <input
                        type="text"
                        id="name"
                        value={updatedValues.name}
                        onChange={handleUpdate}
                    />
                    <label htmlFor="name"></label>
                </div>
                <button onClick={handleUpdatedSave}>save</button>
            </div>
        </>
    );
};

export default EditBrand;
