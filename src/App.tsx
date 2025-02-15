import {useSearch} from "wouter";
import {useMemo, useRef} from "react";
import CVPage from "./pages/cv/page";
import {useReactToPrint} from "react-to-print";

const Inner = () => {
    const search = useSearch()
    const content = useMemo(() => {
        return new URLSearchParams(search)
    }, [search])
    if (content.get("ct") == "cv") {
        return <CVPage></CVPage>
    }
    return <>HI</>
}

const App = () => {
    const contentRef = useRef<HTMLDivElement>(null)
    const reactToPrintFn = useReactToPrint({ contentRef });
    return <div className="pb-20">
        <div ref={contentRef}>
            <Inner/>
        </div>
        <button className="fixed bottom-2 right-10 bg-white drop-shadow p-2 rounded-md border" onClick={() => reactToPrintFn()}>Export Pdf</button>
    </div>
}

export default App
