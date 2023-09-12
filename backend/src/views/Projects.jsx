import ProjectItem from "./components/ProjectItem.jsx";
import AdminComponent from "./components/AdminComponent.jsx";
import { PlusCircleIcon } from "@heroicons/react/20/solid/index.js";
import TButton from './components/core/TButton.jsx';
import { useEffect, useState } from "react";
import axiosClient from "../axios.js";
import Loading from "./components/core/Loading.jsx";
import {useStateContext} from "./context/ContextProvider.jsx";
import Pagination from "./components/core/Pagination.jsx";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Projects() {
    const { showToast } = useStateContext()
    const [ projects, setProjects ] = useState([])

    const [ loading, setLoading ] = useState(false)

    const [ meta, setMeta ] = useState({})

    useEffect(() => {
        getProjects()
    }, [])

    const onPageClick = (link) => {
        getProjects(link.url);
    };

    const onDeleteClick = (id) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            axiosClient.delete(`/project/${id}`)
                .then(() => {
                    getProjects()
                    showToast('The project was deleted', 'success');
                });
        }
    };

    const getProjects = (url) => {
        url = url || "/project"
        setLoading(true)
        axiosClient.get(url)
            .then(({ data }) => {
                setProjects(data.data)
                setMeta(data.meta)
                setLoading(false)
            })
    }

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
                                <div className="mx-auto mt-10 grid mb-8 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    {projects.map((project) => (
                                        <ProjectItem project={project} key={project.id} onDeleteClick={onDeleteClick}/>
                                    ))}
                                </div>
                                <Pagination meta={meta} onPageClick={onPageClick} />
                            </AdminComponent>
                        </div>
                    )
                }
            </div>
       </>
    );
}

