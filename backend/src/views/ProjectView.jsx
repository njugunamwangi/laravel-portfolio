import { useEffect, useState } from "react";
import AdminComponent from "./components/AdminComponent";
import { PhotoIcon } from "@heroicons/react/20/solid";
import TButton from "./components/core/TButton";
import axiosClient from "../axios";
import Loading from "./components/core/Loading.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useStateContext } from "./context/ContextProvider";

export default function ProjectView() {
    const { showToast } = useStateContext()
    const [ project, setProject ] = useState({
        name: "",
        slug: "",
        image: null,
        image_url: null,
        project_url: "",
        active: false,
        categories: []
    })

    const [ error, setError ] = useState("")

    const [ categories, setCategories ] = useState([])

    const [ loading, setLoading ] = useState(false)

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        axiosClient.get('/category')
            .then(({ data }) => {
                setCategories(data.data)
                setLoading(false)
            })
    }, [])

    let [ selectedCategories, setSelectedCategories] = useState([])

    useEffect(() => {
        if (id) {
            setLoading(true)
            axiosClient.get(`/project/${id}`)
                .then(({ data }) => {
                    setProject(data.data)
                    const projectCategoryIds = data.data.categories.map(category => category.id);
                    setSelectedCategories(projectCategoryIds);
                    setLoading(false)
                })
        }
    }, [])

    const onImageChoose = (ev) => {
        const file = ev.target.files[0]

        const reader = new FileReader();

        reader.onload = () => {
            setProject({
                ...project,
                image: file,
                image_url: reader.result
            })

            ev.target.value = "";
        }

        reader.readAsDataURL(file);
    }

    function onCheckboxChange(category, $event) {
        if ($event.target.checked) {
            setSelectedCategories(prevSelectedCategories => [...prevSelectedCategories, category.id]);
        } else {
            setSelectedCategories(prevSelectedCategories => prevSelectedCategories.filter(id => id !== category.id));
        }
        console.log(category)
    }

    const onSubmit = (ev) => {
        ev.preventDefault()

        const payload = { ...project }

        payload.categories = selectedCategories

        if(payload.image) {
            payload.image = payload.image_url
        }

        delete payload.image_url

        axiosClient.post('/project', payload)
            .then((res) => {
                navigate('/projects')
                showToast('Project created successfully', 'success')
            })
            .catch((err) => {
                if (err && err.response) {
                    setError(err.response.data.errors)
                    showToast(err.response.data.message)
                }
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
                        <AdminComponent title={!id ? 'Add Project' : 'Edit Project'}>
                            <form method="post" onSubmit={onSubmit} >
                                <div className="shadow sm-overflow-hidden sm:rounded-md">
                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        {/* Image */}
                                        <div className="col-span-full">
                                            <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                                                Project photo
                                            </label>
                                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                <div className="text-center">
                                                    {project.image_url && (
                                                        <div>
                                                            <img
                                                                src={project.image_url}
                                                                alt={project.title}
                                                                className="aspect-[4/3] object-contain"
                                                            />
                                                            <label
                                                                htmlFor="image"
                                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                            >
                                                                <span>Change</span>
                                                                <input id="image" name="image" type="file" className="sr-only" onChange={onImageChoose}/>
                                                            </label>
                                                        </div>
                                                    )}
                                                    {!project.image_url && (
                                                        <div>
                                                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                                <label
                                                                    htmlFor="image"
                                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                                >
                                                                    <span>Upload a file</span>
                                                                    <input id="image" name="image" type="file" className="sr-only" onChange={onImageChoose}/>
                                                                </label>
                                                                <p className="pl-1">or drag and drop</p>
                                                            </div>
                                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF, JPEG</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {/* {error.image && (
                                                <small className="text-sm text-red-500">
                                                    The project photo is required
                                                </small>
                                            )} */}
                                        </div>
                                        {/* Image */}

                                        {/* Project Title */}
                                        <div className="col-span-full">
                                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Project Title
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    value={project.name}
                                                    onChange={(ev) =>
                                                        setProject({...project, name: ev.target.value})
                                                    }
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                                                />
                                            </div>
                                            {error.name && (<small className="text-sm text-red-500">
                                                {error.name}
                                            </small>)}
                                        </div>
                                        {/* Project Title */}

                                        {/* Project Url */}
                                        <div className="col-span-full">
                                            <label htmlFor="project_url" className="block text-sm font-medium leading-6 text-gray-900">
                                                Project Url
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="project_url"
                                                    id="project_url"
                                                    value={project.project_url}
                                                    onChange={(ev) =>
                                                        setProject({...project, project_url: ev.target.value})
                                                    }
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                                                />
                                            </div>
                                            {error.project_url && (<small className="text-sm text-red-500">
                                                {error.project_url}
                                            </small>)}
                                        </div>
                                        {/* Project Url */}

                                        {/* Active */}
                                        <div className="border-b border-gray-900/10 pb-12">
                                            <div className="mt-4 space-y-10">
                                                <fieldset>
                                                    <div className="mt-6 space-y-6">
                                                        <div className="relative flex gap-x-3">
                                                            <div className="flex h-6 items-center">
                                                                <input
                                                                    id="active"
                                                                    name="active"
                                                                    type="checkbox"
                                                                    value={project.active}
                                                                    checked={project.active}
                                                                    onChange={(ev) =>
                                                                        setProject({...project, active: ev.target.checked})
                                                                    }
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                                />
                                                            </div>
                                                            <div className="text-sm leading-6">
                                                                <label htmlFor="active" className="font-medium text-gray-900">
                                                                    Active
                                                                </label>
                                                                <p className="text-gray-500">Make project publicly available?</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>
                                        {/* Active */}

                                        {/* Categories */}
                                        <div className="border-b border-gray-900/10 pb-12">
                                            <h2 className="text-base font-semibold leading-7 text-gray-900">Categories</h2>

                                            <div className="mt-4 space-y-4">
                                                <fieldset>
                                                    {categories.map(category => (
                                                        <div className="relative flex gap-x-3" key={category.id}>
                                                            <div className="flex h-6 items-center">
                                                                <input
                                                                    id={`category-${category.id}`}
                                                                    name={`category-${category.id}`}
                                                                    type="checkbox"
                                                                    onChange={ev => onCheckboxChange(category, ev)}
                                                                    checked={selectedCategories.includes(category.id)}
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                                />
                                                            </div>
                                                            <div className="text-sm leading-6">
                                                                <label htmlFor={`category-${category.id}`} className="font-medium text-gray-900">
                                                                    {category.category}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </fieldset>
                                            </div>
                                        </div>
                                        {/* Categories */}

                                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                            <TButton >
                                                Save
                                            </TButton>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </AdminComponent>
                    )
                }
            </div>

        </>
    )
}
