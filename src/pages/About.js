import React from "react";
import Banner from "../Components/Banner/Banner";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <Banner title="luxurious tours" subtitle="tours starting at 35$">
                <Link to="/tours" className="btn-primary">
                    {" "}
                    our tours{" "}
                </Link>
            </Banner>
        </div>
    );
}
