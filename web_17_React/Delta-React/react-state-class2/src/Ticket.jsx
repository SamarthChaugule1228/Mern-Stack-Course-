import TicketNum from "./TicketNum";
import './Ticket.css';
export default function Ticket({ Ticket })
{
    return (
        <div className="Ticket">
            {Ticket.map((num, index) => (
                <TicketNum key={index} num={num} />
            ))}
        </div>
    )
}