import { useState } from "react";
import AdminComponent from "./components/AdminComponent";
import { PhotoIcon } from "@heroicons/react/20/solid";

export default function TextWidgetView() {
    const { showToast } = useStateContext()
    const [ textWidget, setTextWidget ] = useState({
        key: "",
        image: null,
        image_url: null,
        title: "",
        content: "",
        active: true,
    })

    const onSubmit = (ev) => {
        ev.preventDefault()
                showToast('Text widget created successfully')
    }

    const onImageChoose = (ev) => {
        const file = ev.target.files[0]

        const reader = new FileReader();

        reader.onload = () => {
            setTextWidget({
                ...textWidget,
                image: file,
                image_url: reader.result
            })

            ev.target.value = "";
        }

        reader.readAsDataURL(file);
    }

    return (
        <>
            <AdminComponent title="Create Text Widget">
                <form method="post" onSubmit={onSubmit}>
                    <div className="shadow sm-overflow-hidden sm:rounded-md">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">

                            {/* Image */}
                            <div className="col-span-full">
                                <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cover photo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        {textWidget.image_url && (
                                            <div>
                                                <img
                                                    src={textWidget.image_url}
                                                    alt={textWidget.title}
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
                                        {!textWidget.image_url && (
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

                            {/* Key */}
                            <div className="col-span-full">
                                <label htmlFor="key" className="block text-sm font-medium leading-6 text-gray-900">
                                    Key
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="key"
                                        id="key"
                                        value={textWidget.key}
                                        onChange={(ev) =>
                                            setTextWidget({...textWidget, key: ev.target.value})
                                        }
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                                    />
                                </div>
                                {/* {error.title && (<small className="text-sm text-red-500">
                                    {error.title}
                                </small>)} */}
                            </div>
                            {/* Key */}

                            {/* Title */}
                            <div className="col-span-full">
                                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                    Title
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        value={textWidget.title}
                                        onChange={(ev) =>
                                            setTextWidget({...textWidget, title: ev.target.value})
                                        }
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                                    />
                                </div>
                                {/* {error.title && (<small className="text-sm text-red-500">
                                    {error.title}
                                </small>)} */}
                            </div>
                            {/* Title */}

                            {/* Content */}
                            <div className="col-span-full">
                                <label htmlFor="content" className="block text-sm font-medium leading-6 text-gray-900">
                                    Content
                                </label>
                                <div className="mt-2">
                                <textarea
                                    id="content"
                                    name="content"
                                    rows={3}
                                    value={textWidget.content || ''}
                                    onChange={(ev) =>
                                        setTextWidget({...textWidget, content: ev.target.value})
                                    }
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                </div>
                            </div>
                            {/* Content */}

                            {/* Active */}
                            <div className="border-b border-gray-900/10 pb-12">
                                <div className="mt-10 space-y-10">
                                    <fieldset>
                                        <div className="mt-6 space-y-6">
                                            <div className="relative flex gap-x-3">
                                                <div className="flex h-6 items-center">
                                                    <input
                                                        id="active"
                                                        name="active"
                                                        type="checkbox"
                                                        value={textWidget.active}
                                                        onChange={(ev) =>
                                                            setTextWidget({...textWidget, active: ev.target.checked})
                                                        }
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                </div>
                                                <div className="text-sm leading-6">
                                                    <label htmlFor="active" className="font-medium text-gray-900">
                                                        Active
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            {/* Active */}
                        </div>
                    </div>
                </form>
            </AdminComponent>
        </>
    )
}
