import React from "react";
import {useLocation} from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
        </div>
    );
}
export function Stuff() {
    return (
        <div>
            <h1>[Stuff]</h1>
        </div>
    );
}
export function Contact() {
    return (
        <div><h1>[Contact]</h1></div>
    );
}
export function Woops404() {
    let loc = useLocation();    // 요청 경로 알아냄
    // This hook returns the current location object
    return (
        <div><h1>Resource {loc.pathname} not found!!</h1></div>
        // pathname returns the current url minus the domain name
    );
}