const Grocery = () => {
    return (
        <div className="p-4 m-4 ">
            <h1 className="font-semibold">
                This is Grocery page, created by using "Lazy Loading".
            </h1>
            <h1 className="font-semibold">
                It create different/another Bundler(Js file).
            </h1>
            <ul className="font-normal">
                <li>Chunking</li>
                <li>Code Splitting</li>
                <li>Dynamic Bunduling</li>
                <li>Lazy Loading</li>
                <li>On demand Loading</li>
                <li>Dynamic import</li>
            </ul>
        </div>
    );
};

export default Grocery;
