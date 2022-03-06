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
                        <option value="" selected>--Please choose an option--</option>
                        <option value="Chemical Free">Chemical Free</option>
                        <option value="Natural">Natural</option>
                        <option value="Gluten Free">Gluten Free</option>
                        <option value="Organic">Organic</option>
                        <option value="Vegan">Vegan</option>
                        <option value="oil free">oil free</option>
                    </select>
                </div>
                <div className={classes.formControl}>
                    <label htmlFor='product_type'>product type</label>
                    <select name="product_type" id="product_type" onChange={productValueHandler}>
                        <option value="" selected>--Please choose an option--</option>
                        <option value="Blush">Blush</option>
                        <option value="Bronzer">Bronzer</option>
                        <option value="Eyebrow">Eyebrow</option>
                        <option value="Eyeliner">Eyeliner</option>
                        <option value="Eyeshadow">Eyeshadow</option>
                        <option value="Foundation">Foundation</option>
                        <option value="Lip liner">Lip liner</option>
                        <option value="Lipstick">Lipstick</option>
                        <option value="Mascara">Mascara</option>
                    </select>
                </div>
                <div className={classes.formControl}>
                    <label htmlFor='brand'>product brand</label>
                    <select name="brand" id="brand" onChange={productBrandHandler}>
                        <option value="" selected>--Please choose an option--</option>
                        <option value="almay">almay</option>
                        <option value="l'oreal">l'oreal</option>
                        <option value="boosh">boosh</option>
                        <option value="dior">dior</option>
                        <option value="milani">milani</option>
                        <option value="maybelline">maybelline</option>
                        <option value="nyx">nyx</option>
                        <option value="revlon">revlon</option>
                        <option value="sante">sante</option>
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