import ProjectItem from "./components/ProjectItem.jsx";
import AdminComponent from "./components/AdminComponent.jsx";
import { PlusCircleIcon } from "@heroicons/react/20/solid/index.js";
import TButton from './components/core/TButton.jsx';
import { useEffect, useState } from "react";
import axiosClient from "../axios.js";
import Loading from "./components/core/Loading.jsx";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Projects() {
    const [ projects, setProjects ] = useState([])

    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        axiosClient.get('/project')
            .then(({ data }) => {
                setProjects(data.data)
                setLoading(false)
            })
    }, [])

    const onDeleteClick = () => {
        console.log('Deleted');
    };

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
                        <div>
                            <AdminComponent
                                title="Projects"
                                buttons={(
                                    <TButton color="green" to="/projects/add">
                                        <PlusCircleIcon className="h-6 w-6 mr-2" />
                                        Add Project
                                    </TButton>
                                )}
                            >
                                {
                                    projects == 0 && (
                                        <p>
                                            You don't have projects yet
                                        </p>
                                    )
                                }
                                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    {projects.map((project) => (
                                        <ProjectItem project={project} key={project.id} onDeleteClick={onDeleteClick}/>
                                    ))}
                                </div>
                            </AdminComponent>
                        </div>
                    )
                }
            </div>
       </>
    );
}

