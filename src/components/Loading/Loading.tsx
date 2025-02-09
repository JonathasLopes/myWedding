import { Hearts } from "react-loader-spinner";
import './Loading.css';

function Loading() {
    return (
        <div className="loading-container">
            <Hearts
                height="100"
                width="100"
                color="#50C878"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loading;