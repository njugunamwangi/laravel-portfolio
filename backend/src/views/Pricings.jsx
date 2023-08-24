import { PlusIcon } from "@heroicons/react/24/solid";
import AdminComponent from "./components/AdminComponent";
import TButton from "./components/core/TButton";

export default function Pricings() {
    return (
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

            </AdminComponent>
        </div>
    )
}
