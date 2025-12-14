
// import { useEffect, useState } from "react";
export default function Header() {
    return (<>
        <div className="header">
            <div className="header__top">
                <div className="header__logo">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/017/119/660/small_2x/github-logo-git-hub-icon-with-text-on-white-and-black-background-free-vector.jpg" alt="" />
                </div>
                <div className="header__title">
                    Github issued browser
                </div>
            </div>

            <div className="header__short-descrition"> Explore repository issues with detailed user information</div>
        </div>
    </>);
}