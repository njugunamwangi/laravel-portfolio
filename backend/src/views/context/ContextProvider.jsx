import {createContext, useContext, useEffect, useState} from "react";
import axiosClient from "../../axios";

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

    const [ textWidgets, setTextWidgets ] = useState([])

    const [ projects, setProjects ] = useState([])

    const [ categories, setCategories ] = useState([])

    const [ toast, setToast ] = useState({message: '', show: false})

    const showToast = (message) => {
        setToast({message, show: true})
        setTimeout(() => {
            setToast({message: '', show: false})
        }, 5000)
    }

    useEffect(() => {
        axiosClient.get('/category')
            .then(({data}) => {
                setCategories(data.data)
            })
    }, [])

    useEffect(() => {
        axiosClient.get('/project')
            .then(({data}) => {
                setProjects(data.data)
            })
    }, [])

    useEffect(() => {
        axiosClient.get('/textWidget')
            .then(({data}) => {
                setTextWidgets(data.data)
            })
    }, [])

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
