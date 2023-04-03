import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";


const Page404 = () => {

    const router = useRouter();

    useEffect(()=>{
        var timeOut = setTimeout(()=>router.push("/"),3000);
        return ()=>clearTimeout(timeOut);
    },[]);

    return (
        <div className="not-found">
            <h1>Oops.....</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
    );
}

export default Page404;