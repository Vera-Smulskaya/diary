export default function FormCreateNote() {
    return (
        <form className="mr-auto ml-auto mt-6 p-6 w-2/5 bg-slate-300 flex flex-col">
            <label className="inline-block flex flex-col mx-0.5 my-2.5">
                Date of your note
                <input id="date" type="number" className="p-2 w-50 mt-1.5" />
            </label>
            <label className="inline-block flex flex-col mx-0.5 my-2.5">
                Choose type of your note
                <select className="p-2 mt-1.5">
                    <option value="special-memory">Special memory</option>
                    <option value="birthday">Birthday</option>
                    <option value="travel">Travel</option>
                    <option value="achievements">Achievements</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <label className="inline-block flex flex-col mx-0.5 my-2.5">
                Write something special for you...
                <textarea
                    className="p-2 mt-1.5"
                    placeholder="Your memory is always with you"
                ></textarea>
            </label>
            <button
                className="mr-auto ml-auto mt-2.5 block w-40 hover:bg-gray-100 text-gray-800 font-semibold p-2 border border-gray-400 rounded shadow"
                type="submit"
            >
                Create note
            </button>
        </form>
    );
}
