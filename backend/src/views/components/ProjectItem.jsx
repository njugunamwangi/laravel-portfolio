import {PencilSquareIcon, TrashIcon} from "@heroicons/react/20/solid/index.js";
import TButton from "./core/TButton.jsx";
import ProjectCategory from "./ProjectCategory.jsx";

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
                { <time dateTime={project.created_at} className="text-gray-500">
                    Completed: {project.created_at}
                </time> }
            </div>
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={project.project_url}>
                        <span className="absolute inset-0" />
                        {project.name}
                    </a>
                </h3>
            </div>
            <div>
                <h4 className="mt-3 text-sm font-semibold leading-6 text-gray-500 group-hover:text-gray-600">Categories</h4>
                <div className=" flex items-center justify-between gap-x-4 text-xs ">
                    {project.categories.map((category) => (
                        <ProjectCategory key={category.id} category={category} />
                    ))}
                </div>
            </div>
            <div className="flex items-center">
                <TButton href={`/projects/${project.id}`} circle link target="_self">
                    <PencilSquareIcon className="w-5 h-5"/>
                </TButton>

                {project.id && (
                    <TButton onClick={ev => onDeleteClick(project.id)} circle link color="red">
                        <TrashIcon className="w-5 h-5"/>
                    </TButton>
                )}
            </div>
        </article>
    )
}
