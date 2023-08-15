import TButton from "./core/TButton.jsx";
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/20/solid/index.js";

export default function TextWidgetItem({textWidget, onDeleteClick}) {
    return (
        <li key={textWidget.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{textWidget.name}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{textWidget.email}</p>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-row sm:items-end">
                <TButton href={`/view/textWidget/${textWidget.slug}`} circle link>
                    <PencilSquareIcon className="w-5 h-5"/>
                </TButton>

                {textWidget.id && (
                    <TButton onClick={onDeleteClick} circle link color="red">
                        <TrashIcon className="w-5 h-5"/>
                    </TButton>
                )}
            </div>
        </li>
    )
}
