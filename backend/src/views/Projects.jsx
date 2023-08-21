import ProjectItem from "./components/ProjectItem.jsx";
import { useStateContext } from "./context/ContextProvider.jsx";
import AdminComponent from "./components/AdminComponent.jsx";
import { PlusCircleIcon } from "@heroicons/react/20/solid/index.js";
import TButton from './components/core/TButton.jsx';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Projects() {
    const { projects} = useStateContext()

    const onDeleteClick = () => {
        console.log('Deleted');
    };

    return (
        <div>
            <AdminComponent
                title="Projects"
                buttons={(
                    <TButton color="green" to="/projects/create">
                        <PlusCircleIcon className="h-6 w-6 mr-2" />
                        Add Project
                    </TButton>
                )}
            >
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectItem project={project} key={project.id} onDeleteClick={onDeleteClick}/>
                    ))}
                </div>
            </AdminComponent>
        </div>
    );
}
