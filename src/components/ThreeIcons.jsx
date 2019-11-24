import React from 'react';
import IconBox from "./IconBox";
import {
    faPuzzlePiece,
    faTrophy,
    faMapSigns
} from "@fortawesome/free-solid-svg-icons";

export default () => {
    return (
        <section className="three-icons">
            <IconBox icon={faPuzzlePiece} litle="Sport type" text="Cycling" />
            <IconBox icon={faTrophy} litle="Mode" text="Advanced" />
            <IconBox icon={faMapSigns} litle="Route" text="30 miles" />
        </section>
    )
}