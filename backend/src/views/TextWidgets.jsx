import AdminComponent from "./components/AdminComponent.jsx";
import {useStateContext} from "./context/ContextProvider.jsx";
import TextWidgetItem from "./components/TextWidgetItem.jsx";

export default function TextWidgets() {
    const { textWidgets } = useStateContext()

    const onDeleteClick = () => {
        console.log("Deleted")
    }

    return (
        <AdminComponent title="Text Widgets">
            <ul role="list" className="divide-y divide-gray-100">
                {textWidgets.map((textWidget) => (
                    <TextWidgetItem textWidget={textWidget} key={textWidget.id} onDeleteClick={onDeleteClick} />
                ))}
            </ul>
        </AdminComponent>
    )
}

