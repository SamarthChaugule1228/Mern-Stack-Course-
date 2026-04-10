import React from 'react';
import Ticket from './Ticket.jsx';
import { generateTicket , sum } from './Helper.js';
export default function Lottrey({ n, winningsSum }) {
    let [ticket, setTicket] = React.useState(generateTicket(n));
    let isWinning = sum(ticket) === winningsSum;
    let buyTicket = () => {
        let newTicket = generateTicket(n);
        setTicket(newTicket);
    }
    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket Ticket={ticket} />
           <br />
            <button onClick={buyTicket}> Buy new Ticket </button>
            {isWinning && <h2>You Win!</h2>}
        </div>

    );
}