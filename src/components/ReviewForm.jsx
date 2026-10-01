import { useState } from "react";
import axios from "axios";

function ReviewForm({ movie_id, reloadReviews }) {
    const apiUrl = `http://localhost:3000/api/movies/${movie_id}/reviews`
    const initialValues = { name: "Anonymous", text: "", vote: 1 }
    const [formData, setFormData] = useState(initialValues)
    const [isValidForm, setIsValidForm] = useState(true)

    //FUNZIONE per validare il form
    const validateForm = () => {
        if (!formData.text || !formData.name) return false;
        if (isNaN(formData.vote) || formData.vote < 1 || formData.vote > 5) return false;
        return true
    }

    //FUNZIONE per onSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateForm()){
            setIsValidForm(false)
            return
        }
        //Chiamata api
        axios.post(apiUrl, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                setFormData(initialValues);
                reloadReviews()
            })
            .catch(err => {
                console.error(err)
            })
    }
    //FUNZIONE per onChange
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className="border border-success rounded mx-3">
            <h4 className="text-success"><strong>Lascia una recensione</strong></h4>
            <br />
            {
            !isValidForm
            && 
            <div className="alert alert-danger">
                Data is not valid!
            </div>
            }
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Author</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        className="form-control"
                        onChange={setFieldValue} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Review</label>
                    <input
                        type="text"
                        name="text"
                        value={formData.text}
                        className="form-control"
                        onChange={setFieldValue} />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputPassword1" className="form-label">Vote</label>
                    <input
                        type="number"
                        value={formData.vote}
                        name="vote"
                        min="1"
                        max="5"
                        className="form-control"
                        onChange={setFieldValue} />
                </div>
                <div className=" d-flex justify-content-end">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm;