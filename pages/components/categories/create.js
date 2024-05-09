import React, { useState } from 'react';
import Seo from '../../../shared/layout-components/seo/seo';
import axios from 'axios';
import { toast } from 'react-toastify';

const CreateCategory = () => {
    const [newCategory, setNewCategory] = useState({
        name: '',
        slug: '',
        type: 'parentCategory',
        h1Title: '',
        description: '',
        orderNumber: 1
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCategory(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submitting the form
        try {
            // Retrieve access token from localStorage
            const accessToken = localStorage.getItem('accessToken');

            // Make POST request using Axios
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/category`, newCategory, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (response.status === 200) {
                toast.success('Category created successfully');
                // Reset form fields after successful creation
                setNewCategory({
                    name: '',
                    slug: '',
                    type: 'parentCategory',
                    h1Title: '',
                    description: '',
                    orderNumber: 1
                });
            } else {
                console.error('Failed to create category');
            }
        } catch (error) {
            console.error('Error creating category:', error);
        } finally {
            setLoading(false); // Set loading back to false when API request completes
        }
    };

    return (
        <>
            <Seo title="Create Category" />
            <h2 className="main-content-title tx-24 mg-b-5 mt-4 mb-4 p-2">Create Category</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={newCategory.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="slug">Slug</label>
                    <input type="text" className="form-control" id="slug" name="slug" value={newCategory.slug} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="h1Title">H1 Title</label>
                    <input type="text" className="form-control" id="h1Title" name="h1Title" value={newCategory.h1Title} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description" value={newCategory.description} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Category'}
                </button>
            </form>
        </>
    );
};

CreateCategory.layout = "Contentlayout";

export default CreateCategory;
