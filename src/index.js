import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from "uuid";
import "./mulitiplicationTableStyle.scss";

// 被乘數
let multiplicands = [];
// 乘法算式
let mutipleItems = [];

// 計算乘法算式
const calculation = (multiplicand) => {
    mutipleItems = [];
    for (let multiplier = 1; multiplier <= 9; multiplier++) {
        mutipleItems.push(
            <div className="item">
                <p>{multiplicand} x {multiplier} = {multiplicand * multiplier}</p>
            </div>
        )
    }

    return <div key={uuidv4()} className="block">
        <div className="itemContainer">
            <div className="multiplicand">{multiplicand}</div>
            {mutipleItems}
        </div>
    </div>
}

// 被乘數
for (let multiplicand = 2; multiplicand <= 9; multiplicand++) {
    multiplicands.push(calculation(multiplicand));
}

ReactDOM.render(
    <div className="container">
        <div className="contentContainer">

            {/* 標題 */}
            <div className="block">
                <div className="divider">
                    <span className="line"></span>
                </div>

                <div className="title">
                    <h1>九九乘法表</h1>
                    <p>MULTIPLICATION CHART</p>
                </div>

                <div className="divider">
                    <span className="line"></span>
                </div>
            </div>
            {multiplicands}
        </div>

        <footer className="footer">
            <p>Copyright © 2019 HexSchool. All rights reserved.</p>
        </footer>
    </div>, document.getElementById('root')
)