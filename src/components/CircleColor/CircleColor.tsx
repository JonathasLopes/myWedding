import './CircleColor.css';

interface ICircleColorProps {
    title: string,
    color: string
}

function CircleColor({ color, title }: ICircleColorProps) {
    return (
        <div className="circle-color-container">
            <div className={`circle ${color}`}></div>
            <span>{title}</span>
        </div>
    )
}

export default CircleColor;