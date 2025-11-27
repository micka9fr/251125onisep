import { Link } from "react-router";


const Home = () => {
    return (
        <div>
            Home
            <ul>
                <li>Liens vers <Link to={'/Editor'}>editor</Link></li>
                <li>Liens vers Editors meme id 4</li>
                <li>Liens vers <Link to={'/Thumbnail'}>Thumbnail</Link></li>
            </ul>
        </div>
    )
}

export default Home;