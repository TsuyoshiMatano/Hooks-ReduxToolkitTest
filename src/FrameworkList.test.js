import React from "react";
import {render , cleanup ,screen} from "@testing-library/react";
import FrameworkList from "./FrameworkList";
import { expect, it } from "@jest/globals";

afterEach(() => cleanup()); //

describe("Rendering the list with props",()=>{
    it("Should render No  date! when no date propped", ()=>{
        render(<FrameworkList />)
        expect(screen.getByText("No data!")).toBeInTheDocument(); //HTMLの構造の中に[No data!]という文字列が含まれるかをテスト
    });
    it("Should render list item correctly",()=> {
        const dummyData = [
            {id:1 , item:"React dummy" },
            {id:2 , item:"Angular dummy" },
            {id:3 , item:"Vue dummy" },
        ];
        render(<FrameworkList frameworks={dummyData} />)
        const frameworkItems = screen.getAllByRole("listitem").map((ele)=>ele.textContent);
        const dummyItems = dummyData.map((ele)=>ele.item);
        expect(frameworkItems).toEqual(dummyItems); //frameworkItemsとdummyItemsが等しいかをテスト
        expect(screen.queryByText("No data!")).toBeNull();
    })
})