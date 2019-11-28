import React, { useState } from "react";

const CreateBrand = props => {
    const { setAddBrand } = props;

    const [formInputValues, setFormInputValues] = useState({
        name: "Michal",
        image_file: "image_file"
    });

    console.log("onSubmit", formInputValues);

    const handleInputChange = e => {
        setFormInputValues({
            ...formInputValues,
            [e.target.id]: e.target.value
        });
    };
    const handleSave = () => {
        fetch("/api/brand-save", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formInputValues)
        });
        setAddBrand(false);
    };

    return (
        <>
            <div id="add-brand">
                <br />
                <button onClick={() => setAddBrand(false)}>Close</button>
                <h1>Add Brand</h1>

                <div className="input-field">
                    <input
                        type="text"
                        id="name"
                        value={formInputValues.name}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        id="image_file"
                        value={formInputValues.image_file}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="image_file">Image file</label>
                </div>
                <button onClick={handleSave}>save</button>
            </div>
        </>
    );
};

export default CreateBrand;
