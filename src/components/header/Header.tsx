import MainNavigation from "../main-navigation/MainNavigation";

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-fuchsia-900 to-blue-700 text-white">
            <h1 className="text-center py-4 text-3xl uppercase">My diary</h1>
            <MainNavigation />
        </header>
    );
}
