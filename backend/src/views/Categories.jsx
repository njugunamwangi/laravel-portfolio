import { PlusCircleIcon } from "@heroicons/react/20/solid";
import AdminComponent from "./components/AdminComponent";
import TButton from "./components/core/TButton";
import { useStateContext } from "./context/ContextProvider";
import CategoryItem from "./components/CategoryItem";

export default function Categories() {
    const { categories } = useStateContext()

    const onDeleteClick = () => {
        console.log('Deleted');
    };

    return (
        <div>
            <AdminComponent
                title="Categories"
                buttons={(
                    <TButton color="green" to="/categories/create">
                        <PlusCircleIcon className="w-6 h-6 mr-2"  />
                        Add Category
                    </TButton>
                )}
            >
                <ul role="list" className="divide-y divide-gray-100">
                    {categories.map((category) => (
                        <CategoryItem category={category} key={category.id} onDeleteClick={onDeleteClick} />
                    ))}
                </ul>
            </AdminComponent>
        </div>
    )
}
