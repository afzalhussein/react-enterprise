import { ClassAttributes, ImgHTMLAttributes } from "react"
import { JSX } from "react/jsx-runtime"

const Image = (
    props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLImageElement> &
        ImgHTMLAttributes<HTMLImageElement>
) => {
    return <img {...props} alt="" />
}

export default Image;