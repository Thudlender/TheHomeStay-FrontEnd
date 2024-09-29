import React, { useEffect } from "react";
import notAllowedImg from "../assets/-png-";
import { useNavigate } from "react-router-dom";

const NotAlowed = () {
    const [counter, setCounter] = useState(10);
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setInterval(() => {
            navigate("/");
        }, 10000);

        const countDown = setInterval(() => {
            setCounter((prevCounter) => {
                if (prevCounter <= 1) {
                    clearInterval(countDown);
                    return 0;
                }
                return prevCounter - 1;
            });
        }, 1000);
        return () => {
            clearTimeout(timer);
            clearInterval(countDown);
        };
    }, [navigate]);
    return (
        <div className="card bg-base-100 image-full w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div class="chat chat-end">
  <div class="chat-bubble chat-bubble-info">Hey! Your not allowed here.</div>
</div>
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    )
}