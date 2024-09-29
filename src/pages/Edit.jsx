import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HomeStayService from "../services/homestay.service";
import Swal from "sweetalert2";

const Edit = () => {
    // 1. Get ID from query string
    const { id } = useParams();
    const navigate = useNavigate();
    const [homeStay, setHomeStay] = useState({
        title: "",
        type: "",
        imageUrl: "",
    });
    
    // 2. Get home stay by ID
    useEffect(() => {
        homeStayService.getHomeStayById(id).then((response) => {
            if (response.status === 200) {
                setHomeStay(response.data);
            }
        })
        fetch("http://localhost:5000/home-stays/" + id)
            .then((res) => {
                return res.json();
            })
            .then((response) => {
                setHomeStay(response);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHomeStay({ ...homeStay, [name]: value });
    };

    const handSubmit = async () => {
        try {
            const response = await HomeStayService.editHomeStay(id, homeStay);
            if (response.status === 200) {
                Swal.fire({
                    title: "Home Stay Update",
                    text: response.data.message,
                    icon: "success",
                });
                navigate("/");
            }
        } catch (error) {
            Swal.fire({
                title: "Home Stay Update",
                text: error?.response?.data?.message || error.message,
                icon: "error",
            });
        }
    };

    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-2xl text-center">Edit Home Stay</h1>
            </div>
            <div className="space-y-2">
                <label className="input input-bordered flex items-center gap-2">Home Stay Name
                    <input 
                        type="text"
                        className="grow"
                        placeholder="Home Stay Name"
                        id="title"
                        name="title"
                        onChange={handleChange}
                        value={homeStay.title}
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2">Home Stay Type
                    <input 
                        type="text"
                        className="grow" 
                        placeholder="Home Stay Type"
                        id="type"
                        name="type"
                        onChange={handleChange}
                        value={homeStay.type}
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2">Home Stay Image URL
                    <input 
                        type="text"
                        className="grow" 
                        placeholder="Home Stay Image URL"
                        id="img"
                        name="img"
                        onChange={handleChange}
                        value={homeStay.img}
                    />
                </label>
                {homeStay.img && (
                    <div className="flex items-center gap-2">
                        <img src={homeStay.img} className="h-32" alt="Home Stay" />
                    </div>
                )}
                <button type="submit" className="btn btn-success" onClick={handSubmit}>
                    Edit Home Stay
                </button>
            </div>
        </div>
    );
}

export default Edit;
