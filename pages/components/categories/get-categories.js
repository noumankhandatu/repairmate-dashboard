import React, { useState, useEffect } from 'react';
import Seo from '../../../shared/layout-components/seo/seo';
import axios from 'axios';
import { toast } from 'react-toastify';

const GetCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/category/parent-category`);
                if (response.status === 200) {
                    setCategories(response.data?.data);
                } else {
                    console.error('Failed to fetch categories');
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleDeleteCategory = async (categoryId) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/category/${categoryId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            if (response.status === 200) {
                toast.success('Category deleted successfully');
                setCategories(categories.filter(category => category.id !== categoryId));
            } else {
                console.error('Failed to delete category');
            }
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    return (
        <>
            <Seo title="Get Categories" />
            <h2 className="main-content-title tx-24 mg-b-5 mt-4 mb-4 p-2">Categories</h2>

            {loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {categories.map(category => (
                        <div key={category.id} className="col mb-4">
                            <div style={{ width: 250 }} className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{category.name}</h5>
                                    <p className="card-text">{category.description}</p>
                                    <button className="btn btn-danger" onClick={() => handleDeleteCategory(category.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

GetCategories.layout = "Contentlayout";

export default GetCategories;
