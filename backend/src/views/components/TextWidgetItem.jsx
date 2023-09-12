import {PencilSquareIcon, TrashIcon} from "@heroicons/react/20/solid/index.js";
import TButton from "./core/TButton.jsx";

export default function TextWidgetItem({textWidget, onDeleteClick}) {
    return (
        <article key={textWidget.id} className="flex max-w-xl flex-col items-start justify-between">
            <div>
                <img
                    className="rounded-lg"
                    src={textWidget.image_url}
                />
            </div>
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={textWidget.href}>
                        <span className="absolute inset-0" />
                        {textWidget.title}
                    </a>
                </h3>
                <p dangerouslySetInnerHTML={{__html:textWidget.description}} className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"></p>
            </div>
            <div className="flex items-center">
                <TButton href={`/view/textWidget/${textWidget.slug}`} circle link>
                    <PencilSquareIcon className="w-5 h-5"/>
                </TButton>

                {textWidget.id && (
                    <TButton onClick={ev => onDeleteClick(textWidget.id)} circle link color="red">
                        <TrashIcon className="w-5 h-5"/>
                    </TButton>
                )}
            </div>
        </article>
    )
}
