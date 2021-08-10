function Suggetions({ list, setSearchQuery, setIsQueryFromSuggs }) {
    return (
        <div className="bg-white rounded-b absolute w-full" style={{ top: '40px' }}>
            <ul>
                {list.map((sugg, index) => (
                    <li 
                        key={index}
                        className="px-2 py-1.5 text-sm border-t cursor-pointer"
                        onClick={() => {
                            setSearchQuery(sugg.value);
                            setIsQueryFromSuggs(true);
                        }}
                    >
                        {sugg.value}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Suggetions
