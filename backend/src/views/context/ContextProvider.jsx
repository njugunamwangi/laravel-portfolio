import {createContext, useContext, useState} from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    textWidgets: {},
    projects: {},
    categories: {},
    toast: {
        message: null,
        show: false
    },
    setCurrentUser: () => {},
    setUserToken: () => {}
})

const tmpTextWidgets = [
    {
        id: 1,
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        image_url:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        id: 2,
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        image_url:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        id: 3,
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        image_url:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
    {
        id: 4,
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        image_url:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        id: 5,
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        image_url:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        id: 6,
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        image_url:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
]

const tmpCategories = [
    {
        id: 1,
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        image_url:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        id: 2,
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        image_url:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        id: 3,
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        image_url:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
    {
        id: 4,
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        image_url:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        id: 5,
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        image_url:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        id: 6,
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        image_url:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
]

const tmpProjects = [
    {
        id: 1,
        image_url: '/projects/in2drones.png',
        title: 'Boost your conversion rate',
        slug: 'lorem-ipsum',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
    },
    {
        id: 4,
        image_url: '/projects/portfolio.png',
        title: 'Boost your conversion rate',
        slug: 'lorem-ipsum',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
    },
    {
        id: 2,
        image_url: '/projects/travelwithlewis.png',
        title: 'Boost your conversion rate',
        slug: 'lorem-ipsum',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
    },
    {
        id: 3,
        image_url: '/projects/portfolio.png',
        title: 'Boost your conversion rate',
        slug: 'lorem-ipsum',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
    },
]


export const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({})
    const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '')

    const setUserToken = (token) => {
        if(token) {
            localStorage.setItem('TOKEN', token)
        } else {
            localStorage.removeItem('TOKEN')
        }
        _setUserToken(token);
    }

    const [ textWidgets, setTextWidgets ] = useState(tmpTextWidgets)

    const [ projects, setProjects ] = useState(tmpProjects)

    const [ categories, setCategories ] = useState(tmpCategories)

    const [ toast, setToast ] = useState({message: '', show: false})

    const showToast = (message) => {
        setToast({message, show: true})
        setTimeout(() => {
            setToast({message: '', show: false})
        }, 5000)
    }

    return (
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            textWidgets,
            projects,
            categories,
            toast,
            showToast
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
