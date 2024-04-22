import { start, start2 } from "../icon"

const renderStarts = (rating: number) => {

    let starts = []

    for (let i = 0; i < 5; i++) {
        if (rating >= 1) {
            starts.push(start)
            rating--
        } else if (rating > 0 && rating < 1) {
            starts.push(start2)
            rating--
        }
    }

    return starts
}

export { renderStarts }