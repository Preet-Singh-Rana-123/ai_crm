export default function CustomerSearch({ value, onChange }) {
    return (
        <input
            type="text"
            placeholder="Search customer..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
                w-full
                p-3
                border
                rounded-lg
                bg-white
            "
        />
    );
}
