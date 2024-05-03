import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ErrorForm = () => {
    const { error } = useSelector((state: any) => state.auth);
    const [visable, setVisable] = useState(false)

    useEffect(() => {
        setVisable(false)

        setTimeout(() => {
            setVisable(true)
        }, 2000)

        // setVisable(false)
    }, [error])

    return error ? <div className={visable ? "error hide": "error"}>Form incorrectly or is empty</div> : "";
};

export default ErrorForm;