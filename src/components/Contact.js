const Contact = () => {
    return (
        <div>
            <h1 className="px-6 m-6 font-bold text-2xl">Contact Us</h1>
            <form className="flex">
                <input
                    type="text"
                    placeholder="Enter a Name"
                    className="m-2 p-1 border border-black border-solid rounded-sm"
                />
                <input
                    type="text"
                    placeholder="Message..."
                    className="m-2 p-1 border border-black rounded-sm"
                />
                <button className="m-2 border border-solid shadow-sm border-black bg-white-200 px-3 rounded-md bg-stone-300 hover:bg-gray-600 hover:text-white">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
