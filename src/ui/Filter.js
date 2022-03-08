import React, { useState } from 'react';

import classes from './Filter.module.css';


const Filter = (props) => {
    const [productTagValue, setProductTagValue] = useState();
    const [productValue, setProductValue] = useState();
    const [productBrand, setProductBrand] = useState();

    const productTagHandler = (e) => {
        // console.log(e.target.name, e.target.value);
        setProductTagValue(e.target.value);
    }

    const productValueHandler = (e) => {
        // console.log(e.target.value);
        setProductValue(e.target.value);
    }

    const productBrandHandler = (e) => {
        // console.log(e.target.value);
        setProductBrand(e.target.value);
    }

    const formSubmitionHandler = (e) => {
        e.preventDefault();

        props.onSubmit(productTagValue, productValue, productBrand);
    }

    return (
        <div className={classes.filter}>
            <p className={classes.title}>filter By:</p>
            <form className={classes.form} onSubmit={formSubmitionHandler}>
                <div className={classes.formControl}>
                    <label htmlFor='tag'>tag</label>
                    <select name="product_tags" id="tag" onChange={productTagHandler}>
                        <option>--Please choose an option--</option>
                        <option defaultValue="Chemical Free">Chemical Free</option>
                        <option defaultValue="Natural">Natural</option>
                        <option defaultValue="Gluten Free">Gluten Free</option>
                        <option defaultValue="Organic">Organic</option>
                        <option defaultValue="Vegan">Vegan</option>
                        <option defaultValue="oil free">oil free</option>
                    </select>
                </div>
                <div className={classes.formControl}>
                    <label htmlFor='product_type'>product type</label>
                    <select name="product_type" id="product_type" onChange={productValueHandler}>
                        <option defaultValue="" selected>--Please choose an option--</option>
                        <option defaultValue="Blush">Blush</option>
                        <option defaultValue="Bronzer">Bronzer</option>
                        <option defaultValue="Eyebrow">Eyebrow</option>
                        <option defaultValue="Eyeliner">Eyeliner</option>
                        <option defaultValue="Eyeshadow">Eyeshadow</option>
                        <option defaultValue="Foundation">Foundation</option>
                        <option defaultValue="Lip liner">Lip liner</option>
                        <option defaultValue="Lipstick">Lipstick</option>
                        <option defaultValue="Mascara">Mascara</option>
                    </select>
                </div>
                <div className={classes.formControl}>
                    <label htmlFor='brand'>product brand</label>
                    <select name="brand" id="brand" onChange={productBrandHandler}>
                        <option defaultValue="" selected>--Please choose an option--</option>
                        <option defaultValue="almay">almay</option>
                        <option defaultValue="l'oreal">l'oreal</option>
                        <option defaultValue="boosh">boosh</option>
                        <option defaultValue="dior">dior</option>
                        <option defaultValue="milani">milani</option>
                        <option defaultValue="maybelline">maybelline</option>
                        <option defaultValue="nyx">nyx</option>
                        <option defaultValue="revlon">revlon</option>
                        <option defaultValue="sante">sante</option>
                    </select>
                </div>
                <div className={classes.formControl}>
                    <button type='submit' className={classes.formBtn}>Apply</button>
                </div>
            </form>
        </div>
    );
}

export default React.memo(Filter);