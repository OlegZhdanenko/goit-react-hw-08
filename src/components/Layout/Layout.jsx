import AppBar from "../AppBar/AppBar";

export default function Layout({ children }) {
    return (
        <div >
            <AppBar />
            {children}
            {/* <Toaster position="top-right" reverseOrder={false} /> */}
        </div>
    );
}