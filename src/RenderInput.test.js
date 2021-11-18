import React from "react";
import { render , screen , cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderInput from "./RenderInput";
import { describe, expect, it } from "@jest/globals";

afterEach(() => cleanup());

describe("Rendering", () => {
    it("Should render all the elements correctly" , ()=>{
        render(<RenderInput />)
        expect(screen.getByRole("button")).toBeTruthy();
        expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
    })
})

describe("Input form onChange event" , ()=>{
    it("Should update input value correctly", () =>{
        render(<RenderInput />);
        const inputValue = screen.getByPlaceholderText("Enter");
        userEvent.type(inputValue, "test"); //ユーザが[test]と入力したことをシュミレート
        expect(inputValue.value).toBe("test");
    });
});

describe("Console button coditionally triggered", ()=> {
    it("Should not trigger output function", ()=>{
        const outputConsole = jest.fn(); //モック関数を割り当てる
        render(<RenderInput outputConsole={outputConsole}/>)
        userEvent.click(screen.getByRole("button"))
        expect(outputConsole).not.toHaveBeenCalled();　//呼び出されないことを確認
    });
    it("Should trigger output function",()=>{
        const outputConsole = jest.fn();
        render(<RenderInput outputConsole={outputConsole} />);
        const inputValue = screen.getByPlaceholderText("Enter");
        userEvent.type(inputValue, "test"); //ユーザが[test]と入力したことをシュミレート
        userEvent.click(screen.getByRole("button"));
        expect(outputConsole).toHaveBeenCalledTimes(1); //一回のみモック関数が呼び出される
    })
})
