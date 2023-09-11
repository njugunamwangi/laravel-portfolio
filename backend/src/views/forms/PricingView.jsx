import { useState } from "react";
import AdminComponent from "../components/AdminComponent.jsx";
import { useStateContext } from "../context/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../axios.js";
import TButton from "../components/core/TButton.jsx";

export default function PricingView() {
    const [ pricing, setPricing ] = useState({
        name: "",
        description: "",
        price: "",
        discount: "",
    })

    const { showToast } = useStateContext()

    const [ error, setError ] = useState("")

    const navigate = useNavigate()

    const onSubmit = (ev) => {
        ev.preventDefault()

        const payload = { ...pricing }

        axiosClient.post('/pricing', payload)
            .then((res) => {
                navigate('/pricings')
                showToast('Pricing package created successfully')
            })
            .catch((err) => {
                if (err && err.response) {
                    setError(err.response.data.errors)
                }
            })
    }

    return (
        <AdminComponent
            title="Add Pricing Package"
        >
            <form method="post" onSubmit={onSubmit}>
                <div className="shadow sm-overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">

                        {/* Name */}
                        <div className="col-span-full">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={pricing.name}
                                    onChange={(ev) =>
                                        setPricing({...pricing, name: ev.target.value})
                                    }
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                                />
                            </div>
                            {error.name && (<small className="text-sm text-red-500">
                                {error.name}
                            </small>)}
                        </div>
                        {/* Name */}

                         {/* Description */}
                         <div className="col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                            <textarea
                                id="description"
                                name="description"
                                rows={3}
                                value={pricing.description || ''}
                                onChange={(ev) =>
                                    setPricing({...pricing, description: ev.target.value})
                                }
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                            {error.description && (<small className="text-sm text-red-500">
                                {error.description}
                            </small>)}
                        </div>
                        {/* Description */}

                        {/* Price & Discount */}
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                    Price
                                </label>
                                <div className="mt-2">
                                    <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    value={pricing.price}
                                    onChange={(ev) =>
                                        setPricing({...pricing, price: ev.target.value})
                                    }
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                {error.price && (<small className="text-sm text-red-500">
                                    {error.price}
                                </small>)}
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="discount" className="block text-sm font-medium leading-6 text-gray-900">
                                    Discount
                                </label>
                                <div className="mt-2">
                                    <input
                                    type="text"
                                    name="discount"
                                    id="discount"
                                    value={pricing.discount}
                                    onChange={(ev) =>
                                        setPricing({...pricing, discount: ev.target.value})
                                    }
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                {error.discount && (<small className="text-sm text-red-500">
                                    {error.discount}
                                </small>)}
                            </div>
                        </div>
                        {/* Price & Discount */}

                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <TButton >
                                Save
                            </TButton>
                        </div>
                    </div>
                </div>
            </form>
        </AdminComponent>
    )
}
