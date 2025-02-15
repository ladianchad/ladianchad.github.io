import {useSearch} from "wouter";
import {useMemo} from "react";
import CVPage from "./pages/cv/page";

const App = () => {
    const search = useSearch()
    const content = useMemo(() => {
        return new URLSearchParams(search)
    }, [search])
    if (content.get("ct") == "cv") {
        return <CVPage></CVPage>
    }
    return <>HI</>
}

export default App
