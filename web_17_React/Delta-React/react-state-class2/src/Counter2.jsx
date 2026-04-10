import { useState ,useEffect } from 'react';

export default function Counter2() {
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);
    let incrementCountx = () => {
        setCountx((currCount) => currCount + 1);
    }
    let incrementCounty = () => {
        setCounty((currCount) => currCount + 1);
    }
    useEffect(() => {
        console.log("Count value changed of x:", countx);
    }, [countx]);
    useEffect(() => {
        console.log("Count value changed of y:", county);
    }, [county]);
    return (
        <div>
            <h3>Countx : { countx}</h3>
            <br />
            <button onClick={incrementCountx}>+1</button>
            <h3>County : { county}</h3>
            <br />
            <button onClick={incrementCounty}>+1</button>
        </div>
    );

}