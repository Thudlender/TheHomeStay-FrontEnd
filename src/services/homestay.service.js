import api from "./api";
const HOMESTAY_API = import.meta.env.VITE_HOMESTAY_API;

// Get all home stays
const getAllHomeStays = async () => {
    return await api.get(HOMESTAY_API);
};

// Get home stay by ID
const getHomeStayById = async (id) => {
    // Example: http://localhost:5000/api/v1/homestays/1
    return await api.get(HOMESTAY_API + `/${id}`);
};

// Update a home stay data
const editHomeStay = async (id, homestay) => {
    return await api.post(HOMESTAY_API + `/${id}`, homestay);
};

// Edit home stay
const updateHomeStay = async (id, homestay) => {
    return await api.put(HOMESTAY_API + `/${id}`, homestay);
};

const deleteHomeStay = async (id) => {
    return await api.delete(HOMESTAY_API + `/${id}`);
};

const addHomeStay = async (homestay) => {
    return await api.post(HOMESTAY_API, homestay);
};

const HomeStayService = {
    getAllHomeStays,
    getHomeStayById,
    updateHomeStay,
    deleteHomeStay,
    addHomeStay,
};

export default HomeStayService;
