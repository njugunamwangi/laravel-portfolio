export default function ProjectCategory({category}) {
    return (
        <>
            <a
                className="grid bg-gray-50 rounded-full"
            >
                {category.category}
            </a>
        </>
    )
}
