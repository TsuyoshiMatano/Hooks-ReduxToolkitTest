import React from "react"
import {render , screen,cleanup} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

//結合テスト用のストアの準備
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import customCounterReducer from "./features/customConter/customCounterSlice"

import ReduxAsync from "./ReduxAsync"

afterEach(()=>{
    cleanup();
})

describe("ReduxAsync test",()=>{
    let store;
    beforeEach(()=>{
        store = configureStore({
            reducer:{
                customCounter: customCounterReducer,
            },
        });
    })
    it("Should display value with 100 + payload", async()=>{
        render(
            <Provider store={store}>
                <ReduxAsync />
            </Provider>
        )
        userEvent.click(screen.getByText("FetchDummy"));
        expect(await screen.findByTestId("count-value")).toHaveTextContent("105");
    })

})