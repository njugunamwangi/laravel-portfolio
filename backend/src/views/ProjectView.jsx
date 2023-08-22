import { useState } from "react";
import AdminComponent from "./components/AdminComponent";
import { PhotoIcon } from "@heroicons/react/20/solid";

export default function ProjectView() {
    const [ project, setProject ] = useState({
        name: "",
        slug: "",
        image: null,
        image_url: null,
        project_url: "",
        active: false
    })

    const [categories] = useState([])

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

    const onSubmit = (ev) => {
        ev.preventDefault()
        console.log('form submitted')
    }

    return (
        <>
            <AdminComponent title="Add Project">
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
                                {/* {error.title && (<small className="text-sm text-red-500">
                                    {error.title}
                                </small>)} */}
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
                                        value={project.name}
                                        onChange={(ev) =>
                                            setProject({...project, name: ev.target.value})
                                        }
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                                    />
                                </div>
                                {/* {error.title && (<small className="text-sm text-red-500">
                                    {error.title}
                                </small>)} */}
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
                                                        id="status"
                                                        name="status"
                                                        type="checkbox"
                                                        value={project.status}
                                                        onChange={(ev) =>
                                                            setProject({...project, status: ev.target.checked})
                                                        }
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                </div>
                                                <div className="text-sm leading-6">
                                                    <label htmlFor="status" className="font-medium text-gray-900">
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
                                    <div className="">
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="comments" className="font-medium text-gray-900">
                                                Comments
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    </fieldset>
                                </div>
                            </div>
                            {/* Categories */}
                        </div>
                    </div>
                </form>
            </AdminComponent>
        </>
    )
}
