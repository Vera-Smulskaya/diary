export default function FormCreateNote() {
    return (
        <form className="mx-auto mt-6 p-6 w-full max-w-xs bg-slate-300 flex flex-col">
            <label className="inline-block flex flex-col mx-0.5 my-2.5">
                Date of your note
                <input id="date" type="date" className="p-2 w-50 mt-1.5" />
            </label>
            <label className="inline-block flex flex-col mx-0.5 my-2.5">
                Choose tag of your note
                <fieldset>
                    <label htmlFor="memory" className="mr-3">
                        <input type="checkbox" required name="memory" /> Special
                        memory
                    </label>
                    <label htmlFor="birthday" className="mr-3">
                        <input type="checkbox" required name="birthday" />{" "}
                        Birthday
                    </label>
                    <label htmlFor="travel" className="mr-3">
                        <input type="checkbox" required name="travel" /> Travel
                    </label>
                    <label htmlFor="achievements">
                        <input type="checkbox" required name="achievements" />{" "}
                        Achievements
                    </label>
                </fieldset>
            </label>
            <label className="inline-block flex flex-col mx-0.5 my-2.5">
                Write something special for you...
                <textarea
                    className="p-2 mt-1.5"
                    placeholder="Your memory is always with you"
                ></textarea>
            </label>
            <label className="inline-block flex flex-col mx-0.5 my-2.5">
                Add favorite photos
                <input
                    type="file"
                    id=""
                    name="photo"
                    accept="image/png, image/jpeg"
                    className="p-2 w-50 mt-1.5"
                    multiple
                />
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
