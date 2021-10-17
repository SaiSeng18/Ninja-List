export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })
    
    return {
        paths,
        fallback: false
    }
}
    
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    
    return {
        props: { ninja: data }
    }
}
    
const Details = ({ ninja }) => {
    return (
        <div className="bg-gray-100 w-4/5 border-l-4 border-blue-500 items-center rounded-md p-5  mx-auto">
            <div className="text-3xl">{ ninja.name }</div>
            <div className="text-xl m-3">{ ninja.email }</div>
            <div className="text-xl m-3">{ ninja.website }</div>
            <div className="text-xl m-3">{ ninja.address.city }</div>
        </div>
    );
}

export default Details;