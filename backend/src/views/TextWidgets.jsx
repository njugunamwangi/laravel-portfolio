import AdminComponent from "./components/AdminComponent.jsx";
import {useStateContext} from "./context/ContextProvider.jsx";
import TextWidgetItem from "./components/TextWidgetItem.jsx";
import TButton from "./components/core/TButton.jsx";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import axiosClient from "../axios.js";
import Loading from "./components/Loading.jsx";

export default function TextWidgets() {
    // const { textWidgets } = useStateContext()

    const [ textWidgets, setTextWidgets ] = useState([])

    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        axiosClient.get('/textWidget')
            .then(({ data }) => {
                setTextWidgets(data.data)
                setLoading(false)
            })
    }, [])

    const onDeleteClick = () => {
        console.log("Deleted")
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
                        <AdminComponent
                            title="Text Widgets"
                            buttons={(
                                <TButton color="green" to="/text-widgets/create">
                                    <PlusCircleIcon className="w-6 h-6 mr-2" />
                                    Create Text Widget
                                </TButton>
                            )}
                        >
                            {
                                textWidgets == 0 && (
                                    <p>
                                        You don't have text widgets yet
                                    </p>
                                )
                            }
                            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                {textWidgets.map((textWidget) => (
                                    <TextWidgetItem textWidget={textWidget} key={textWidget.id} onDeleteClick={onDeleteClick}/>
                                ))}
                            </div>
                        </AdminComponent>
                    )
                }
            </div>

        </>
    )
}

