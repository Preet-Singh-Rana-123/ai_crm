export default function CustomerFilters({ city, setCity }) {
    return (
        <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="
                p-3
                border
                rounded-lg
                bg-white
            "
        >
            <option value="">All Cities</option>

            <option value="Delhi">Delhi</option>

            <option value="Mumbai">Mumbai</option>

            <option value="Noida">Noida</option>

            <option value="Bangalore">Bangalore</option>
        </select>
    );
}
