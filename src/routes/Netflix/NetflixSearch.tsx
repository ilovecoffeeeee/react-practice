import { useLocation } from "react-router";

function Netflix_Search() {
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get("keyword");
    console.log(keyword)
    return null;
}

export default Netflix_Search;