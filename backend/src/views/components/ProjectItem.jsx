import {PencilSquareIcon, TrashIcon} from "@heroicons/react/20/solid/index.js";
import TButton from "./core/TButton.jsx";

export default function ProjectItem({project, onDeleteClick}) {
    return (
        <article key={project.id} className="flex max-w-xl flex-col items-start justify-between">
            <div>
                <img
                    className="rounded-lg"
                    src={project.image_url}
                />
            </div>
            <div className="mt-2 flex items-center gap-x-4 text-xs">
                {/* <time dateTime={project.datetime} className="text-gray-500">
                    Completed: {project.date}
                </time> */}

            </div>
            <div className="mt-3 flex items-center justify-between gap-x-4 text-xs ">
                <a
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                    {/* {project.category.name} */}
                </a>

            </div>
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={project.project_url}>
                        <span className="absolute inset-0" />
                        {project.name}
                    </a>
                </h3>
                <p dangerouslySetInnerHTML={{__html:project.description}} className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"></p>
            </div>
            <div className="flex items-center">
                <TButton href={`/projects/${project.id}`} circle link>
                    <PencilSquareIcon className="w-5 h-5"/>
                </TButton>

                {project.id && (
                    <TButton onClick={onDeleteClick} circle link color="red">
                        <TrashIcon className="w-5 h-5"/>
                    </TButton>
                )}
            </div>
        </article>
    )
}
