import { PlusIcon } from "@heroicons/react/24/solid";
import AdminComponent from "./components/AdminComponent";
import TButton from "./components/core/TButton";
import { useEffect, useState } from "react";
import axiosClient from "../axios.js";
import Loading from "./components/core/Loading.jsx";
import PricingItem from "./components/PricingItem";
import {useStateContext} from "./context/ContextProvider.jsx";
import Pagination from "./components/core/Pagination.jsx";

export default function Pricings() {
    const { showToast } = useStateContext()

    const [ pricings, setPricings ] = useState([])

    const [ loading, setLoading ] = useState(false)

    const [ meta, setMeta ] = useState({})

    useEffect(() => {
        getPricings()
    }, [])

    const onPageClick = (link) => {
        getPricings(link.url);
    };

    const onDeleteClick = (id) => {
        if (window.confirm("Are you sure you want to delete this pricing?")) {
            axiosClient.delete(`/pricing/${id}`)
                .then(() => {
                    getPricings()
                    showToast('The pricing package was deleted', 'success');
                });
        }
    };

    const getPricings = (url) => {
        url = url || '/pricing'
        setLoading(true)
        axiosClient.get(url)
            .then(({ data }) => {
                setPricings(data.data)
                setMeta(data.meta)
                setLoading(false)
            })
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
                                <Pagination meta={meta} onPageClick={onPageClick} />
                            </AdminComponent>
                        </div>
                    )
                }
            </div>
        </>
    )
}
