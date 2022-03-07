import axios from "axios";
axios.get('https://api.spacexdata.com/v4/crew')
    .then((res) => {
        console.log(res);

        console.log(res.data[0].crew);
    })
    .catch((err) => {
        console.log(err);
    });




const ComponentTwo = () => {
    return (
        <>
            <p>
                This is Component Two
            </p>
        </>
    );
}
export default ComponentTwo;