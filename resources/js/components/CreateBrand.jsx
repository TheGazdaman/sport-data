import React, { useState } from "react";

const CreateBrand = props => {
    const { setAddBrand } = props;

    const [formInputValues, setFormInputValues] = useState({
        name: "name",
        image_file: "image_file"
    });

    console.log("onSubmit", formInputValues);

    const handleInputChange = e => {
        e.preventDefault();
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
            <div className="backPop"></div>
            <form id="add-brand" className="card">
                <br />
                <button
                    className="red darken-4 right up"
                    onClick={() => setAddBrand(false)}
                >
                    x
                </button>
                <h3 className="center-align">Add Brand</h3>

                <div className="input-field s3">
                    <input
                        type="text"
                        id="name"
                        value={formInputValues.name}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="name"></label>
                </div>
               {/*  <div className="input-field s3">
                    <input
                        type="file" // change for file
                        id="image_file"
                        value={formInputValues.file_image}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="image_file"></label>
                </div> */}

                <button
                    className="waves-effect waves-light btn light-blue darken-2 btn-block"
                    onClick={handleSave}
                >
                    save
                </button>
            </form>
        </>
    );
};

export default CreateBrand;
