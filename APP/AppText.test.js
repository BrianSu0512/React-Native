import React from "react";

import renderer from "react-test-renderer"

import AppText from './Components/AppText'






test("AppTest will render",()=>{
    const json =renderer.create(<AppText/>).toJSON();
  
    expect(json.props.style[0].fontSize).toBe(22);
    expect(json.props.style[0].fontFamily).toBe("Avenir-Roman");
    expect(json.props.style[0].fontStyle).toBe("italic");
    expect(json.props.style[0].fontWeight).toBe("bold");
    expect(json.props.style[0].textTransform).toBe("uppercase");
})

test("AppTest interstyle will render",()=>{
    const json =renderer.create(<AppText style={{margin:5, color:"red", fontSize:16}}/>).toJSON();
    console.log(json.props)
    expect(json.props.style[1].fontSize).toBe(16);
    expect(json.props.style[1].margin).toBe(5);
    expect(json.props.style[1].color).toBe("red");
})

test("AppTest containts context",()=>{
    const json =renderer.create(<AppText>hopefully work</AppText>).toJSON();
    expect(json.children.includes("hopefully work"));
})


