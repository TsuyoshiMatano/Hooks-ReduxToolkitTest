import React from "react";
import { queryByText, render, screen } from "@testing-library/react"
import Render from "./Render"

describe("Rendering", () => {
    it("Should render all the elements correctly", () => {
        render(<Render />);
        //screen.debug();
        //screen.debug(screen.getByRole("heading"));
        expect(screen.getByRole("heading")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy(); //存在していることを確認
        expect(screen.getAllByRole("button")[0]).toBeTruthy(); //ボタン1が存在していることを確認
        expect(screen.getAllByRole("button")[1]).toBeTruthy(); //ボタン2が存在していることを確認
        expect(screen.getByText("Udemy")).toBeTruthy(); //Udemyというテキストがあるかを確認
        expect(screen.queryByText("udemy")).toBeNull(); //udemyという文字列がなければPASS
        expect(screen.getByTestId("copyright")).toBeTruthy(); //copyrightというテストIDが存在するかのテスト
        //screen.debug(screen.getByText("Udemy"));
    })
})

