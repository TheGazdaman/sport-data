import React, { useState, useEffect } from "react";
import BrandCard from "./brand/BrandCard.jsx";
import BrandDetail from "./BrandDetail.jsx";
import { Router, Switch, Route, Link } from "react-router-dom";
import history from "./../history.js";
import CreateBrand from './CreateBrand.jsx';

const Content = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(36);
    const [lastPage, setLastPage] = useState(0);
    const [brands, setBrands] = useState([]);
    const [sort, setSort] = useState("ASC");
    const [addBrand, setAddBrand] = useState(false)

    let url = `/api/page?per_page=${postsPerPage}&page=${currentPage}&sort=${sort}`;

    useEffect(() => {
        console.log("url", url);
    }, [url]);

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setBrands(data.data);
                setLastPage(data.last_page);
            });
    }, [postsPerPage, currentPage, sort]);

    const handleBackBtn = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };
    const handleNextBtn = () => {
        setCurrentPage(Math.min(currentPage + 1, lastPage));
    };

    const handleAscending = () => {
        setSort("ASC");
    };

    const handleDescending = () => {
        setSort("DESC");
    };



    return (
        <>
        <Router history={history}>
            <div className="container">
                <button
                    className="waves-effect waves-light btn"
                    color="dark"
                    onClick={handleBackBtn}
                    id="backBtn"
                >
                    Back
                </button>
                <span style={{ padding: "2rem" }}>{currentPage}</span>
                <button
                    className="waves-effect waves-light btn"
                    onClick={handleNextBtn}
                    id="nextBtn"
                >
                    Next
                </button>
                <button
                    className="waves-effect waves-light btn"
                    value={sort}
                    onClick={handleAscending}
                >
                    Ascending
                </button>

                <button
                    className="waves-effect waves-light btn"
                    value={sort}
                    onClick={handleDescending}
                >
                    Descending
                </button>

                <button className="waves-effect waves-light btn" onClick={() => setAddBrand(true)}>
                    Add a new brand
                </button>

                <div className="container">
                    <label>Browser Select</label>
                    <select
                        className="browser-default"
                        value={postsPerPage}
                        onChange={e => {
                            setPostsPerPage(e.target.value);
                        }}
                    >
                        <option value="36">36</option>
                        <option value="60">60</option>
                        <option value="90">90</option>
                    </select>

                    <div className="row">
                        {brands.map((item, index) => {
                            return <BrandCard key={index} item={item} />;
                        })}
                    </div>
                    <Route exact path={`/edit/:id`}>
                        <BrandDetail />
                    </Route>
                </div>
            </div>
        </Router>
        {
            addBrand && (<CreateBrand />)
        }
        </>
    );
};
export default Content;
