import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchSegments, createSegment } from "../redux/segmentSlice";

import SegmentForm from "../components/segments/SegmentForm";

export default function Segments() {
    const dispatch = useDispatch();

    const segments = useSelector((state) => state.segments.segments);

    useEffect(() => {
        dispatch(fetchSegments());
    }, []);

    return (
        <div
            className="
        space-y-6"
        >
            <h1
                className="
            text-3xl
            font-bold"
            >
                Segments
            </h1>

            <SegmentForm onSubmit={(data) => dispatch(createSegment(data))} />

            <div
                className="
            grid
            md:grid-cols-2
            gap-4"
            >
                {segments.map((segment) => (
                    <div
                        key={segment._id}
                        className="
                        bg-white
                        p-4
                        rounded-xl
                        border"
                    >
                        <h3
                            className="
                            font-semibold"
                        >
                            {segment.name}
                        </h3>

                        <p>Audience: {segment.audienceSize}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
