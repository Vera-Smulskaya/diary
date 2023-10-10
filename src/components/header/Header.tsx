import MainNavigation from "../main-navigation/MainNavigation";

export default function Header() {
    return (
        <header>
            <h1 className="text-center my-4 text-3xl">My diary</h1>
            <MainNavigation />
        </header>
    );
}
