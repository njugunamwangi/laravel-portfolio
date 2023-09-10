import { PlusIcon } from "@heroicons/react/24/solid";
import AdminComponent from "./components/AdminComponent";
import TButton from "./components/core/TButton";
import { useEffect, useState } from "react";
import axiosClient from "../axios.js";
import Loading from "./components/core/Loading.jsx";
import PricingItem from "./components/PricingItem";

export default function Pricings() {
    const [ pricings, setPricings ] = useState([])

    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        axiosClient.get('/pricing')
            .then(({data}) => {
                setPricings(data.data)
                setLoading(false)
            })
    }, [])

    const onDeleteClick = (ev) => {
        ev.preventDefault()

        console.log("Delete clicked")
    }

    return (
        <>
            <div>
                {
                    loading && (
                        <Loading />
                    )
                }
            </div>
            <div>
                {
                    !loading && (
                        <div>
                            <AdminComponent
                                title="Pricing"
                                buttons={
                                    <TButton color="green"  to="/pricings/add">
                                        <PlusIcon className="h-6 w-6 mr-2" />
                                        Add Package
                                    </TButton>
                                }
                            >
                                {pricings == 0 && (
                                    <p>
                                        You don't have pricing package list yet
                                    </p>
                                )}

                                <ul role="list" className="divide-y divide-gray-100">
                                    {pricings.map((pricing) => (
                                        <PricingItem pricing={pricing} key={pricing.id} onDeleteClick={onDeleteClick} />
                                    ))}
                                </ul>

                            </AdminComponent>
                        </div>
                    )
                }
            </div>
        </>
    )
}
