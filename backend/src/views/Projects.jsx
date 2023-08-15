import React, { Fragment, useRef, useState} from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { Menu } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import ProjectItem from "./components/ProjectItem.jsx";
import {useStateContext} from "./context/ContextProvider.jsx";
import AdminComponent from "./components/AdminComponent.jsx";
import {ChevronDownIcon, ExclamationTriangleIcon} from "@heroicons/react/20/solid/index.js";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Projects() {
    const { projects} = useStateContext()

    const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
    const [isListCategoriesModalOpen, setIsListCategoriesModalOpen] = useState(false);

    const openAddCategoryModal = () => {
        setIsAddCategoryModalOpen(true);
        setIsListCategoriesModalOpen(false)
    };

    const closeAddCategoryModal = () => {
        setIsAddCategoryModalOpen(false);
    };

    const openListCategoriesModal = () => {
        setIsListCategoriesModalOpen(true);
        setIsAddCategoryModalOpen(false)
    };

    const closeListCategoriesModal = () => {
        setIsListCategoriesModalOpen(false);
    };

    const cancelButtonRef = useRef(null)

    const onDeleteClick = () => {
        console.log('Deleted');
    };

    return (
        <div>
            <AdminComponent
                title="Projects"
                buttons={(
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                Actions
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        <NavLink
                                            onClick={openAddCategoryModal}
                                            className="block px-4 py-2 text-sm"
                                        >
                                            Add Category
                                        </NavLink>
                                    </Menu.Item>

                                    <Transition.Root show={isAddCategoryModalOpen} as={Fragment}>
                                        <Dialog
                                            as="div"
                                            className="fixed inset-0 z-10"
                                            initialFocus={cancelButtonRef}
                                            onClose={closeAddCategoryModal}
                                        >
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0"
                                                enterTo="opacity-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                            </Transition.Child>

                                            <div className="fixed inset-0 z-10 overflow-y-auto">
                                                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                    <Transition.Child
                                                        as={Fragment}
                                                        enter="ease-out duration-300"
                                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                        leave="ease-in duration-200"
                                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                    >
                                                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                                                <div className="sm:flex sm:items-start">
                                                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                                            Add Category
                                                                        </Dialog.Title>
                                                                        <div className="mt-2">
                                                                            <p className="text-sm text-gray-500">
                                                                                Add Category
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                                <button
                                                                    type="button"
                                                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                                    onClick={() => setIsAddCategoryModalOpen(false)}
                                                                    ref={cancelButtonRef}
                                                                >
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </Dialog.Panel>
                                                    </Transition.Child>
                                                </div>
                                            </div>
                                        </Dialog>
                                    </Transition.Root>

                                    <Menu.Item>
                                        <NavLink
                                            onClick={openListCategoriesModal}
                                            className="block px-4 py-2 text-sm"
                                        >
                                            List Categories
                                        </NavLink>
                                    </Menu.Item>

                                    <Transition.Root show={isListCategoriesModalOpen} as={Fragment}>
                                        <Dialog
                                            as="div"
                                            className="fixed inset-0 z-10"
                                            initialFocus={closeListCategoriesModal}
                                            onClose={closeListCategoriesModal}
                                        >
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0"
                                                enterTo="opacity-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                            </Transition.Child>

                                            <div className="fixed inset-0 z-10 overflow-y-auto">
                                                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                    <Transition.Child
                                                        as={Fragment}
                                                        enter="ease-out duration-300"
                                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                        leave="ease-in duration-200"
                                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                    >
                                                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                                                <div className="sm:flex sm:items-start">
                                                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                                            List Category
                                                                        </Dialog.Title>
                                                                        <div className="mt-2">
                                                                            <p className="text-sm text-gray-500">
                                                                                List Categories
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                                <button
                                                                    type="button"
                                                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                                    onClick={() => setIsListCategoriesModalOpen(false)}
                                                                    ref={cancelButtonRef}
                                                                >
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </Dialog.Panel>
                                                    </Transition.Child>
                                                </div>
                                            </div>
                                        </Dialog>
                                    </Transition.Root>

                                    <Menu.Item>
                                        <NavLink
                                            to="/add-project"
                                            className="block px-4 py-2 text-sm"
                                        >
                                            Add Project
                                        </NavLink>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
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
