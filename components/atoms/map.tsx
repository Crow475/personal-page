import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule,
    Sphere,
    ZoomableGroup,
    Marker,
    ZoomPanCallbackProps,
    ZoomGestureEvent,
} from "react-simple-maps";

import { LuMapPin } from "react-icons/lu";

const geoUrl = "/ne_110m_admin_0_countries_new_topo.json";

export default function Map({
    marker,
    scale,
    width,
    height,
    className,
    onMoveStart,
    onMoveEnd,
    onMove,
    ref,
}: {
    marker: [number, number];
    scale: number;
    width: number;
    height: number;
    className?: string;
    onMoveStart?: (
        props: ZoomPanCallbackProps,
        event: ZoomGestureEvent,
    ) => void;
    onMoveEnd?: (props: ZoomPanCallbackProps, event: ZoomGestureEvent) => void;
    onMove?: (props: ZoomPanCallbackProps, event: ZoomGestureEvent) => void;
    ref?: React.Ref<HTMLDivElement>;
}) {
    return (
        <div className={className} ref={ref}>
            <ComposableMap
                width={width}
                height={height}
                projection="geoEqualEarth"
                projectionConfig={{
                    scale: scale,
                }}
            >
                <ZoomableGroup
                    center={marker}
                    translateExtent={[
                        [-1000, -400],
                        [1300, 700],
                    ]}
                    onMoveStart={onMoveStart}
                    onMoveEnd={onMoveEnd}
                    onMove={onMove}
                >
                    <Graticule stroke="#101010" />
                    <Sphere stroke="#101010" />
                    <Geographies geography={geoUrl} fill="#18181b">
                        {({ geographies, borders }) => (
                            <>
                                {geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                    />
                                ))}
                                <path
                                    d={borders?.svgPath || ""}
                                    stroke="#52525b"
                                    strokeWidth={0.5}
                                />
                            </>
                        )}
                    </Geographies>
                    <Marker coordinates={marker}>
                        <LuMapPin className="h-6 w-6 -translate-x-2 -translate-y-3.5 text-blue-400" />
                    </Marker>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
}
