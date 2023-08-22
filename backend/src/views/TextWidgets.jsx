import AdminComponent from "./components/AdminComponent.jsx";
import {useStateContext} from "./context/ContextProvider.jsx";
import TextWidgetItem from "./components/TextWidgetItem.jsx";
import TButton from "./components/core/TButton.jsx";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

export default function TextWidgets() {
    const { textWidgets } = useStateContext()

    const onDeleteClick = () => {
        console.log("Deleted")
    }

    return (
        <AdminComponent
            title="Text Widgets"
            buttons={(
                <TButton color="green" to="/text-widgets/create">
                    <PlusCircleIcon className="w-6 h-6 mr-2" />
                    Create Text Widget
                </TButton>
            )}
        >
            <ul role="list" className="divide-y divide-gray-100">
                {textWidgets.map((textWidget) => (
                    <TextWidgetItem textWidget={textWidget} key={textWidget.id} onDeleteClick={onDeleteClick} />
                ))}
            </ul>
        </AdminComponent>
    )
}

