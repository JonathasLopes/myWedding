import { ReactComponent as Divisor } from '../../assets/img/divisor3.svg';
import './CardCounting.css';

interface ICardCountingProps {
    time: number,
    moment: string
}

function CardCounting({ time, moment }: ICardCountingProps) {
    return (
        <div className="card-counting-container">
            <Divisor className='divisor-card' />
            <span className='timer-card'>{time < 10 ? "0" + time : time}</span>
            <span className='moment-card'>{moment}</span>
        </div>
    );
}

export default CardCounting;