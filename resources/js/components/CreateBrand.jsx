import React, { useRef } from "react";

const CreateBrand = () => {
    console.log("onSubmit", nameInput);

    const nameInput = useRef();

    return (
        <>
            <div id="add-brand">
                <br />

                <h1>Add Brand</h1>
                
                    <div className="input-field">
                        <input type="text" name="name" ref={nameInput} />
                        <label htmlFor="name">Name</label>
                    </div>
                   
            </div>
        </>
    );
};

export default CreateBrand;
