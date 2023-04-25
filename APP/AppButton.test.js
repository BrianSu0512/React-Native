import React from "react";

import renderer from "react-test-renderer"

import AppButton from './Components/AppButton'





test("trivially true",()=>{
    expect(1).toBe(1);
})

test("AppTest will render",()=>{
    const json =renderer.create(<AppButton  title="work"/>).toJSON();
    expect(json.children[0].props.style[0].backgroundColor).toBe('#E58300');
    expect(json.children[0].props.style[0].width).toBe('100%');
    expect(json.children[0].props.style[0].padding).toBe(15);
    expect(json.children[0].props.style[0].borderRadius).toBe(20);
    expect(json.children[0].props.style[0].alignItems).toBe('center');
    expect(json.children[0].props.style[0].marginTop).toBe(10);
})

test("AppTest containts context",()=>{
    const json =renderer.create(<AppButton title="hopefully work"/>).toJSON();
    expect(json.children[0].children[0].children[0]).toBe("hopefully work");
})


