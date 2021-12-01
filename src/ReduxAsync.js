import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {
    selectCount,
    selectUsername,
    fetchDummy,
    fetchJSON,
} from "./features/customConter/customCounterSlice";

const ReduxAsync = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const username = useSelector(selectUsername);
    return (
        <div>
            <span data-testid="count-value">{count}</span>
            <button onClick={()=> dispatch(fetchDummy(5))}>FetchDummy</button>
            {username && <h1>{username}</h1>}
            <button onClick={()=> dispatch(fetchJSON())}>FetchJSON</button>
        </div>
    )
}

export default ReduxAsync
