import reducer,{
    fetchDummy,
} from "../src/features/customConter/customCounterSlice";

describe("extraReducers",()=>{
    const initialState ={
        mode:0,
        value:0,
    }
    it("Shold output 100 + payload when fulfilled", ()=>{
        const action = {type: fetchDummy.fulfilled.type, payload:5}
        const state = reducer(initialState,action);
        expect(state.value).toEqual(105);
    })
    it("Should out 100 - Payload when rejected",()=>{
        const action = {type: fetchDummy.rejected.type, payload:5}
        const state = reducer(initialState,action);
        expect(state.value).toEqual(95);
    })
})